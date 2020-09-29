/* Методы и свойства строк и чисел */

"use sctrict";

/* Свойства обозначаются через точку str.length, а методы через скобки str.fromCharCode() */
/* Методы также можно найти в консоли браузера console.dir(Number); */
/* str.lenght - длина строки "test", arr.lenght - кол-во элементов в массиве [1, 2, 4] */
const str = "test";
const arr = [1, 2, 4];

console.log(str[2]);
console.log(str.length);
console.log(arr.length);

/* Метод изменения регистра */
const str1 = "test";

console.log(str1.toUpperCase());

// -------------
const str2 = "TEst";

console.log(str2.toLowerCase());

/* Метод, помогающий найти кусочек строки и сказать с какого индекса (позиции) она начинается */
/* Поиск подстроки */
const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

/* Метод взаимодействия со строками */

/* Метод slice() - извлекает часть строки и возвращает новую строку (от какого-то момента - включая, до момента не включая) */
const logg = "Hello world!";

console.log(logg.slice(6, 11));

/* Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки. */
const logg1 = "Hello world!";

console.log(logg1.substring(6, 11));

/* Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции. */
const logg2 = "Hello world!";

console.log(logg2.substr(6, 5));

/* Математические методы, в консоли браузера вбиваем Math. и вылезает список */

/* Метод Math.round() возвращает число, округлённое к ближайшему целому. */
const num = 12.2;

console.log(Math.round(num));

/* Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления. */
const test = "12.2px";

console.log(parseInt(test));

/* Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой) */
const test1 = "12.2px";

console.log(parseFloat(test1));