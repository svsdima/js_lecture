/* Инкапсуляция */

/* Инкапсуляция - это один из принципов ООП (объектно-ориентированного программирования). Нужна для сокрытия информации от пользователя, чтобы он не мог изменять какие-то данные */

'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        }  else {
            console.log('Недопустимое значение');
        }
    };
}

const dmitriy = new User('Дмитрий', 25);
console.log(dmitriy.name);
console.log(dmitriy.getAge());


dmitriy.setAge(30);
dmitriy.setAge(300);
console.log(dmitriy.getAge());

dmitriy.say();

//-----------------------------------------------

class UserS {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say() {
        console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        }  else {
            console.log('Недопустимое значение');
        }
    }
}

const nicola = new UserS('Николай', 29);
console.log(nicola.age);

nicola.age = 99;
console.log(nicola.age);

nicola.say();