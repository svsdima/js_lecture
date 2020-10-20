/* AJAX и общение с сервером */

'use strict';

/* Переводим рубли в доллары */
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    /* open() - собриает настройки, которые в будущем помогут сделать запрос; method - тот, который используется для запроса; url - путь по которому делаем запрос; async - отвечает за ассинхронность;  login - логин; pass - пароль */
    // request.open(method, url, async, login, pass);
    /* method - get, post */
    request.open('GET', 'js/current.json');
    /* HTTP заголовки */
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /* Событие readystatechange отслеживает статус готовности нашего запроса  в данный текущий момент */
    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.response);
    //         /* Преобразовываем рубли в доллары, toFixed(кол-во знаков после точки) */
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Что-то пошло не так";
    //     }
    // });

    request.addEventListener('load', () => {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                /* Преобразовываем рубли в доллары, toFixed(кол-во знаков после точки) */
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Что-то пошло не так";
            }
        });

    /* Свойства объекта */
    /* status статус запроса 404, 0, 200 и т.д */
    // status
    /* statusText - тестовое описание ответа от сервера ok, created и т.д */
    // statusText
    /* response ответ от сервера */
    // response
    /* readyState текущее состояние нашего запроса (0, 1, 2, 3, 4) (unset, opened, headers_received, loading, done)*/
    // readyState
});