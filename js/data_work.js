/* Работа с датами */

"use strict";

/* Создаём новую дату */
const now = new Date();

console.log(now);

/* При запуске вылезит текущая дата (Пример: 2020-10-13T11:33:59.204Z, где Т - это разделитель) */

// -------------------------------------------------------
/* Создаём новую дату в виде строки */
const nowTwo = new Date('2020-10-13');

console.log(nowTwo);

/* Получается 2020-10-13T00:00:00.000Z */

// -------------------------------------------------------
const nowThree = new Date(2020, 5, 2, 20);

console.log(nowThree);

/* Получается 2020-06-02T17:00:00.000Z. Почему 06? Потому что месяцы в дате считаются с нуля (0- январь). Задали 20 часов по гринвичу вылезло 17 с учётом часового пояса */

// -------------------------------------------------------
/* Передаём 0 миллисекунд */
const nowFour = new Date(0);

console.log(nowFour);

/* Получается 1970-01-01T00:00:00.000Z - это начало всего отсчёта */

// -------------------------------------------------------
/* Если нужно получить дату до 1970 года задаём отрицательное значение в миллисекундах */
const nowFive = new Date(-500000000000);

console.log(nowFive);

/* Получается 1954-02-26T23:06:40.000Z */

// -------------------------------------------------------
/* Получение компонентов даты (методы) */
const nowSix = new Date();

console.log(nowSix.getFullYear());
console.log(nowSix.getMonth());
console.log(nowSix.getDate());
console.log(nowSix.getHours());
console.log(nowSix.getMinutes());
console.log(nowSix.getSeconds());
console.log(nowSix.getMilliseconds());
console.log(nowSix.getDay());
/* Получается с местным часовым появом год; месяц; день; часы; минуты; секунды; миллисекунды;  день недели (начинается с воскресенья - это 0)*/

console.log(nowSix.getUTCHours());
/* Часы в UTC */
/* UTC - это Всемирное координированное время */

console.log(nowSix.getTimezoneOffset());
/* Разница между часовым поясом и UTC в минутах*/

console.log(nowSix.getTime());
/* Сколько времени прошло с момента января 1970 года (в миллисекундах) */


// -------------------------------------------------------
/* Методы сеттеры - можем установить дату*/
const nowSeven = new Date();

console.log(nowSeven.setFullYear(2018));
console.log(nowSeven.setMonth(7));
console.log(nowSeven.setDate(23));
console.log(nowSeven.setHours(10));
console.log(nowSeven.setMinutes(45));
console.log(nowSeven.setSeconds(12));
console.log(nowSeven.setMilliseconds(32));
console.log(nowSeven);

/* Получается 2018-08-23T07:45:12.032Z, в VSCode часы ориентируются на UTC зону, но если запустить в браузере, то будет дата с учётом часового пояса */

// -------------------------------------------------------
/* ** - возвести в степень */
let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);