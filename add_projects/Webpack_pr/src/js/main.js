const { WebpackOptionsValidationError } = require("webpack");

/* Webpack. Собираем наш проект */

function myModule() {
    this.hello = function() {
        console.log('Hello');
    };

    this.goodbye = function() {
        console.log('Good Bye!');
    };
}

/* CommonJS */
module.exports = myModule;

// ----------------------------------------------
// ES6 Modules

export let one = 1;

let two = 2;

export {two};

// Экспорт по-умолчанию
export default function sayHi() {
    console.log('Hello');
}

export let three = 3;

