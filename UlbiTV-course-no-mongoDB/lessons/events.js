const Emitter = require("events");

const emitter = new Emitter();

const cbMessage = (data, second, third) => {
  console.log("Event: message");
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
};

const cbMessageOnce = (data, second, third) => {
  console.log("Event: message-once");
  console.log("Вы прислали сообщение " + data);
  console.log("Второй аргумент " + second);
};

// Определяем кастомное событие
emitter.on("message", cbMessage);

// Генерирует событие один раз
emitter.once("message-once", cbMessageOnce);

const MESSAGE = process.env.MESSAGE ?? "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "Вы не указали сообщение");
}

console.log("-------------");
emitter.emit("message", "MESSAGE");
emitter.emit("message", "MESSAGE");
emitter.emit("message", "MESSAGE");
emitter.emit("message", "MESSAGE");
emitter.emit("message", "MESSAGE");

console.log("-------------");
emitter.emit("message-once", "MESSAGE");
emitter.emit("message-once", "MESSAGE");
emitter.emit("message-once", "MESSAGE");
emitter.emit("message-once", "MESSAGE");
emitter.emit("message-once", "MESSAGE");

emitter.removeAllListeners();
emitter.removeListener("message", cbMessage);
emitter.removeListener("message-once", cbMessageOnce);

/**
 * Когда удобно использовать?
 * http
 * websockets
 * long pulling
 * cluster
 * ...
 */
