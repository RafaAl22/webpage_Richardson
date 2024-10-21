var modal = document.getElementById("miModal");
var imagen = document.getElementById("imagen")
/*var img_details = document.getElementById('img_details');*/
/*var modal2 = document.getElementById("miModal2");*/


function abrir_modal() {
  modal.classList.add('visible');
  swiper2.slideTo(0);
}

function abrir_modal2() {
  modal.classList.add('visible');
  swiper2.slideTo(1);
}

function abrir_modal3() {
  modal.classList.add('visible');
  swiper2.slideTo(2);
}

function abrir_modal4() {
  modal.classList.add('visible');
  swiper2.slideTo(3);
}

function abrir_modal5() {
  modal.classList.add('visible');
  swiper2.slideTo(4);
}

function abrir_modal6() {
  modal.classList.add('visible');
  swiper2.slideTo(5);
}


function cerrar_modal() {
  modal.classList.remove('visible');
  
}

var swiper2 = new Swiper(".mySwiper2", {
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: false,
});

/*window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.classList.remove('visible');
  }
});*/

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 27) {
    modal.classList.remove('visible');
  }
});
