/* Параметры документа, окна и работа с ними */

"use strict";

/* Если нужно получить ширину или высоту элемента включая padding, но без border и прокрутки, то можно использовать clientWidth, clientHeight */

const  box = document.querySelector('.box'),
       btn = document.querySelector('.first_btn'),
       btnS = document.querySelector('.second_btn');

const cWidth = box.clientWidth;
const cHeight = box.clientHeight;

console.log(cWidth, cHeight);

/* Если нужно получить ширину или высоту элемента включая padding, border и прокрутки, то можно использовать offsetWidth, offsetHeight */

const oWidth = box.offsetWidth;
const oHeight = box.offsetHeight;

console.log(oWidth, oHeight);

/* Если нужно получить высоту контента внутри скролла используется команда scrollHeight (можно и ширину scrollWidth, но используется редко) */

const sWidth = box.scrollWidth;
const sHeight = box.scrollHeight;

console.log(sWidth ,sHeight);

/* После нажатия на кнопку у бокса устанавливаем полную высоту с учётом всей прокрутки */

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

/* scrollTop показывает сколько было уже прокручено текста */

btnS.addEventListener('click', () => {
    console.log(box.scrollTop);
});

/* Метод, который получает все координаты, которые есть у элемента */
console.log(box.getBoundingClientRect());

/* Если нужно получить css стили, которые были применены к элементу (getComputedStyle()) */
const style = window.getComputedStyle(box);

console.log(style);

/* В JS мы не можем работать с псевдоэлементами, но стили псевдоэлементов мы можем получить */

/* Если нужно узнать высоту или ширину в самом документе надо добавить .documentElement */
console.log(document.documentElement.clientHeight);

/* scrollBy(x, y) позволяет просколить заданное кол-во пикселей от текущей позиции */
/* scrollTo(x, y) позволяет просколить заданное кол-во пикселей от всей страницы */