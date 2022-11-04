// File System
const fs = require('fs')
const path = require('path')

// Создание папки
// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Папка создана');
// })

// Создание файла
const filtePath = path.join(__dirname, 'test', 'fa-text.txt')

// writeFile перетерает полностью уже созданный конетн файла
// fs.writeFile(filtePath, 'Hello NodeJS!', (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Файл создан')

//   // добавляет контент к файлу
//   fs.appendFile(filtePath, '\nHello Again!', (error) => {
//     if(error) {
//       throw error
//     }

//     console.log('Файл Обновлен')
//   })
// })

// Чтение файла
fs.readFile(filtePath, 'utf-8', (error, content) => {
  if (error) {
    throw error
  }

  console.log('Content: ', content)

  // Превращаем контент в строку (по умолчанию это буфер)
  // const data = Buffer.from(content)
  // console.log('Content: ', data.toString());

  // Также существует другой способ: метод readFile вторым параметром принимает строку, которая содержит тип кодировки
})
