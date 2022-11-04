const os = require('os')

console.log('Операционная система: ', os.platform())

console.log('Архитектура процессора: ', os.arch())

console.log('Информация по процессорам: ', os.cpus()) // массив объектов

console.log('Свободная память: ', os.freemem())

console.log('Количество всей памяти: ', os.totalmem())

console.log('Домашняя директория: ', os.homedir())

console.log('Система включена в течение: ', os.uptime(), ' секунд')
