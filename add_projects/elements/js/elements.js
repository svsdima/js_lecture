/* Получение элементов со страницы */
'use strict';

/* Для взаимодействия со страницей в консоль вбиваем document. и вылезает список. document работает только в браузере */

/* Метод Get element by ID (Получение элемента по уникальному идентификатору (один на странице)) */
 const box = document.getElementById('box');

 /* Получаем <div class="box" id="box"></div> */
 console.log(box);

//  --------------------------------------------------------------
/* Получили не один элемент, а псевдомассив */
const btns = document.getElementsByTagName('button');

/* Получаем HTMLCollection(5) [button, button, button, button, button] */
console.log(btns);

// --------------------------------------------------------------------
/* Получили при помощи синтаксиса конкретный элемент */
const butnns = document.getElementsByTagName('button') [1];

/* Получаем <button>2</button> */
console.log(butnns);


// --------------------------------------------------------------------
/* Получили  конкретный элемент */
const borbrs = document.getElementsByTagName('button');

/* Получаем <button>3</button> */
console.log(borbrs[2]);

// --------------------------------------------------------------------
/* Получаем классы */
/* Вбиваем название класса без точки */
const circles = document.getElementsByClassName('circle');

/* Получаем HTMLCollection(3) [div.circles, div.circles, div.circles] */
console.log(circles);


// --------------------------------------------------------------------
/* Помещаем внутрь CSS селектор */
/* Обязательно ставим точку при указании класса */
const hearts = document.querySelectorAll('.heart');

/* Получаем NodeList(3) [div.heart, div.heart, div.heart] */
console.log(hearts);


/* !NodeList в отличии от HTMLCollection содержит метод forEach! */

// --------------------------------------------------------------------
/* Получаем все элементы при помощи querySelectorAll и forEach */
const heartsSecond = document.querySelectorAll('.heart');

/* item - каждый элемент, который находится в псевдомассиве */
heartsSecond.forEach(item => {
    console.log(item); 
});
/* Получаем 
<div class="heart">...</div>
<div class="heart">...</div>
<div class="heart">...</div> */

// --------------------------------------------------------------------
/* Получаем первый элемент при помощи querySelector */
const oneHeart = document.querySelector('.heart');

console.log(oneHeart);
/* Получаем 
<div class="heart">...</div> */