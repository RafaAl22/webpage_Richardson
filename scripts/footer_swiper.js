var swiper2 = new Swiper(".mySwiper2", {
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
    },
});

