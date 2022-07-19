const Bil_Monthly = document.getElementById('bil')
const Bil_Yearly = document.getElementById('billi')
const green_font = document.getElementById('font')
const number_month = document.getElementById('middle')
const year = document.getElementById('end')

Bil_Monthly.onclick = () => {
    setTimeout(() => {
        Bil_Monthly.style.color = '#FFFFFF'
    }, 800)
    Bil_Yearly.style.color = 'black'
    font.style.animationName = 'green_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    number_month.textContent = '0.66'
    year.textContent = '1.33'
}
Bil_Yearly.onclick = () => {
    Bil_Monthly.style.color = 'black'
    setTimeout(() => {
        Bil_Yearly.style.color = '#FFFFFF'
    }, 800)
    font.style.animationName = 'reverse_block'
    font.style.animationDuration = '1s'
    font.style.animationFillMode = 'forwards'
    font.style.animationIterationCount = '1'
    number_month.textContent = '8'
    year.textContent = '16'
}

function burgerMenu(selectors) {
    let menu = document.querySelector(selectors);
    let button = document.querySelector('.burger-menu_button');
    let links = document.querySelector('.burger-menu_link')
    let overlay = document.querySelector('.burger-menu_overlay')

    button.onclick = (e) => {
        e.preventDefault();
        toggleMenu();
    };

    links.onclick = () => toggleMenu();
    overlay.onclick = () => toggleMenu();

    function toggleMenu() {
        menu.classList.toggle('burger-menu_active');

        if (menu.classList.contains('burger-menu_active')) {
            document.querySelectorAll('body').forEach(function (el) {
                el.style.overlow = 'hidden';
            });
        } else {
            document.querySelectorAll('body').forEach(function (el) {
                el.style.overlow = 'visible';
            });
        }
    }
}
burgerMenu('.burger-menu');

// function burgerMenu(selector) {
//     let menu = $(selector); //Переменная для элемента меню queryselector
//     let button = menu.find('.burger-menu_button', '.burger-menu_lines');//кнопки внутри элемента меню
//     let links = menu.find('.burger-menu_link');
//     let overlay = menu.find('.burger-menu_overlay');

//     button.on('click', (e) => {
//         e.preventDefault();
//         toggleMenu();
//     });

//     links.on('click', () => toggleMenu()); //закрытие меню при нажатие на ссылку
//     overlay.on('click', () => toggleMenu()); //закрытие меню на нажатие области вне меню

//     function toggleMenu() {
//         menu.toggleClass('burger-menu_active');//добавляет или убирает класс 'burger-menu_active'

//         if (menu.hasClass('burger-menu_active')) { //проверяем открыто ли меню
//             $('body').css('overlow', 'hidden'); //блокируем скролл страницы
//         } else {
//             $('body').css('overlow', 'visible');//разблокируем скролл
//         }
//     }
// }

// burgerMenu('.burger-menu');