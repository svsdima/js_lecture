/* Как сохранить данные без БД. Работа с localStorage */

'use strict';
 
/* localStorage (локальное хранилище) - это объект, который встроен в браузер и он может хранить различные данные */

/* Чтобы записать новый ключ используем команду setItem. Первый аргумент - название ключа (любое), второй аргумент - значение   */
localStorage.setItem('number', 5);
localStorage.setItem('string', 'Строка');

/* Чтобы получить данные из localStorage используем команду getItem, здесь только один аргумент */
const gItem = localStorage.getItem('number');
console.log(gItem);

/* Чтобы удалить данные из localStorage используем команду removeItem, здесь только один аргумент */
localStorage.removeItem('string');

/* Чтобы полностью очистить localStorage используем команду clear */
localStorage.clear();