/* Ошибки. Как избежать "поломки" своего кода */

'use strict';

/* Такая конструкция позволяет красиво обрабатывать ошибку и при этом код продолжит дальше работать */
/* В блок кода catch приходит объект ошибки, который можем использовать */
try {
    console.log('Работаю');
    console.log(f);
    console.log('result');
} catch (error) {
    console.log('error');
    console.log(error);
    /* name название ошибки */
    console.log(error.name);
    /* message сообщение ошибки */
    console.log(error.message);
    /* stack какие функции привели к этой ошибке */
    console.log(error.stack);
} finally {
    /* finally завершает операции при любом развитии события */

}

console.log('Всё ещё работаю');

// -----------------------------------------------
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('Я нажал на кнопку');
    });

} catch (e) { 
    console.log(e);
}

console.log('Normal');