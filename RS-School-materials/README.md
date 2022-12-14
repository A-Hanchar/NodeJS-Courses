## Node.js
![Node.js logo](materials/images/node-logo.jpg)

**Node.js** — среда выполнения JavaScript вне браузера.

В основе Node.js — виртуальная машина V8. Она была создана компанией Google для браузера Chrome. V8 умеет выполнять JavaScript быстрее и экономнее, чем любая другая.

Node.js используется для создания веб-серверов, самостоятельных приложений, программ для компьютеров и мобильных устройств, а также программирования микроконтроллеров.

У Node.js только одна платформа, в которой в результате постоянного улучшения появляется поддержка новейших возможностей Javascript. В отличие от браузерного JS, не нужно заботиться о поддержке устаревших браузеров, практически никогда не нужно транспилировать код под старые версии платформы (однако, как и в случае с браузерным JS, перед использованием новейших возможностей языка рекомендуется проверить, что они уже поддерживаются выбранной версией Node.js).

Компании выбирают Node.js за скорость и простоту разработки, возможность использовать один язык при создании фронтенда и бэкенда, скорость работы созданных приложений, кроссплатформенность, экономию ресурсов.

К относительным недостаткам Node.js можно отнести то, что он несколько хуже подходит для решения задач, требующих интенсивных вычислений (хотя с появлением `worker threads` ситуация значительно улучшилась).

## Содержание
1. [Начало работы](materials/node-introduction.md)
2. [Операции ввода/вывода](materials/node-io.md)
3. [Стандартные потоки ввода/вывода](materials/node-stdio.md)
4. [Аргументы командной строки](materials/node-argv.md)
5. [Доступ к файловой системе](materials/node-fs-access.md)
6. [Модули](materials/node-module.md)
    - [модуль path](materials/modules/path.md)
    - [модуль fs](materials/modules/fs.md)
    - [модуль os](materials/modules/os.md)
    - [модуль http](materials/modules/http.md)
    - [модули, устанавливаемые через npm](materials/modules/npm-module.md)
    - [создание собственных модулей](materials/modules/create-module.md)
7. [События](materials/events.md)
8. [Потоки](materials/streams/stream.md)
    - [поток чтения](materials/streams/stream-readable.md) 
    - [поток записи](materials/streams/stream-writable.md)
    - [объединение потоков](materials/streams/stream-pipes.md)
9. [Проекты](materials/projects/projects.md)
    - [приложение для заметок](materials/projects/notes.md)
    - [приложение Таймер](materials/projects/timer.md)
    - [приложение Github](materials/projects/github-app.md)