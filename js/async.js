/* Asyns, defer, динамические скрипты */

/* 1) Страница не ждёт ассинхронных скриптов, содержимое просто обрабатывается и отображается */
/* 2) Событии DOMContentLoaded и ассинхронные скрипты не ждут друг друга */

/* Проще говоря Async загружает скрипт в фоновом режиме и запускается как только был загружен (никого не ждёт) */

'use strict';

const h = document.querySelectorAll('h2');
console.log(h);