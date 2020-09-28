"use strict";
/* До ES6 приходилось вводить вот так, чтобы попасть на нужную категорию, получится https://someurl.com/toys/4 */
const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4');

/* Чтобы не ставить столько + была придумана интерполяция, для использования нужны косые кавычки ``
итоговый результат https://someurl.com/toys/5 */

const category2 = 'toys';

console.log(`https://someurl.com/${category2}/5`);

/* При открытии страницы высветится Привет, Дмитрий */
const user = "Dmitriy";

alert (`Привет, ${user}`);