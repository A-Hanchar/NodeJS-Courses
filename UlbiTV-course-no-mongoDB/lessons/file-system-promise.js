const path = require("path");
const fs = require("fs");

// Create new file
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (error) => {
      if (error) {
        return reject(error.message);
      }

      resolve();
    })
  );
};

// Append data in the end of file
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (error) => {
      if (error) {
        return reject(error.message);
      }

      resolve();
    })
  );
};

// Read file
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
      if (error) {
        return reject(error.message);
      }

      resolve(data);
    })
  );
};

// Remove file
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (error) => {
      if (error) {
        return reject(error.message);
      }

      resolve();
    })
  );
};

const filePath = path.resolve(__dirname, "file-system-append-async-test.txt");

writeFileAsync(filePath, 'data')
  .then(() => appendFileAsync(filePath, "123"))
  .then(() => appendFileAsync(filePath, "456"))
  .then(() => appendFileAsync(filePath, "some text"))
  .then(() => readFileAsync(filePath))
  .then(console.log)
  .then(() => removeFileAsync(filePath))
  .catch(console.log)
