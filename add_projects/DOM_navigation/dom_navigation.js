/* Навигация по DOM, data-атрибуты, преимущество for_of */
"use strict";

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
/* Узлы, которые являются детьми у body, перенос строки - текстовая нода */
console.log(document.body.childNodes);

// ------------------------------------------------------------------------------------------
/* Всё, что мы видим в тегах - это элементы. Всё, что не видим - это узел (перенос строки, текстовые элементы) */
// ------------------------------------------------------------------------------------------

/* Первый элемент (#text) */
console.log(document.body.firstChild);
/* Последний элемент (script) */
console.log(document.body.lastChild);

/* Первый элемент (#text) */
console.log(document.body.firstElementChild);
/* Последний элемент (script) */
console.log(document.body.lastElementChild);

/* Кнопка current при такой команде показывает родителя (.first) */
console.log(document.querySelector('#current').parentNode);
/* Кнопка current при такой команде показывает родителя (.first), а потом родителя .first - (.wrapper) */
console.log(document.querySelector('#current').parentNode.parentNode);

/* Кнопка current при такой команде показывает элемент родителя (.first) */
console.log(document.querySelector('#current').parentElement);
/* Кнопка current при такой команде показывает элемент родителя (.first), а потом родителя .first - (.wrapper) */
console.log(document.querySelector('#current').parentNode.parentElement);

// --------------------------------------------------------------------
/* Дата атрибуты (data-)  */

/* Получаем ноду после data атрибута (это будет перенос строки) */
console.log(document.querySelector('[data-current="3"]').nextSibling);
/* Получаем ноду перед data атрибута (это будет перенос строки) */
console.log(document.querySelector('[data-current="3"]').previousSibling);

/* Получаем элемент после data атрибута (это будет ссылка (li)) */
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
/* Получаем элемент перед data атрибута (это будет ссылка (li)) */
console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// ------------------------------------------------------------------------------------------
/* Перебираем всех childNodes, которые лежат в body и избавится от всех текстовых нод */
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}