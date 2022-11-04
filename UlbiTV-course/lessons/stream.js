// Readble - чтение
// Writable - запись
// Diplex - для чтения и записи Readable + Writable
// Transform - такой же как и Duplex, но может изменить данные по мере чтения

// По умолчанию размер куска файла 64кб

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'stream-test-file.txt'), (error, data) => {
//   if(error) {
//     throw error
//   }

//   console.log(data);
// })

const stream = fs.createReadStream(path.resolve(__dirname, 'stream-test-file.txt'), {
  encoding: 'utf-8',
})

// Один chunk по умолчанию 64кб
stream.on('data', chunk => {
  console.log(chunk)
})

stream.on('end', () => {
  console.log('Закончили считывать файл')
})

stream.on('open', () => {
  console.log('Начали считывать файл')
})

stream.on('error', error => console.log(error))

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'stream-test-file-2.txt'))

for (let i = 0; i < 20; i++) {
  writableStream.write(i + '\n')
}

// Для закрытия стрима
writableStream.end(() => {
  console.log('Закрыли стрим')
})

writableStream.close()
writableStream.destroy()
writableStream.on('error', error => console.log(error))

const http = require('http')

http.createServer((request, response) => {
  // request - readable stream
  // response - writable stream

  const stream = fs.createReadStream(path.resolve(__dirname, 'stream-test-file-2.txt'))

  // Вроде правилоно, но сетевое подключение намного медленее, чем чтение файла
  // Возникнет такая ситуация, что мы файл прочитали, соединение закончили, но при этом пользователь не успел полностью выкачать файл
  stream.on('data', chunk => response.write(chunk))
  stream.on('end', () => response.end())

  // Чтобы не возникало ситуации описаной выше, есть метод pipe

  stream.pipe(response)
})
