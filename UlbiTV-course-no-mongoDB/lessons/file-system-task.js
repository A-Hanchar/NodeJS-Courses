const path = require('path')
const fs = require('fs')

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

const envValue = process.env.FILE_SYSTEM_TASK ?? 'empty_env_value'

const createFile = async (path, data) => new Promise((resolve, reject) => fs.writeFile(path, data, (error) => {
  if(error) {
    return reject(error)
  }

  resolve(path)
}))

const appendToFile = async (path, data) => new Promise((resolve, reject) => fs.appendFile(path, data, (error) => {
  if(error) {
    return reject(error)
  }

  resolve(path)
}))

const readFile = async (path) => new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
  if(error) {
    return reject(error)
  }

  resolve(data)
}))

const removeFile = async (path) => new Promise((resolve, reject) => fs.rm(path, (error) => {
  if(error) {
    return reject(error)
  }

  resolve()
}))

const filePath = path.resolve(__dirname, 'file-system-task.txt')

createFile(filePath, envValue).then(readFile).then((data) => {
  const wordsCount = data.split(' ').length
  
  return createFile(path.resolve(__dirname, 'count.txt'), `${data}: words count is ${wordsCount}`)
}).then(() => removeFile(filePath))

