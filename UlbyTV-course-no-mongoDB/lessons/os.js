const os = require("os");
const cluster = require("cluster");
const process = require("process");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

// const cpus = os.cpus();

// for (let i = 0; i < cpus.length - 2; i++) {
//   const CPUCore = cpus[i];
//   console.log("Заупустить еще 1 node.js процесс");
// }

// console.log(process.pid);

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Воркер с pid= ${worker.process.pid} умер`);
    cluster.fork();
  });
} else {
  console.log(`Воркер с pid= ${process.pid} запущен`);

  setInterval(() => {
    console.log(`Воркер с pid= ${process.pid} еще работает`);
  }, 5000);
}
