
/* Para hacer zoom a cada imagen */

var element = document.getElementById("myresult");
var info_img = document.getElementById("img-info");
function zoomOut() {
    info_img.setAttribute("style", "display:grid")
    element.style.display = "none";
}

function zoomIn(){
    info_img.setAttribute("style", "display:none")
    element.setAttribute("style", "display:inline-block")
}

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById('myresult');
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        /*calculate the position of the lens:*/
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /*prevent the lens from being positioned outside the image:*/
        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        /*set the position of the lens:*/
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /*display what the lens "sees":*/
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0,
            y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        
        return {
            x: x,
            y: y
        };
        
    }
}

let img = document.querySelectorAll('.item-img')
img.forEach(function (item, idx) {
    item.addEventListener('mousemove', function (e) {

        let x = e.target.dataset.id;
        
        // Initiate zoom effect:
        imageZoom(x, "myresult");
        
    })
})

/*------------------------------------------------------------------------------------------------------ */

var especificaciones = document.getElementById("specs");
var especificaciones2 = document.getElementById("specs2");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var flecha1 = document.getElementById('flecha1');
var flecha2 = document.getElementById('flecha2');
var background = document.getElementById('bg');
var text = document.getElementById('texto');
var text2 = document.getElementById('texto2');
var truper = 0;
var hermex = 0;
var foset = 0;
var fiero = 0;
var pretul = 0;
var volteck = 0;
var klintek = 0;
var yale = 0;
var rugo = 0;

if (background.classList.contains('bg_hermex')) {
    hermex = 1;
}
if (background.classList.contains('bg_truper')) {
    truper = 1;
}
if (background.classList.contains('bg_fiero')) {
    fiero = 1;
}
if (background.classList.contains('bg_foset')) {
    foset = 1;
}
if (background.classList.contains('bg_klintek')) {
    klintek = 1;
}
if (background.classList.contains('bg_pretul')) {
    pretul = 1;
}
if (background.classList.contains('bg_volteck')) {
    volteck = 1;
}
if (background.classList.contains('bg_yale')) {
    yale = 1;
}
if (background.classList.contains('bg_rugo')) {
    rugo = 1;
}

document.getElementById('btn1').addEventListener("click", function () {
    if (flecha1.classList.contains('rotacion')) {
        flecha1.classList.remove('rotacion');
    } else {
        flecha1.classList.add('rotacion')
    }

    if (especificaciones.classList.contains("ocultar")) {
        especificaciones.classList.remove('ocultar');


        if (truper == 1) {
            btn1.classList.add('truper');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (foset == 1) {
            btn1.classList.add('foset');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (hermex == 1) {
            btn1.classList.add('hermex');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (fiero == 1) {
            btn1.classList.add('fiero');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (pretul == 1) {
            btn1.classList.add('pretul');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (klintek == 1) {
            btn1.classList.add('klintek');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (volteck == 1) {
            btn1.classList.add('volteck');
            text.style.color = "white";
            flecha1.style.color = "white";
        } if (yale == 1) {
            btn1.classList.add('yale');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (rugo == 1) {
            btn1.classList.add('rugo');
            text.style.color = "white";
            flecha1.style.color = "white";
        }


        if (!especificaciones2.classList.contains("ocultar")) {
            especificaciones2.classList.add('ocultar');

            flecha2.classList.remove('rotacion');

            if (truper == 1) {
                btn2.classList.remove('truper');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (foset == 1) {
                btn2.classList.remove('foset');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (hermex == 1) {
                btn2.classList.remove('hermex');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (fiero == 1) {
                btn2.classList.remove('fiero');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (pretul == 1) {
                btn2.classList.remove('pretul');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (klintek == 1) {
                btn2.classList.remove('klintek');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (volteck == 1) {
                btn2.classList.remove('volteck');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (yale == 1) {
                btn2.classList.remove('yale');
                text2.style.color = "black";
                flecha2.style.color = "black";
            } if (rugo == 1) {
                btn2.classList.remove('rugo');
                text2.style.color = "black";
                flecha2.style.color = "black";
            }
        }

    } else {
        especificaciones.classList.add('ocultar');

        if (truper == 1) {
            btn1.classList.remove('truper');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (foset == 1) {
            btn1.classList.remove('foset');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (hermex == 1) {
            btn1.classList.remove('hermex');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (fiero == 1) {
            btn1.classList.remove('fiero');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (pretul == 1) {
            btn1.classList.remove('pretul');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (klintek == 1) {
            btn1.classList.remove('klintek');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (volteck == 1) {
            btn1.classList.remove('volteck');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (yale == 1) {
            btn1.classList.remove('yale');
            text.style.color = "black";
            flecha1.style.color = "black";
        } if (rugo == 1) {
            btn1.classList.remove('rugo');
            text.style.color = "black";
            flecha1.style.color = "black";
        }
    }
});

document.getElementById('btn2').addEventListener("click", function () {

    if (flecha2.classList.contains('rotacion')) {
        flecha2.classList.remove('rotacion');
    } else {
        flecha2.classList.add('rotacion')
    }

    if (especificaciones2.classList.contains("ocultar")) {
        especificaciones2.classList.remove('ocultar');

        if (truper == 1) {
            btn2.classList.add('truper');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (foset == 1) {
            btn2.classList.add('foset');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (hermex == 1) {
            btn2.classList.add('hermex');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (fiero == 1) {
            btn2.classList.add('fiero');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (pretul == 1) {
            btn2.classList.add('pretul');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (klintek == 1) {
            btn2.classList.add('klintek');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (volteck == 1) {
            btn2.classList.add('volteck');
            text2.style.color = "white";
            flecha2.style.color = "white";
        } if (yale == 1) {
            btn2.classList.add('yale');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (rugo == 1) {
            btn2.classList.add('rugo');
            text2.style.color = "white";
            flecha2.style.color = "white";
        }


        if (!especificaciones.classList.contains("ocultar")) {
            especificaciones.classList.add('ocultar');

            flecha1.classList.remove('rotacion');

            if (truper == 1) {
                btn1.classList.remove('truper');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (foset == 1) {
                btn1.classList.remove('foset');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (hermex == 1) {
                btn1.classList.remove('hermex');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (fiero == 1) {
                btn1.classList.remove('fiero');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (pretul == 1) {
                btn1.classList.remove('pretul');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (klintek == 1) {
                btn1.classList.remove('klintek');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (volteck == 1) {
                btn1.classList.remove('volteck');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (yale == 1) {
                btn1.classList.remove('yale');
                text.style.color = "black";
                flecha1.style.color = "black";
            } if (rugo == 1) {
                btn1.classList.remove('rugo');
                text.style.color = "black";
                flecha1.style.color = "black";
            }
        }
    } else {
        especificaciones2.classList.add('ocultar');

        if (truper == 1) {
            btn2.classList.remove('truper');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (foset == 1) {
            btn2.classList.remove('foset');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (hermex == 1) {
            btn2.classList.remove('hermex');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (fiero == 1) {
            btn2.classList.remove('fiero');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (pretul == 1) {
            btn2.classList.remove('pretul');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (klintek == 1) {
            btn2.classList.remove('klintek');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (volteck == 1) {
            btn2.classList.remove('volteck');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (yale == 1) {
            btn2.classList.remove('yale');
            text2.style.color = "black";
            flecha2.style.color = "black";
        } if (rugo == 1) {
            btn2.classList.remove('rugo');
            text2.style.color = "black";
            flecha2.style.color = "black";
        }
    }
});

