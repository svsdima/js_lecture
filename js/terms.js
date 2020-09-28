/* Условия */

'use strict';

if (4 == 9) {
    console.log('Ok.');
} else {
    console.log('error');
}

/* Вложенность условий */

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('To much');
} else {
    console.log('Ok.');
}

/* При помощи тернарного оператора */
/* Тернарной оператор - это ? знак */
/* Тернарный - потому, что в нём участвует три аргумента 1) num === 50, 2) 'Ok.', 3) 'error'.  */
/* Проверяем уловие, что num равно 50, если уловие верно, то ок. Иначе error */
(num === 50) ? console.log('Ok.') : console.log('error');

/* 4 + 4 где + является бинарным аргументом */

/* +'4' где + унарный аргумент */

/* Для более правильного описания условий, есть функция switch */
/* switch идёт на строгое сравнение! */
/* case - значение которое, мы хотим проверить */
/* break конец проверки */
/* default - если ни одно из условий не выполнилось, выполняется default */

const num2 = 50;
switch (num2) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: 
        console.log('Верно!');
        break;
    default: 
        console.log('Не в этот раз');
        break;
}