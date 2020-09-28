"use strict"; /* Директива - Работаем в современном режиме, прописываем только в начале!!! */

// a = 15; /* При использовании директивы strict вылезает ошибка */
// console.log(a);

/* В консоли разработчика высвечивается сообщение */
// console.log(1); 

/* Переменные */
/*let переменное изменяемое, number имя, = присваивание, 5 значение */
let number = 5;
/*const переменное постоянное, leftBorderWidth имя - ширина левой границы, = присваивание, 1 значение */
const leftBorderWidth = 1;
/* var переменное - старый формат, не использовать!!! */
var name = 'Dmitriy'

number = 10; /* Переменное number присваиваем значение */
console.log(number); /* В консоли показать значение number */

// leftBorderWidth = 10; /* Вылезает ошибка, потому что leftBorderWidth имеет постоянное значение и поменять его нельзя  */
// console.log(leftBorderWidth);

/* Создаём переменную внутри которой что-то заложено */
/* Прямых const в JS не бывает! */
const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

/* В круглых скобках let вылезает ошибка, если заменить на var - ошибка исчезнет */
{
    let result = 50;
}

console.log(result);