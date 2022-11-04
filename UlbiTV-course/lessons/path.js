const path = require('path')

//
console.log('Склеить участки пути', path.join(__dirname, 'first', 'second', 'third'))
console.log('Вернуться на папку назад', path.join(__dirname, '..'))

//
console.log('Получить абсолютный путь', path.resolve('first', 'second'))

//
const fullPath = path.join(__dirname, 'first', 'second.js ')
console.log('Парсинг пути', path.parse(fullPath))

//
console.log('Разделить в ОС', path.sep)

//
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Проверка на абсолютный путь', path.isAbsolute(fullPath))

//
console.log('Название файла', path.basename(fullPath))

//
console.log('Расширение файла', path.extname(fullPath))

// --------------------------

const siteURL = 'http://localhost:8080/users?id=1812'

const url = new URL(siteURL)

console.log(url)
