/* Объекты, деструктуризация объектов (ES6) */

"use strict";

/* Создаём новый объект */
const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

/* Деструктуризация объектов (ES6) */
const {border, bg} = options.colors;
console.log(border);

console.log(options.name);

/* Если нужно удалить свойство из объекта */
delete options.name;

console.log(options);

/* Перебираем объекты ключ - значение */
/* При помощи counter создаём счётчик */
let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        /* Перебираем ключи внутри ключа */
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else  console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
}

/* Всего кол-во объектов */
console.log(counter);


/* Методы объектов */

/* Метод, берёт объект и на его основании создаёт массив, в котором все элементы - это ключи находящие на первой паре ключ */
console.log(Object.keys(options));

/* Object.keys(options) - массив, в нём получаем кол-во элементов */
console.log(Object.keys(options).length);

/* JS является объектно-ориентированным языком. Все сущности, которые в нём есть сводятся к объектам. */