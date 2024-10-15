let btn_mas = document.getElementById('btn-leer_mas');
let btn_menos = document.getElementById('btn-leer_menos');
let texto_p = document.getElementById('parrafo');

function mostrar_mas(){
    texto_p.setAttribute("style", "height: 100%");
    btn_mas.setAttribute("style", "display: none");
    btn_menos.setAttribute("style", "display: block")
}

function mostrar_menos(){
    texto_p.setAttribute("style", "height: 25rem");
    btn_mas.setAttribute("style", "display: block");
    btn_menos.setAttribute("style", "display: none")
}