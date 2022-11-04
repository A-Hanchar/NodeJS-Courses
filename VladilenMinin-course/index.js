const http = require('http')
const fs = require('fs')
const path = require('path')

// request - для получения информации по запросу, который отправляет клиент на сервер
// response - отвечает за ответ сервера
const server = http.createServer((request, response) => {
  let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
  const extName = path.extname(filePath)
  let contentType = 'text/html'

  switch (extName) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }

  if (!extName) {
    filePath += '.html'
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data) => {
        if (error) {
          response.writeHead(500)
          response.end('Error')
        } else {
          response.writeHead(200, {
            'Content-Type': 'text/html',
          })
          response.end(data)
        }
      })
    } else {
      response.writeHead(200, {
        'Content-Type': contentType,
      })
      response.end(content)
    }
  })
})

const PORT = process.env.PORT ?? 3000

// port, callback - отрабатывает, после того, как сервре будет запущен
server.listen(PORT, () => {
  console.log(`Сервер стартовал, порт - ${PORT}`)
})
