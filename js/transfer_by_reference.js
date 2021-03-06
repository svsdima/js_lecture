/* Передача по ссылке или по значению, Spread оператор (ES6 - ES9) */

"use strict";

// ------------------------------------------------
/* Здесь идёт передача по значению */
let a = 5,
    b = a;

b = b + 5

console.log(b);
console.log(a);

// --------------------------------------------------
/* Здесь идёт передача по ссылке, а не по значению */
const obj = {
    a: 5,
    b: 1
};

const copy = obj; /* Ссылка */

copy.a = 10;

console.log(copy);
console.log(obj);

// ------------------------------------------------------
/* Поверхностная копия объекта */
/* При помощи цикла, создаёт новый объект, перебирая старые свойства, которые были в нашем объекте */
function copyrait(mainObj) {
    let objCopy = {}; /* Создали новый объект */

    let key; /* Создаём переменную key */
    for (key in mainObj) { /* У нас есть ключи внутри объекта mainObj */
        objCopy[key] = mainObj[key]; /* Копируем свойства из нашего главного объекта и помещаем в новый объект */
    }

    return objCopy; /* Возвращаем объект наружу, чтобы как-то с ним взаимодействовать */
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        d: 25,
        x: 83,
    }
};

const newNumbers = copyrait(numbers); /* Создали копию объекта */

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

/* Здесь мы создали поверхностную копию, потому что она берёт все обычные свойства родителя и создаёт независимые структуры, но когда у нас появляется вложенная структура, например одной из свойств будет содержать объект или массив, то это свойство будет иметь ссылочный тип данных */

// -------------------------------------------------------------
/* Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект. */

const add = {
    d: 17,
    e: 20
}

console.log(Object.assign(numbers, add)); /* Первый аргумент передаём объект В который мы хотим всё поместить, второй аргумент идёт объект, который мы помещаем */

/* Создаём новый объект в него помещается старый объект "add" и получаем отдельную копию */
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// ----------------------------------------------------------------
/* Создаём новый массив, копируя свойство старого */
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); /* Копируем свойство старого массива */

newArray[1] = "Бишоджи"

console.log(newArray);
console.log(oldArray);

// ---------------------------------------------------------------------
/* Оператор разворота Spread(...) */
/* Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
для элементов (литералов массива)
для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов) */

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

// --------------------------------
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// ----------------------------------------------------
/* Создаём копию массива при помощи Spread */
const array = ["a", "b", "c"];

const newArra = [...array];

console.log(newArra);

// -----------------------------
const q = {
    one: 1,
    two: 2,
};

const newQ = {...q};

console.log(newQ);