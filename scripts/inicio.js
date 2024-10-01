var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,

    },
    autoplay:{
        delay:5000
    },
    grabCursor: true,

    /*spaceBetween: 30,*/
});

/*Swiper RUGO */
var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    autoplay:{
        delay: 5000
    },
    loop: true,
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    grabCursor: true,
    autoplay:{
        delay: 6000
    },
    loop: true,
});

/*
[...document.querySelectorAll('.column')].map(column => {
    column.style.setProperty('--animation', 'slide');
    column.style.setProperty('height', '200%');
    column.innerHTML = column.innerHTML + column.innerHTML;
});*/


