var swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        
    },
    autoplay:{
        delay:5000
    },
    grabCursor: true,
    loop: true,
    spaceBetween: 30,
});
/*
[...document.querySelectorAll('.column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});*/


