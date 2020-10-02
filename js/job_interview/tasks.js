"use strict";
// 1	Какое будет выведено значение: let x = 5; alert( x++ ); ?

// 2	Чему равно такое выражение: [ ] + false - null + true ?

// 3	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

// 4	Чему равна сумма [ ] + 1 + 2?

// 5	Что выведет этот код: alert( "1"[0] )?

// 6	Чему равно 2 && 1 && null && 0 && undefined ?

// 7	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

// 8	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

// 9	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

// 10	Что выведет этот код: alert( +"Infinity" ); ?

// 11	Верно ли сравнение: "Ёжик" > "яблоко"?

// 12	Чему равно 0 || "" || 2 || undefined || true || falsе ?

// Выполнение задачи
// 1) Ответ 5. 
// Сначала возвращает 5, а уже потом увеличивает её на единицу.
let x = 5;

alert (x++);


// 2) Ответ NaN.
let number = [] + false - null + true;

console.log(number);

/* Пустой [] превращается в строку */
// console.log(typeof([] + false)); // Получается "false"
// console.log([] + false - null); // Получается NaN
// console.log([] + false - null + true); // Получается NaN

// 3) Ответ 2
let y = 1;
let a = y = 2; /* Цепочка идёт справа налево */

alert (a);

// 4) Ответ 12
let numberFour = [] + 1 + 2;

console.log(numberFour);

//  Т.к. пустой массив превратился в пустую строку, то всё, что прибавляется дальше, превращается в строку, таким образом получаем строку "12"

// 5) Ответ 1
alert( "1"[0] );

// 6) Ответ null
let numberSix = 2 && 1 && null && 0 && undefined;

console.log(numberSix);

/* Оператор && (И) всегда запинается на ложном выражении, т.е. он проверяет слева направо: 2 - true; 1 - true; null - false и всё, как только он поймал false, дальше проверка заканчивается, поэтому ответ будет null */

// 7) Ответ false.
let numberSevenOne = !!( 1 && 2 );
let numberSevenTwo = (1 && 2);

console.log(numberSevenOne === numberSevenTwo);

/* !! превращает в булиновое значение */

// 8) Ответ 3
alert( null || 2 && 3 || 4 );

/* ИЛИ || запинается на правде */
/* Проверяем приоритет по таблице приоритетов операторов, самый высокий приоритет (20), самый низкий (0).
&& стоит выше по приоритету, чем ||, при сравнении &&, если оба верны берёт правое значение (3). 
После идёт проверка или ||. || запинается на правде: null - false, 3 - true - всё проверка прекратилась и вылезает значение 3.*/

// 9) Ответ неправда
/* Это разные хранилища информации, которые содержат разную информацию, несмотря на то, что они похожи */
const abro = [1, 2, 3]; 
const brobro = [1, 2, 3]; 
if (abro == brobro) {
    console.log('Правда');
} else {
    console.log('Неправда');
}

// 10) Ответ Infinity
alert( +"Infinity" );

/* но тип данных будет число */
console.log(typeof(+'Infinity'));

// 11) Ответ false
if ("Ёжик" > "яблоко") {
    console.log('Правда');
} else {
    console.log('Неправда');
}

/* Здесь идёт посимвольное сравнение по Юникоду. */

// 12) Ответ 2
let numberTwelve = 0 || "" || 2 || undefined || true || falsе;

console.log(numberTwelve);

/* Здесь опять || ведёт проверку пока не наткнётся на true. 0 - false, "" - false, 2 - true. */