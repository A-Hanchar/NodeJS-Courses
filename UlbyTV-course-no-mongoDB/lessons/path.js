const path = require("path");

console.log('Склеить участки пути - path.join: ', path.join('first', 'second', 'third'))
console.log('__dirname -путь к текущей директории : ', __dirname)
console.log('__dirname -путь к текущей директории минус один: ', path.join(__dirname, '..'))

console.log('__filename -путь к текущему файлу : ', __filename)

console.log('Абсолютный путь', path.resolve());

const fullpath = path.resolve('first', 'second', 'third', 'file.ts')

console.log('----- path.parse -----');
console.log(path.parse(fullpath));

console.log('Разделитьль в OC', path.sep);
console.log('Проверка на абсолютынй путь', path.isAbsolute(fullpath));
console.log('Проверка на абсолютынй путь', path.isAbsolute('first/second'));

console.log('Название файла', path.basename(fullpath));
console.log('Расширение файла', path.extname(fullpath));


// ----------------------

const siteURL = 'https://localhost:3000/users?id=5123'

const url = new URL(siteURL)

console.log(url);