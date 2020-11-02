/* Библиотека Jquery */

/* Подключаем Jquery */
import $ from 'jquery';

/* Тоже самое, что и document.querySelector(), для получения элемента */
// const btn = $('#btn');

// console.log(btn);


$(document).ready(function() {
    /* При наведении на первую кнопку, изменяется класс активности */
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
    /* При нажатии на третью кнопку, скрываются все чётные изображения */
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });
    /* При нажатии на пятую кнопку, делаем анимацию нечётного изображения */
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle',
            width: 'toggle'
        }, 2000);
    });
});