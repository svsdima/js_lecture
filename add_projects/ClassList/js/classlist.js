/* ClassList и делегирование событий */

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

/* Узнаём кол-во классов */
console.log(btns[0].classList.length);
/* item() позволяет получить класс, который распологается под определённым индексом */
console.log(btns[5].classList.item(0));
console.log(btns[5].classList.item(2));
/* Добавляем определённые классы */
console.log(btns[1].classList.add('green'));
/* Удаляем определённые классы */
console.log(btns[1].classList.remove('dark'));
/* Если этот класс есть на элементе, то класс будет убран, если нет - добавлен */
console.log(btns[2].classList.toggle('black'));

/* contains проверяет на наличие класса */
console.log(btns[3].classList.add('red'));
if (btns[3].classList.contains('red')) {
    console.log('red');
}

/* Когда кликаю на первую кнопку, начинается проверка: у пятой кнопки нет класса ред, если нет - добавляется, если есть - убирается */
/* !btns[1] У второй кнопки нет класса red */
btns[0].addEventListener('click', () => {
    /* Первый вариант */
    if (!btns[4].classList.contains('yellow')) {
        btns[4].classList.add('yellow');
    } else {
        btns[4].classList.remove('yellow');
    }

    /* Второй вариант */
    btns[6].classList.toggle('black');
});

/* Устаревшее! ClassName не использовать!!! */
// console.log(btns[7].className);

/* Делегирование событий - мы берём элемент, который является родителем для всех кнопок и работаем непосредственно с ним, а внутри уже будем проверять на что мы кликнули, т.е. назначаем функцию для его потомков */

/* Кликаю на серую область ничего не происходит, кликаю на любую кнопку, вылезает "Я кнопка!" */
/* Кликаю на кнопку с классом yellow вылезает "Я жёлтый!" */
wrapper.addEventListener('click', (event) => {
    // console.dir(event.target);
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Я кнопка!');
    }

    if (event.target && event.target.classList.contains('yellow')) {
        console.log('Я жёлтый!');
    }
    
    /* Любят работники Google */
    if (event.target && event.target.matches("button.google")) {
        console.log('Я люблю Google!');
    }
});

/* При таком способе, новые кнопки не будут выполнять этот код */
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log('Я кнопка, проверенная через forEach!');
    });
});

/* Создаём новую кнопку через js */
const btn = document.createElement('button');
btn.classList.add('quoise');
wrapper.append(btn);