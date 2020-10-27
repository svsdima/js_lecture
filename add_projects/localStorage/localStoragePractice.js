/* Как сохранить данные без БД. Работа с localStorage (практика) */

'use strict';

/* Делаем функционал: когда пользователь заходит на сайт и начинает работать с формой, если он нажал на галочку, то она сохранится, даже если страница будет перезапущена и тоже самое с кнопкой change color */
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

/* Идёт автоматическая проверка localStorage и если isChecked == true, то галочку переставим в позицию checked */
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#808000';
}

// ----------------------------------------------------
/* Меняем цвет фона при помощи кнопки */
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#808000';
    }
});

// ----------------------------------------------------
/* Сохраняем данные в localStorage */
const persone = {
    name: 'Дмитрий',
    age: 25
};
const personeSecond = {
    name: 'Евгений',
    age: 21
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('Дмитрий', serializedPersone);
localStorage.setItem('Евгений', personeSecond);

console.log(JSON.parse(localStorage.getItem('Дмитрий')));
console.log((localStorage.getItem('Евгений')));

