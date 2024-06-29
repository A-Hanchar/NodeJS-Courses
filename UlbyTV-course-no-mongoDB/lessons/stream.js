// Readable - чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require("fs");
const path = require("path");
const http = require("http");

// fs.readFile(path.resolve(__dirname, "test.txt"), (error, data) => {
//   if (error) {
//     throw error;
//   }

//   console.log(data);
// });

// const stream = fs.createReadStream(path.resolve(__dirname, "test2.txt"));

// // Один чанк по дефолту 64kb
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("Закончили читать");
// });

// stream.on("open", () => {
//   console.log("Начали читать");
// });

// stream.on("error", (error) => {
//   console.log("Ошибка", error);
// });

//---------------
// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "test2.txt")
// );

// for (let index = 0; index < 20; index++) {
//   writableStream.write(index + "\n");
// }

// writableStream.end();
// writableStream.close()
// writableStream.destroy()

// writableStream.on('end', () => {
//   console.log("writableStream: on event");
// })

// writableStream.on('error', () => {
//   console.log("writableStream: on error");
// })

// -----------
http.createServer((request, response) => {
  /**
   * request - readable stream
   * response - writable stream
   */

  const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

  // Сетевое подключение значительней медленнее, чем чтение файла
  // Может возникнуть следующая ситуация: мы файл прочитали, соединение закончили, но при этом пользователь не успел полностью выкачать файл
  // Для этого необходимо использовать pipe

  // stream.on("data", (chunk) => response.write(chunk));
  // stream.on("end", () => response.end());

  stream.pipe(response);
});
