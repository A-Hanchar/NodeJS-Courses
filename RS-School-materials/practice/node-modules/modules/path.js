const path = require('path')

console.log(path.basename(__filename)) // path.js - имя файла на Windows, полный путь к файлу на POSIX-системах
console.log(path.dirname(__filename)) // C:\Users\ahanchar\Desktop\NodeJS-Courses\RS-School-materials\practice\node-modules\modules - название папки
console.log(path.extname(__filename)) // .js - расширение файла
console.log(path.parse(__filename)) // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения
