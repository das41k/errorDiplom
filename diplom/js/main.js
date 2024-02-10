const burgerIcon = document.querySelector('.nav__burger-icon')
const burgerMenu = document.querySelector('.burger-menu')
const kak = document.querySelector('.kak')
burgerIcon.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('burger-menu--opened')) {
        burgerMenu.classList.add('burger-menu--opened')
        kak.classList.add('kak--closed')
    }
})
const burgerMenuClose = document.querySelector('.burger-menu__cross')
burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--opened')
    kak.classList.remove('kak--closed')
})

const swiper = new Swiper('.gallery__swiper', {
    loop: true,
    spaceBetween: 80,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});