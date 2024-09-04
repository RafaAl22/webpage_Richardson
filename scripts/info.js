var btn1 = document.getElementById("t1");
var btn2 = document.getElementById("t2");
var btn3 = document.getElementById("t3");
var btn4 = document.getElementById("t4");
var btn5 = document.getElementById("t5");

var pregunta1 = document.getElementById("p1");
var pregunta2 = document.getElementById("p2");
var pregunta3 = document.getElementById("p3");
var pregunta4 = document.getElementById("p4");

if (btn2.classList.contains("seleccion")) {



} else if (btn3.classList.contains("seleccion")) {
    pregunta1.classList.add("ocultar");
    pregunta3.classList.add("ocultar");
    pregunta4.classList.add("ocultar");

}

document.getElementById("t1").addEventListener("click", function () {
    if (btn2.classList.contains("seleccion")) {
        btn2.classList.remove("seleccion");
    }
    if (btn3.classList.contains("seleccion")) {
        btn3.classList.remove("seleccion");
    }
    if (btn4.classList.contains("seleccion")) {
        btn4.classList.remove("seleccion");
    }
    if (btn5.classList.contains("seleccion")) {
        btn5.classList.remove("seleccion");
    }

    if (!btn1.classList.contains("seleccion")) {
        btn1.classList.add("seleccion");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");


    pregunta1.classList.remove("ocultar");
    pregunta2.classList.remove("ocultar");
    pregunta3.classList.remove("ocultar");
    pregunta4.classList.remove("ocultar");
});

document.getElementById("t2").addEventListener("click", function () {
    if (btn1.classList.contains("seleccion")) {
        btn1.classList.remove("seleccion");
    }
    if (btn3.classList.contains("seleccion")) {
        btn3.classList.remove("seleccion");
    }
    if (btn4.classList.contains("seleccion")) {
        btn4.classList.remove("seleccion");
    }
    if (btn5.classList.contains("seleccion")) {
        btn5.classList.remove("seleccion");
    }

    if (!btn2.classList.contains("seleccion")) {
        btn2.classList.add("seleccion");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");


    pregunta1.classList.remove("ocultar");
    pregunta2.classList.add("ocultar");
    pregunta3.classList.add("ocultar");
    pregunta4.classList.add("ocultar");
});

document.getElementById("t3").addEventListener("click", function () {
    if (btn1.classList.contains("seleccion")) {
        btn1.classList.remove("seleccion");
    }
    if (btn2.classList.contains("seleccion")) {
        btn2.classList.remove("seleccion");
    }
    if (btn4.classList.contains("seleccion")) {
        btn4.classList.remove("seleccion");
    }
    if (btn5.classList.contains("seleccion")) {
        btn5.classList.remove("seleccion");
    }

    if (!btn3.classList.contains("seleccion")) {
        btn3.classList.add("seleccion");
    }

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    pregunta1.classList.add("ocultar");
    pregunta2.classList.remove("ocultar");
    pregunta3.classList.add("ocultar");
    pregunta4.classList.add("ocultar");
});

document.getElementById("t4").addEventListener("click", function () {
    if (btn1.classList.contains("seleccion")) {
        btn1.classList.remove("seleccion");
    }
    if (btn2.classList.contains("seleccion")) {
        btn2.classList.remove("seleccion");
    }
    if (btn3.classList.contains("seleccion")) {
        btn3.classList.remove("seleccion");
    }
    if (btn5.classList.contains("seleccion")) {
        btn5.classList.remove("seleccion");
    }

    if (!btn4.classList.contains("seleccion")) {
        btn4.classList.add("seleccion");
    }

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    pregunta1.classList.add("ocultar");
    pregunta2.classList.add("ocultar");
    pregunta3.classList.remove("ocultar");
    pregunta4.classList.add("ocultar");
});

document.getElementById("t5").addEventListener("click", function () {
    if (btn1.classList.contains("seleccion")) {
        btn1.classList.remove("seleccion");
    }
    if (btn2.classList.contains("seleccion")) {
        btn2.classList.remove("seleccion");
    }
    if (btn3.classList.contains("seleccion")) {
        btn3.classList.remove("seleccion");
    }
    if (btn4.classList.contains("seleccion")) {
        btn4.classList.remove("seleccion");
    }

    if (!btn5.classList.contains("seleccion")) {
        btn5.classList.add("seleccion");
    }

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

    pregunta1.classList.add("ocultar");
    pregunta2.classList.add("ocultar");
    pregunta3.classList.add("ocultar");
    pregunta4.classList.remove("ocultar");
});

/*------------------------------------------------------------------------- */



var estado = document.getElementById("1");
var estado2 = document.getElementById("2");
var estado3 = document.getElementById("3");
var estado4 = document.getElementById("4");
var estado5 = document.getElementById("5");
var estado6 = document.getElementById("6");
var estado7 = document.getElementById("7");

function rotacion_Flecha1() {

    if (flecha.classList.contains("rotacion")) {
        flecha.classList.remove("rotacion");
    } else {
        flecha.classList.add("rotacion");
    }

    if (estado.classList.contains("ocultar")) {
        estado.classList.remove("ocultar");
    } else {
        estado.classList.add("ocultar");
    }

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

}


function rotacion_Flecha2() {
    if (flecha2.classList.contains("rotacion")) {
        flecha2.classList.remove("rotacion");
    } else {
        flecha2.classList.add("rotacion");
    }

    if (estado2.classList.contains("ocultar")) {
        estado2.classList.remove("ocultar");
    } else {
        estado2.classList.add("ocultar");
    }
    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

};

function rotacion_Flecha3() {
    if (flecha3.classList.contains("rotacion")) {
        flecha3.classList.remove("rotacion");
    } else {
        flecha3.classList.add("rotacion");
    }

    if (estado3.classList.contains("ocultar")) {
        estado3.classList.remove("ocultar");
    } else {
        estado3.classList.add("ocultar");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

};

function rotacion_Flecha4() {
    if (flecha4.classList.contains("rotacion")) {
        flecha4.classList.remove("rotacion");
    } else {
        flecha4.classList.add("rotacion");
    }

    if (estado4.classList.contains("ocultar")) {
        estado4.classList.remove("ocultar");
    } else {
        estado4.classList.add("ocultar");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

};

function rotacion_Flecha5() {
    if (flecha5.classList.contains("rotacion")) {
        flecha5.classList.remove("rotacion");
    } else {
        flecha5.classList.add("rotacion");
    }

    if (estado5.classList.contains("ocultar")) {
        estado5.classList.remove("ocultar");
    } else {
        estado5.classList.add("ocultar");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

};

function rotacion_Flecha6() {
    if (flecha6.classList.contains("rotacion")) {
        flecha6.classList.remove("rotacion");
    } else {
        flecha6.classList.add("rotacion");
    }

    if (estado6.classList.contains("ocultar")) {
        estado6.classList.remove("ocultar");
    } else {
        estado6.classList.add("ocultar");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha7.classList.remove("rotacion");
    estado7.classList.add("ocultar");

};

function rotacion_Flecha7() {
    if (flecha7.classList.contains("rotacion")) {
        flecha7.classList.remove("rotacion");
    } else {
        flecha7.classList.add("rotacion");
    }

    if (estado7.classList.contains("ocultar")) {
        estado7.classList.remove("ocultar");
    } else {
        estado7.classList.add("ocultar");
    }


    flecha.classList.remove("rotacion");
    estado.classList.add("ocultar");

    flecha2.classList.remove("rotacion");
    estado2.classList.add("ocultar");

    flecha3.classList.remove("rotacion");
    estado3.classList.add("ocultar");

    flecha4.classList.remove("rotacion");
    estado4.classList.add("ocultar");

    flecha5.classList.remove("rotacion");
    estado5.classList.add("ocultar");

    flecha6.classList.remove("rotacion");
    estado6.classList.add("ocultar");

};
