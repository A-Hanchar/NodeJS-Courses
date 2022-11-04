const EventEmitter = require('events')

const emitter = new EventEmitter()

// Через метод .on прослушиваем события
// emitter.on('anything', (data) => {
//   console.log('ON: anything ', data);
// })

// Создание события, второй параметр - к примеру, какие-то конфигурации (данные, которые мы хотим передать)
// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})

// setTimeout(() => {
//   emitter.emit('anything', {c: 2})
// }, 1500)

class Dispatcher extends EventEmitter {
  constructor() {
    super()
  }

  subscribe(eventName, callback) {
    console.log('[Subscribe...]')

    this.on(eventName, callback)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...]')

    this.emit(eventName, data)
  }
}

const dispatcher = new Dispatcher()

// Порядок ВАЖЕН!!!!  сначала ставим прослушку события, потом его создание иначе не будет работать
dispatcher.subscribe('aa', data => {
  console.log('ON: aa ', data)
})

dispatcher.dispatch('aa', { aa: 10 })
