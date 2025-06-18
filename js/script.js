/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)


2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const ad = document.querySelector(".promo__adv"),
        images = ad.querySelectorAll("img"), 
        janr = document.querySelector(".promo__genre"),
        posterBg = document.querySelector(".promo__bg"),
        filmNames = document.querySelector(".promo__interactive-list");
        
const deleteBtn = document.querySelectorAll(".delete");

//ad.textContent = '';

for (let i = 0; i < images.length ; i++) {
    images[i].remove();
}

// удлалить картины с помощью цикла

janr.textContent = 'драма';

posterBg.style.background = 'url(./img/bg.jpg)  center center / cover no-repeat';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

filmNames.textContent = "";

movieDB.movies.forEach((element, index) => {
    filmNames.innerHTML += `
     <li class="promo__interactive-item">${index + 1})${element}
            <div class="delete"></div>
    </li>
    `
});

//deleteBtn.forEach(element => {
//    element.addEventListener('click', () => {
//        const text = element.parentElement;
//        text.remove();
//    });
//});

deleteBtn.forEach(button => {
    button.addEventListener("click", () => {
     button.parentElement.remove();
      
    });
});


// добавить addEventListener что бы при нажатии на корзин у фильм удалялся со списка