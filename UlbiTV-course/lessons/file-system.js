const fs = require('fs')
const path = require('path')

// Создание папок

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true}) // для создания вложенных папок

// // ------------
// console.log('START');

// fs.mkdir(path.resolve(__dirname, 'dir'), (error) => {
//   if(error) {
//     console.log(error);

//     return
//   }

//   console.log('Папка создана');
// })

// fs.mkdir(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true}, (error) => {
//   if(error) {
//     console.log(error);

//     return
//   }

//   console.log('Папка создана');
// })

// console.log('END');

// Удаление папок
// fs.rmdir(path.resolve(__dirname, 'dir'), (error) => {
//   if(error) {
//     throw error
//   }
// })

// Создание файла и запись в него

// // если что-то было записано в файл, то следующая функция пересотрет наполнения файла
// fs.writeFile(path.resolve(__dirname, 'test.tsx'), '5 qwerty 1 2 3', (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Файл записан');
// })

// // функция добавляет в конец файла содерждимое
// fs.appendFile(path.resolve(__dirname, 'test.tsx'), 'Добавили в конец', (error) => {
//   if(error) {
//     throw error
//   }

//   console.log('Файл обновлен');
// })

/** Предыдущие функции асинхронны, следовательно невозможно предугадать,
 * какая именно функция выполнится раньше, чтобы правильно реализовать добавление записи в конец,
 * необходимо одну фунекцию вложить в другую  - но это пораждает ад коллбеков */
// fs.writeFile(path.resolve(__dirname, "test.tsx"), "5 qwerty 1 2 3", (error) => {
//   if (error) {
//     throw error;
//   }

//   console.log("Файл записан - правильно");

//   fs.appendFile(
//     path.resolve(__dirname, "test.tsx"),
//     "Добавили в конец",
//     (error) => {
//       if (error) {
//         throw error;
//       }

//       console.log("Файл обновлен - правильно");
//     }
//   );
// });

// Переписываем на промисы
// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path, data, (error) => {
//       if (error) {
//         return reject(error);
//       }

//       resolve();
//     })
//   );
// };

// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.appendFile(path, data, (error) => {
//       if (error) {
//         return reject(error);
//       }

//       resolve();
//     })
//   );
// };

// Чтение файла
// const readFileAsync = async (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
//       if(error) {
//         return reject(error)
//       }

//       resolve(data)
//     })
//   })
// }

// writeFileAsync(path.resolve(__dirname, "test.tsx"), "data text")
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.tsx'), 'add 1'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.tsx'), 'add 2'))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.tsx'), 'add 3'))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.tsx")))
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// Удаление файла
// const removeFileAsync = async (path) => {
//   return new Promise((resolve, reject) => {
//     fs.rm(path, (error) => {
//       if(error) {
//         return reject(error)
//       }

//       resolve()
//     })
//   })
// }

// removeFileAsync(path.resolve(__dirname, 'test.tsx'))
// .then(() => console.log('Файл удалён'))

// Задача
/**
 * Через переменную окружения мы передаем строку, записываем её в файл,
 * потом мы этот файл считываем, считаем количество слов в этом файле и записываем их в другой файл, при этом другой файл мы удаляем
 */
const text = process.env.TEXT ?? 'ttt g ffff'
const filePath = path.resolve(__dirname, 'test.txt')
const newFilePath = path.resolve(__dirname, 'new-test.txt')

fs.writeFile(filePath, text, error => {
  if (error) {
    console.log('Записывание', error)

    return
  }

  fs.readFile(filePath, { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      console.log('Чтение', error)

      return
    }

    console.log('Текст из файла:', data)

    console.log('Количество слов', data.split(' ').length)

    fs.writeFile(newFilePath, `Количество слов: ${data.split(' ').length} ${data}`, error => {
      if (error) {
        console.log('Запись в новый файл', error)

        return
      }

      fs.rm(filePath, error => {
        if (error) {
          console.log('Удаление файла', error)

          return
        }
      })
    })
  })
})
