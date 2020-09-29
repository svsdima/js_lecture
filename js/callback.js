/* Callback - функции. Это функция, которая должна быть выполнена, после того, как другая функция завершила своё выполнение */

"use strict";

/* Функция с задержкой в полсекунды */
function first() {
    // Что-то делаем
    setTimeout(function() {
        console.log(1);
    }, 500);
}

/* Функция без задержки */
function second() {
    console.log(2);
}

/* Вторая функция запустится раньше первой */
first();
second();

/* После того как строго выполнится первая функция, пойдёт функция callback */
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);