/* Методы перебора массивов */

// filter
/* Берёт массив, фильтрует данные и создаёт новый массив */
const names = ['Дмитрий', 'Анна', 'Жанна', 'Григорий', 'Игнатий'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// ----------------------------------------------
// map
/* Позволяет взять исходный массив и изменить каждый элемент внутри него и создаёт новый массив*/

const answers = ['Дмитрий', 'ГриГОрий', 'КОСячиЙ'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });

/* Переводим в нижний регистр */
const result = answers.map(item => item.toLowerCase());

console.log(result);

// ----------------------------------------------
// every/some

/* some берёт массив, перебирает его и если хотябы один элемент подходит по условию, который мы зададим, то он нам вернёт true, если нет - false */
/* every берёт массив, перебирает его и если ВСЕ элементы подходят по условию, который мы зададим, то он нам вернёт true, если нет - false */

const somebody = [4, 'jinjer', 'стена'];
const everybody = [4, 7, 13];

console.log(somebody.some(item => typeof(item) === 'number'));

console.log(everybody.every(item => typeof(item) === 'number'));

// ----------------------------------------------
// reduce
/* reduce - схлопывает массив в одно единое целое */

const arr = [4, 5, 13, 24, 50, 87];
                            // 0       4
                            // 4       5
                            // 9       13
                            // 22      24
                            // 46      50
                            // 96      87
const resultation = arr.reduce((sum, current) => sum + current);

console.log(resultation);

// --------
const fruit = ['яблоко', 'груша', 'банан', 'слива', 'мандарин'];

const resFruit = fruit.reduce((sum, current) => sum + ', ' + current);

console.log(resFruit);

// ----------------------------------------------
// entries
/* entries - Позволяет взять объект и преобразовать его в массив */
const obj = {
    dmitriy: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);