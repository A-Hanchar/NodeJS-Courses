const { stdin, stdout } = process

stdout.write('Как тебя зовут?\n')

stdin.on('data', data => {
  const dataString = data.toString()
  let reversData = ''

  for(let i = dataString.length - 1; i >=0; i--) {
    reversData += dataString[i]
  }

  stdout.write(`\nТвоё имя наоборот ${reversData}\n`);
  process.exit();
})

process.on('exit', () => stdout.write('Хорошая Работа!'))