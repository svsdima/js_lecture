/* Скрипты и время их выполнения. setTimeout и setInterval */

/* Функция выведится через определённый промежуток времени 2000 - это милиссекунды */
const timerId = setTimeout(function () {
    console.log('Здравствуйте');
}, 2000);

clearInterval(timerId);

// --------------------------------------------------------------------
const timerText = setTimeout(function (text) {
    console.log(text);
}, 3000, 'Привет');

// --------------------------------------------------------------------
setTimeout(logger, 4000);

function logger () {
    console.log('Доброго здравия');
}

// --------------------------------------------------------------------
const btn = document.querySelector('.btn');
let timerBtn,
    i = 0;

btn.addEventListener('click', () => {
    // const timerBtn = setTimeout(logger, 2000);
    timerBtn = setInterval(loggerBtn, 1000);
});


function loggerBtn () {
    if (i == 3) {
        clearInterval(timerBtn);
    }
    console.log('Нажал на кнопку - молодец!');
    i++;
}

// --------------------------------------------------------------------
/* Рекурсивный вызов setTimeout */
let id = setTimeout(function log() {
    console.log('Рекурсивный вызов');
    id = setTimeout(log, 1000);
}, 500);

// --------------------------------------------------------------------
/* Анимация опускания коробки */
const btnSecond = document.querySelector('.btn_second');
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const idFrame = setInterval(frame, 30);

    function frame() {
        if (pos == 300) {
            clearInterval(idFrame);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btnSecond.addEventListener('click', myAnimation);