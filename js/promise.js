/* Promise (ES6) */

/* Если произошло что-то, то мы обещаем, что у нас выполнится следующее действие */

'use strict';

/* Синхронный код */
console.log('Запрос данных...');

/* Promise callback функция принимает в себя два аргумента resolve (что-то выполнилось правильно), reject (что-то пошло не так) */
/* Благодаря Promise мы можем выполнять функции по цепочке */
const req = new Promise((resolve, reject) => {
    /* Ассинхронный код */
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

       resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'заказан';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data); 
}).catch(() => {
    /* .catch нужен для reject. */
    console.error('Произошла ошибка')
}).finally(() => {
    /* .finally нужен для очистки данных */
    console.log('Finally');
});

// ------------------------------------------------------------
const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => {
//     console.log('1000 ms');
// });
// test(2000).then(() => {
//     console.log('2000 ms');
// });

/* Ждёт окончание всех промисов, а потом выводит функцию */ 
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('Все отработали, молодцы!');
});

/* Какойто из промисов выполнился первый и потом запустилась функция */ 
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Я первый отработал');
});