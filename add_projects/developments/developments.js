/* События и их обработчики */

/* События - это сигнал от браузера о том, что у нас что-то произошло */
/* Чтобы использовать любое событие нужно назначить обработчик события */
/* Обработчик события - это функция, которая срабатывает как только событие произошло */

"use strict";

/* Почти не используется (при использовании нескольких функции одинаковых, один заменяет другой*/
const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// ------------------------------------------------------------
/* Можно назначать несколько действий на одно и тоже событие */
/* Добавляем обработчик события */
btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});


// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     console.log('Hover');
// });

let i = 0;

const deleteElements = (event) => {
        console.log(event.currentTarget);
        console.log(event.type);

        // i++;
        // if (i == 1) {
        //     btn.removeEventListener('mouseenter', deleteElements);
        // }
    };

btn.addEventListener('mouseenter', deleteElements);
overlay.addEventListener('mouseenter', deleteElements);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElements, {once: true});
});

/* Всплытие событий - это когда обработчик событий срабатывает на самом вложенном элементе, затем на родителей и так выше и выше по иерархии. */


// ----------------------------------------------------------------------------------------
const link = document.querySelector('a');

/* Отменили стандартное поведение браузера (Не переходим по ссылке), и совершаем другие действия,которые пропишет программист */
link.addEventListener('click', (arbent) => {
    arbent.preventDefault();

    console.log(arbent.target);
});