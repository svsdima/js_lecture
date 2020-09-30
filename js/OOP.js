/* Основы ООП (Объектно-ориентированное программирование), прототипно-ориентированное наследование */

"use strict";

/* Смысл ООП в том, что мы представляем любую вещь как объект с набором свойств и методов. */
let str = "some"; /* Примитивный тип данных */
let strObj = new String(str); /* Превратился в объект и после вернулся в примитив */

console.log(typeof(str));
console.log(typeof(strObj));

// -------------------------------------------------
console.dir([1,2,3]);

// -------------------------------------------------------
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Здаров бродяга!")
    }
};

const John = {
    health: 100
};

/* Устаревший формат, больше не используем */
/* Установили прототипом Джона - солдата */
John.__proto__ = soldier;

/* Современный формат */
/* Установили прототипом Джона - солдата */
Object.setPrototypeOf(John, soldier);

console.log(John);
console.log(John.armor);
John.sayHello();

// -------------------------------------------------------
/* Третий формат */
const soldierDark = {
    health: 600,
    armor: 200,
    sayHello: function() {
        console.log("Крушить! Ломать!")
    }
};

/* Создаём новый объект Кенни, который будет прототипом Тёмного солдата */
const Kenny = Object.create(soldierDark);

console.log(Kenny);
console.log(Kenny.armor);
Kenny.sayHello();