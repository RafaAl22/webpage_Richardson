/*menu icon navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*scroll sections active link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let button = document.getElementById('btn5');


window.onscroll = () => {
    /*sections.forEach (sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });*/

    /*sticky navbar */

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 50);
    button.classList.toggle('sticky', window.scrollY > 200);

    /*remove menu icon when click navbar link*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


//Transiciones con scroll reveal

ScrollReveal({
    reset: false,
    distance: '50px',
});

ScrollReveal().reveal('.producto, .tittle-container h1', { origin: 'bottom', interval: 10, duration: 500 });
ScrollReveal().reveal('.scroll_card, .cat-box', { interval: 45, duration: 500 });
ScrollReveal().reveal('.valores-box', { scale: .95, duration: 1100 });
ScrollReveal().reveal('.tags, .nosotros h1, .navidad-text h1', { origin: 'left', duration: 1000 });
ScrollReveal().reveal('.marcas, .cards-box, .logo-img, .navidad-img', { scale: .45, duration: 1000, });
ScrollReveal().reveal('.texto-container, .valores-box, .info-container span', { origin: 'bottom', duration: 2100, });
ScrollReveal().reveal('.cinta-lema, .text-rugo h1, .texts h1', { origin: 'left', duration: 2500, });
ScrollReveal().reveal('.img_banner', { origin: 'right', duration: 2000, });

ScrollReveal().reveal('.section-cat h1, .categoria-section h1, .text-container_banner, .section-top_products h1', { origin: 'top', duration: 500, });
ScrollReveal().reveal('.item, .navidad-text h2', { scale: .95, duration: 700 });



