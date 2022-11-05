const fs = require('fs')
const path = require('path')

// Создадим папку fs-notes в текущей директории
fs.mkdir(path.join(__dirname, 'fs-notes'), error => {
  if (error) {
    throw error
  }

  console.log('Папка была создана')
})

// Создадим файл fs-mynotes.txt, содержащий текст "Hello world" внутри папки fs-notes
fs.writeFile(path.join(__dirname, 'fs-notes', 'fs-mynotes.txt'), 'Hello world', error => {
  if (error) {
    throw error
  }

  console.log('Файл был создан')
})

// Дополним файл, записав в него ещё какую-то информацию
fs.appendFile(path.join(__dirname, 'fs-notes', 'fs-mynotes.txt'), ' From append file', error => {
  if (error) {
    throw error
  }

  console.log('Файл был изменен')
})

// Прочитаем информацию из файла
fs.readFile(path.join(__dirname, 'fs-notes', 'fs-mynotes.txt'), 'utf-8', (error, data) => {
  if (error) {
    throw error
  }

  console.log(data)
})

// Переименуем файл
// fs.rename(
//   path.join(__dirname, 'fs-notes', 'fs-mynotes.txt'),
//   path.join(__dirname, 'fs-notes', 'fs-notes.txt'),
//   error => {
//     if (error) {
//       throw error
//     }
//     console.log('Файл переименован')
//   },
// )
