/*var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
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
        delay: 2500,
        disableOnInteraction: false,
    },
});*/

var sec_truper = document.getElementById('truper');
var sec_foset = document.getElementById('foset');
var sec_pretul = document.getElementById('pretul');
var sec_hermex = document.getElementById('hermex');
var sec_klintek = document.getElementById('klintek');
var sec_fiero = document.getElementById('fiero');
var sec_volteck = document.getElementById('volteck');

document.getElementById("truper_btn").addEventListener("click", function () {
    sec_truper.classList.add('mostrar');

    sec_fiero.classList.remove('mostrar');
    sec_foset.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
    sec_klintek.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
});

document.getElementById("foset_btn").addEventListener("click", function () {
    sec_foset.classList.add('mostrar');

    sec_fiero.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_klintek.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
});

document.getElementById("pretul_btn").addEventListener("click", function () {
    sec_pretul.classList.add('mostrar');

    sec_fiero.classList.remove('mostrar');
    sec_foset.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
    sec_klintek.classList.remove('mostrar');

});

document.getElementById("volteck_btn").addEventListener("click", function () {
    sec_volteck.classList.add('mostrar');

    sec_fiero.classList.remove('mostrar');
    sec_foset.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_klintek.classList.remove('mostrar');
});

document.getElementById("fiero_btn").addEventListener("click", function () {
    sec_fiero.classList.add('mostrar');

    sec_foset.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_klintek.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
});

document.getElementById("klintek_btn").addEventListener("click", function () {
    sec_klintek.classList.add('mostrar');

    sec_fiero.classList.remove('mostrar');
    sec_foset.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
    sec_hermex.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
});

document.getElementById("hermex_btn").addEventListener("click", function () {
    sec_hermex.classList.add('mostrar');

    sec_klintek.classList.remove('mostrar');
    sec_foset.classList.remove('mostrar');
    sec_fiero.classList.remove('mostrar');
    sec_truper.classList.remove('mostrar');
    sec_volteck.classList.remove('mostrar');
    sec_pretul.classList.remove('mostrar');
});




if (sec_fiero.classList.contains('mostrar') || sec_foset.classList.contains('mostrar') || sec_hermex.classList.contains('mostrar') || sec_klintek.classList.contains('mostrar')
    || sec_pretul.classList.contains('mostrar') || sec_truper.classList.contains('mostrar') || sec_volteck.classList.contains('mostrar')) {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 175,
        /*effect: "cards",*/
        loop: true,
        clickable: true,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: true,
        },
    });
}




