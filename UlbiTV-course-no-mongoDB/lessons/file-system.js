const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'di3'), {recursive: true})

// console.log('START');

// fs.mkdir(path.resolve(__dirname, 'dir'), (error) => {
//   if(error) {
//     console.log(error);
//     return
//   }

//   console.log('Папка создана');
// })

// console.log('END');

// console.log("START");

// fs.rmdir(path.resolve(__dirname, "dir"), (error) => {
//   if (error) {
//     console.log(error);
//     throw error;
//   }

//   console.log("Папка Удалена");
// });

// console.log("END");

// fs.writeFile(path.resolve(__dirname, 'test-file.txt'), 'some new text for test file', (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Файл записан (перезаписан)');
// })

// fs.appendFile(path.resolve(__dirname, 'test-file.txt'), 'something new', (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Файл обновлен');
// })

// Создание и обновление файла асинхронные ф-ции, если необходимо сделать что-то последовательно, телаем вложенность функции

fs.writeFile(path.resolve(__dirname, 'test-file.txt'), 'some new text for test file', (error) => {
  if(error) {
    throw error
  }

  console.log('Файл записан (перезаписан)');

  fs.appendFile(path.resolve(__dirname, 'test-file.txt'), 'something new', (error) => {
    if(error) {
      throw error
    }
  
    console.log('Файл обновлен');
  })
})