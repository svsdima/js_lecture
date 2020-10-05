/* I) Получение элементов со страницы */
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
// --------------------------------------------------------------------
const wrapper = document.querySelector(".wrapper");


/* II) Действия с элементами на странице */

/* Изменяем стили элементов */

/* Чтобы узнать, что мы можем сделать с элементом, смотрим на него в качестве объекта */
console.dir(box); /* В браузере видим div#box.box, в нём перечислено всё, что мы можем делать с элементом  */

/* При помощи поиска находим свойство style. Это объект внутри объекта. В объекте style - все свойства - это инлайн свойства */
/* Инлайн стили всегда самые важные, поэтому они перебивают все остальные CSS стили */

/* Меняем цвет заднего фона в box */
box.style.backgroundColor = "blue";
box.style.width = '500px';

/* Во второй кнопке меняю радиус */ /* В псевдомассиве надо чётко указывать в каком элементе меняются стили, в самом псевдомассиве нет такого объекта как style */
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "black";

// -----------------------------------------------------------------------------
/* CSS текст - передаёт стили в качестве текста, прописываем свойство в нормальном CSS коде */
circles[1].style.cssText = "background-color: green; width: 200px"
/* Можно также указывать для динамического изменения: */
// circles[1].style.cssText = `background-color: green; width: ${num}`;

// -----------------------------------------------------------------------------------------------------------
/* Если нужно произвести одно и тоже изменение на нескольких элементах */

/* При помощи цикла */
/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "black";
} */

// ----------------------------------------------------
/* Перебирающий метод forEach*/
hearts.forEach(item => {
    item.style.backgroundColor = "black";
});

// ----------------------------------------------------
/* Основные методы для работы с элементами страницы*/

/* Современные методы */

/* Метод document.createElement, позволяет создавать элемент в JS, на странице он никак не появится */
const div = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');


/* Создаём текстовые узлы при помощи document.createTextNode (элемент на странице = нода) */
const text = document.createTextNode('Тут бы Фредди поселился, но нет');

/* Модифицируем CSS классы элементов (добавляем, удаляем, переключаем) */
/* Добавляем в div класс black */
div.classList.add('black');
divTwo.classList.add('red');
divThree.classList.add('green');

/* Делаем так, чтобы div с классом black появился наконец-то на странице */
/* Берём тег body и во внутрь (самый конец), пихаем div */
document.body.append(div);

/* Если нужно, например, запихнуть div внутрь обёртки wrapper,то пишем document.wrapper.append(div) */

/* Ещё один формат получения переменных, если элемент больше одного раза не будем использовать */
// document.querySelector(".wrapper").append(div);

/* Метод prepend вставляет в начале родителя какой-то элемент */
wrapper.prepend(div);

/* Метод при котором можно вставить элемент перед каким-то элементом */
hearts[1].before(divTwo);

/* Метод при котором можно вставить элемент после какого-то элемента */
hearts[1].after(divThree);

/* Можно удалить объект со страницы (удаляю четвёртую кнопку) */
btns[3].remove();

/* Можно один элемент заменить другим */
hearts[0].replaceWith(circles[3]);

// --------------------------------------------------------------------------------
/* Устаревшие методы */

/* Вставляем элемент в конец wrapper */
// wrapper.appendChild(div);

/* Вставляем элемент перед hearts[0] */
// wrapper.insertBefore(div, hearts[0]);

/* Удаляем элемент */
// wrapper.removeChild(hearts[1]);

/* Заменяем один элемент на другой. Первый элемент НА который мы хотим поменять, второй элемент, который меняется */
// wrapper.replaceChild(circles[0], hearts[0]);
// --------------------------------------------------------------------------------

/* Добавляем текст или HTML код прямо в элементы */

/* Прописываем текст в элементе div */
div.innerHTML = "Приветствую земляне!";
divTwo.innerHTML = '<h1>Приветствую инопланетяне!</h1>';

/* Есть другой способ прописать текст, но здесь HTML структура не работает (h1, h2). Сделано в целях безопасности */
divThree.textContent = "Я не инопланетянин!";

/* Вставляем кусочек HTML кода перед или после определённых тегов */
/* beforebegin непосредственно вставляем перед элементом */
/* afterbegin вставляет в начало элемента */
/* beforeend в конец элемента */
/* afterend вставляет после элемента */
div.insertAdjacentHTML("beforebegin", "<h2>Привет</h2>");