/* Классы ES6 */

'use strict';

/* Классы - красивая обёртка функции-конструкторов (синтаксический сахар). Классы - это всё теже функции */

/* Название класса всегда должно начинаться с большой буквы */
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangkeWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        /* super() вызывает супер-конструктор родителя (вызывает тоже самое, что есть у родителя) */
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangkeWithText(25, 10, 'Варежки', '#696969');

div.showMyProps();
console.log(div.calcArea());

/* Создаём новый объект в котором есть два свойства height и width и метод calcArea */
const square = new Rectangle(10, 10);
const long = new Rectangle(150, 50);

console.log(square.calcArea());
console.log(long.calcArea());

/* Принципы ООП (объектно-ориентированного программирования):

1) Абстракция - отделяем концепцию от её экземпляра. Class Rectangle - концепция; square, long - экземпляры

2) Наследование - способность объекта или класса базироваться на другом объекте или классе (главный механизм для повторного использования кода), наследствование кода чётко определяет их иерархию. ColoredRectangkeWithText наследуется от класса Rectangle (class ColoredRectangkeWithText extends Rectangle)  */