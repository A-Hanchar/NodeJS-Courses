/**
 * Напишите программу, которая просит у пользователя ввести два числа,
 * складывает эти числа, если запускается с флагом `-s`,
 *  или перемножает, если запускается с флагом `-m`,
 * после чего завершает свою работу. Для ввода и вывода информации используйте стандартные потоки ввода/вывода.
 *  Пример работы (пользовательский ввод начинается с `>`)
 */

const { stdin, stdout, exit } = process

const flag = process.argv[2]

const allowedFlags = ['-m', '-s']

if (!allowedFlags.includes(flag)) {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m')

  exit()
}

stdout.write('Введите два числа?\n')

stdin.on('data', data => {
  const dataAsString = Buffer.from(data, 'utf-8').toString()
  const arrayOfNumbers = dataAsString.split(' ')

  const [num1, num2] = arrayOfNumbers.map(numStr => Number(numStr))

  if (flag === '-s') {
    const sum = num1 + num2

    stdout.write(`sum is ${sum}`)
  }

  if (flag === '-m') {
    const sum = num1 * num2

    stdout.write(`multi is ${sum}`)
  }

  exit()
})
