/*Script Swiper con flechas*/
/*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
});
*/
/*Script Swiper sin flechas*/
var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});