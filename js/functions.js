/* Функции */

"use strict";

/* Функции - наши действия в JS */
/* Название должно быть глаголом с припиской того над чем выполняется действие */
/* Функция работаёт ещё до того, как она была вызвана */

/* Function Declaration */

let num = 20; /* Глобальная переменная */

function showFirstMessage(text) {
    console.log(text);
    let num = 10; /* Локальная переменная */
    console.log(num);
}

/* Вызываем функцию */
showFirstMessage("Hello World!");
console.log(num);

/* Замыкание функции - это сама функция, вместе со всеми переменными, которые ей доступны */
/* Return позволяет повторять одну и туже функцию, после него ничего не задаём */

// ---------------
function calc (a, b) {
    return (a + b);
}

console.log(calc(4, 9));
console.log(calc(6, 13));
console.log(calc(2, 63));
console.log(calc(12, 154));

// ---------------
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// ---------------------
/* Function Expression */

const logger = function() {
    console.log("Hello");
};

logger();

// --------------
/* Стрелочные функции */
/* Не имеет контекста вызова (this) */
const cals = (a, b) => { return a + b };