var btn_search = document.getElementById('icon-search');
var search_bar = document.getElementById('btn-search');
var btn_close = document.getElementById('icon-close');

btn_search.addEventListener('click', function () {
    search_bar.setAttribute("style", "display:flex");
    btn_search.setAttribute("style", "display:none");
    btn_close.setAttribute("style", "display:block")
});

btn_close.addEventListener('click', function () {
    search_bar.setAttribute("style", "display:none");
    btn_search.setAttribute("style", "display:block");
    btn_close.setAttribute("style", "display:none");
    resultado.setAttribute("style", "display:none");
    buscar.value = '';
})


//Para filtrar cada producto
const buscar = document.querySelector('#btn-search');
const resultado = document.querySelector('#resultado');
const productos = [
    { nombre: "Brida reforzada 3/4 - 1-1/16", url: "/pages/detalle_productos/Abrazadera%20sin%20fin%20reforzada%2010%20-%20Fiero.html" },
    { nombre: "Brida reforzada 3-5/16, 4-1/4", url: "/pages/detalle_productos/Abrazadera%20sin%20fin%20reforzada%2060%20-%20Fiero.html" },
    { nombre: "Aceite semi-sintetico de 4 tiempos", url: "/pages/detalle_productos/Aceite%20semi-sintetico%20de%204%20tiempos%20-%20truper.html" },
    { nombre: "Arnes de cuerpo completo con 3 anillos", url: "/pages/detalle_productos/Arnes%20de%20cuerpo%20completo%20-%20Truper.html" },
    { nombre: "Asiento redondo ligero con tapa para inodoro", url: "/pages/detalle_productos/Asiento%20redondo%20con%20tapa%20para%20WC%20-%20Foset.html" },
    { nombre: "Aspersor metalico de dos vias", url: "/pages/detalle_productos/Aspersor%20metalico%20de%20dos%20vias%20-%20Truper.html" },
    { nombre: "Aspersor metalico de una via", url: "/pages/detalle_productos/Aspersor%20metalico%20de%20una%20via%20-%20Truper.html" },
    { nombre: "Aspersor oscilatorio", url: "/pages/detalle_productos/Aspersor%20oscilatorio%20-%20Truper.html" },
    { nombre: "Azadon Lane de 1.6 lb", url: "/pages/detalle_productos/Azadon%20Lane%20de%201.6lb%20-%20Truper.html"},
]

const filtrar = () => {
    resultado.setAttribute("style", "display:block")

    resultado.innerHTML = '';

    const texto = buscar.value.toLowerCase();

    for (let i of productos) {
        let producto = i.nombre.toLowerCase();
        if (producto.indexOf(texto) !== -1) {
            resultado.innerHTML += `
                <li>${i.nombre} <a href=${i.url} target="_blank">Ver Producto</a></li>
            `
        }
        
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
                <li>Producto no encontrado</li>
            `
    }

    if(buscar.value == ''){
        resultado.setAttribute("style", "display:none")
    }
}

search_bar.addEventListener('keyup', filtrar);

