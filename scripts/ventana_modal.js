var mod = document.getElementById("modal");
var modal = document.getElementById("miModal");
var modal2 = document.getElementById("miModal2");



/*var boton = document.getElementById("abrir_modal");
var boton2 = document.getElementById("abrir_modal2");*/



function abrir_modal(){
    modal.classList.add('visible');
}

function cerrar_modal(){
    modal.style.opacity ="0";
     
}



window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.opacity = "0";
    }
    else
    {
        if (event.target == modal2) {
            modal2.style.opacity = "none";
        }
    }
});
/*
boton.addEventListener("click",function() {
  modal.style.display = "block";
  if(modal.style.opacity ="0")
    {
      PointerEvent = none;
    }
});
boton2.addEventListener("click",function() {
    modal2.style.display = "block";
});
  */