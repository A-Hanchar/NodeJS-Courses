const os = require('node:os')
const cluster = require('node:cluster')

// console.log(os.platform()); // платформа
// console.log(os.arch()); // архитектура пройцессора (пример x64)
// console.log(os.cpus()); // информация о ядрах процессора - массив
// console.log(os.cpus().length); // кол-во ядер процессора

// делаем проверку, является ли текущий процесс главным - isMaster is deprecated
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)

  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork()
  }

  cluster.on('exit', worker => {
    console.log(`Воркер с pid = ${worker.process.pid} "умер"`)
  })
} else {
  console.log(`Воркер с pid = ${process.pid}`)

  setInterval(() => {
    console.log(`Воркер с pid = ${process.pid} всё еще работает`)
  }, 5000)
}

// const cpus = os.cpus()

// // Оставлять 1-2 процессора для нужд ОС
// for(let i = 0; i < cpus.length - 2; i++) {
//   const CPUcore = cpus[i]

//   console.log('Запустить ещё один node js процесс');
// }

// console.log(process.pid);
