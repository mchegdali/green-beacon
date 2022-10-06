const btnMenuEl = document.querySelector('.btn__menu');
const iconMenuEl = document.querySelector('.btn__menu > .icon__menu');
const iconCloseEl = document.querySelector('.btn__menu > .icon__close');
const menuEl = document.querySelector('.menu');

let isMenuOpen = false;

btnMenuEl.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuEl.classList.add('menu__show');
        iconMenuEl.classList.add('menu__show');
        iconCloseEl.classList.add('menu__show');
        document.body.classList.add('menu__show');
    } else {
        menuEl.classList.remove('menu__show'); 
        iconMenuEl.classList.remove('menu__show'); 
        iconCloseEl.classList.remove('menu__show'); 
        document.body.classList.remove('menu__show');
    }
});