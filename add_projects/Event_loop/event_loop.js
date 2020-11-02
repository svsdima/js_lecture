/* Event loop, подробная работа асинхронных и синхронных операций (http://latentflip.com/loupe) */

'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout_2000'); 
// }, 2000);

// setTimeout(() => {
//     console.log('timeout_4000'); 
// }, 4000);

// console.log(2);

// -------------------------------------------------------

// let k = 0;

// /* 1e9 - единица с девятью нулями */
// function count() {
//     for (let i = 0; i < 1e9; i++) {
//         k++;
//     }
//     alert('Сделано');
// }

// count();

// ----------------------------------------------------------
/* 0, 1, 2 ,3 в setTimeout автоматически поставляет 4 милисекунды для совместимости между разными браузерами */
setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);