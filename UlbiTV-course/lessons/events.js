const Emitter = require('events')

const emitter = new Emitter()

const showMessage = (data, second, third) => {
  console.log('Вы прислали сообщение ' + data)
  console.log('Второй аргумент ' + second)
}

emitter.on('message', showMessage)

// Генерирует событие единожды (once)
emitter.once('message', showMessage)

emitter.removeAllListeners() // удаление всех слушателей
emitter.removeListener('message', showMessage) // удаление одного слушателя

const MESSAGE = process.env.message ?? ''

if (MESSAGE) {
  // Генерация события
  emitter.emit('message', MESSAGE, 123)
  emitter.emit('message', MESSAGE, 123)
  emitter.emit('message', MESSAGE, 123)
  emitter.emit('message', MESSAGE, 123)
  emitter.emit('message', MESSAGE, 123)
} else {
  emitter.emit('message', 'Вы не указали сообщение!')
}

/**
 * Когда удобно использовать?
 * при создании HTTP серверов, при обмене какими-либо сообщениями, когда необходимо сгенерировать какой-либо событие на какое-то определенное действие, в вебсокетах, кластаризации и т.д.
 */
