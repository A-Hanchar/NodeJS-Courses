const { stdin, stdout } = process

stdout.write('Как тебя зовут?\n')

// data isn't String type
stdin.on('data', data => {
  stdout.write('Привет, ')

  /**
   * data - специальный объект Buffer
   * Buffer.from(data, 'utf-8') - перекодируем полученную data в нужный формат кодировки
   */
  stdout.write(Buffer.from(data, 'utf-8').toString().toUpperCase())
  process.exit()
})

process.on('exit', () => stdout.write('Удачи!'))
