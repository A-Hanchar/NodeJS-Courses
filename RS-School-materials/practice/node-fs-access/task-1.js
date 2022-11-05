/**
 * Напишите программу, которая возвращает путь к папке, если запускается с флагом '-d', или путь к файлу, если запускается с флагом '-f'.
 * Если файл запускается без флага или с флагом, отличным от указанных в задании, выводится предложение запустить программу с флагом '-d' или '-f'.
 */

const { stdin, stdout, exit } = process

const flag = process.argv[2]

const allowedFlags = ['-d', '-f']

if (!allowedFlags.includes(flag)) {
  console.log("Запустите программу с флагом '-d' или '-f'")
}

if (flag === '-d') {
  stdout.write(__dirname)
}

if (flag === '-f') {
  stdout.write(__filename)
}

exit()
