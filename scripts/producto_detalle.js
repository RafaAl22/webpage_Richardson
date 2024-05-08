
var especificaciones = document.getElementById("specs");
var especificaciones2 = document.getElementById("specs2");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var flecha1 = document.getElementById('flecha1');
var flecha2 = document.getElementById('flecha2');


document.getElementById('btn1').addEventListener("click", function(){
    if (especificaciones.classList.contains("ocultar")){
        especificaciones.classList.remove('ocultar');
        btn1.classList.add('active');
    }else{
        especificaciones.classList.add('ocultar');
        btn1.classList.remove('active');
    }

    if(flecha1.classList.contains('rotacion')){
        flecha1.classList.remove('rotacion');
    }else{
        flecha1.classList.add('rotacion')
    }

});

document.getElementById('btn2').addEventListener("click", function(){
    if (especificaciones2.classList.contains("ocultar")){
        especificaciones2.classList.remove('ocultar');
        btn2.classList.add('active');
    }else{
        especificaciones2.classList.add('ocultar');
        btn2.classList.remove('active');
    }

    if(flecha2.classList.contains('rotacion')){
        flecha2.classList.remove('rotacion');
    }else{
        flecha2.classList.add('rotacion')
    }

});