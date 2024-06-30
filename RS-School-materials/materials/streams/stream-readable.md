## Поток чтения (Readable stream)
[HOME](../../README.md)

Поток чтения, как понятно из его названия, используется для чтения данных. Источником данных может быть что угодно: ввод пользователя, файл, входящий запрос пользователя при обработке на сервере, другой поток, асинхронный итератор и т.д.

Создадим программу, которая будет читать достаточно большой файл  и выводить его содержимое в консоль. Для этого используем модуль `fs`, но вместо метода `readFile()` используем метод `createReadStream()`, параметром которого укажем название файла `source.txt`, из которого будем читать информацию. Так как файл лежит в той же директории, что и файл с кодом, путь к файлу прописывать не обязательно.
```js
const fs = require('fs');
const readableStream = fs.createReadStream('source.txt');
```
У потока чтения есть событие `data`, которое генерируется, когда стрим прочитал порцию данных и готов отдать ее потребителю этих данных.
При наступлении этого события выведем поступившую часть данных в консоль:  
```js
const fs = require('fs');
const readableStream = fs.createReadStream('source.txt');
readableStream.on('data', chunk => console.log(chunk));
```  
В консоли вместо текста объекты `Buffer`. Раньше эту проблему мы решали при помощи метода `data.toString()`, но преобразовать `Buffer` в строку можно и другим способом, указав вторым параметром метода `createReadStream()` кодировку `'utf-8'`.

Как убедиться, что данные приходят по частям?  
Выведем в консоль не сами данные, а длину каждой пришедшей части данных
```js
const fs = require('fs');
const readableStream = fs.createReadStream('source.txt');
readableStream.on('data', chunk => console.log(chunk.length));
```  
Если файл с данными достаточно большой, видно, что приходят они частями (чанками) размером 64кБ.

Чтобы все эти части собрать вместе, определим переменную `datа`. Её значением укажем пустую строку. Каждую пришедшую часть данных будем присоединять к `datа`.
```js
const fs = require('fs');
const stream = fs.createReadStream('source.txt', 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
```  
Так как мы имеем дело с потоком данных, нам нужно знать когда поток завершится. Для этого у стрима есть событие `'end'`. Это событие срабатывает когда все данные уже переданы.  
При наступлении события `'end'` выведем в консоль сообщение и длину полученных данных:
```js
const fs = require('fs');

const stream = fs.createReadStream('source.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data.length));
```
Обработаем возможную ошибку. При возникновении ошибки будет сгенерировано событие `error`. При наступлении ошибки выведем в консоль сообщение и текст ошибки. Чтобы вызвать ошибку, укажем несуществующее имя файла
```js
const fs = require('fs');

const stream = fs.createReadStream('source2.txt', 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message));
```