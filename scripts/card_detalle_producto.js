var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});