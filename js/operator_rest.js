/* Rest оператор и параметры по-умолчанию */

'use strict';

/* Rest оператор ... записывается всегда последним */
/* Rest собирает данные в массив */
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage', 'margareito');

/* Параметры по-умолчанию (basis если не задана вручную значение подставляется цифра 2 по-умолчанию) */

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);