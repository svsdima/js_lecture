/* JSON формат передачи данных, глубокое клонирование объектов */

/* JSON - Java Script Object Notation - текстовый формат обмена данных (используется для передачи и хранения данных) */

/* JSON - набор пар ключ - значение (как и в объекте) */

'use strict';

/* Чтобы отправить данные на сервер надо объект преобразовать в вид, который будет читаем для серверов, для этого в браузере есть встроенный JSON с командой stringify */
const persone = {
    name: 'Дмитрий',
    tel: '+78567485543',
    parents: {
        mom: 'Елена',
        dad: 'Сергей'
    }
};

console.log(JSON.stringify(persone));

/* Берём данные с сервера и преобразовываем в объект JSON.parse*/
console.log(JSON.parse(JSON.stringify(persone)));

/* Создаём клона persone */
const clone = JSON.parse(JSON.stringify(persone));
clone.name = 'Эмили'
clone.parents.mom = 'Жаннет';
clone.parents.dad = 'Игнатий';

console.log(clone);