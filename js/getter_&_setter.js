/* Геттеры и сеттеры (свойства объектов) */

'use strict';

/* Геттеры (get) позволяют получать значения свойства */
/* Сеттеры (set) позволяют устанавливать значения свойства */

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

/* При геттерах не ставим круглые скобки */
/* Без сеттера не можем присвоить значения */
console.log(persone.userAge = 30);
console.log(persone.userAge);