/*Botón para cotizar a través de Whatsapp*/

/*var seccion = document.getElementById("seccion");
var info = document.getElementById("container_info");
var bg = document.getElementById("bg");




window.addEventListener("click",function(event) {
    if (event.target == info || event.target == seccion || event.target == bg) {
        btn_sur.classList.add('ocultar');
        btn_norte.classList.add('ocultar');
        btn_leon.classList.add('ocultar');
        btn_cerrar.classList.add('ocultar');
        btn_whatsapp.classList.remove('ocultar');
      }
  });

  function cerrar_menubotton(){
    if (btn_whatsapp.classList.contains("!ocultar")) {
        btn_sur.classList.add('ocultar');
        btn_norte.classList.add('ocultar');
        btn_leon.classList.add('ocultar');
        btn_cerrar.classList.add('ocultar');
    };
    
  }
 */
  

var codigo = document.getElementById('codigo');
var encabezado = document.getElementById('encabezado');
var btn_sur = document.getElementById('abrir_sur');
var btn_norte = document.getElementById('abrir_norte');
var btn_leon = document.getElementById('abrir_leon');
var btn_cerrar = document.getElementById('cerrar_whatsapp');
var btn_whatsapp = document.getElementById('abrir_whatsapp');





btn_cerrar.addEventListener('click', function () {
    btn_sur.classList.add('ocultar_btn');
    btn_norte.classList.add('ocultar_btn');
    btn_leon.classList.add('ocultar_btn');
    btn_cerrar.classList.add('ocultar');
    btn_whatsapp.classList.remove('ocultar');
    
});

btn_whatsapp.addEventListener('click', function () {
    btn_sur.classList.remove('ocultar_btn');
    btn_norte.classList.remove('ocultar_btn');
    btn_leon.classList.remove('ocultar_btn');
    btn_cerrar.classList.remove('ocultar');
    btn_whatsapp.classList.add('ocultar');

});

btn_norte.addEventListener('click', function(){
    codigo = document.getElementById('codigo').textContent;
    encabezado = document.getElementById('encabezado').textContent;

var mensaje;
mensaje = 'Me interesa el producto, ' + encabezado + ', con código y/o nombre clave ' + codigo + '.' + '\nLo vi en www.gruporichardson.com.ni';
var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje) + "&phone= +50589402765";

window.open(url);
});

btn_sur.addEventListener('click', function(){
    codigo = document.getElementById('codigo').textContent;
encabezado = document.getElementById('encabezado').textContent;

var mensaje;
mensaje = 'Me interesa el producto, ' + encabezado + ', con código y/o nombre clave ' + codigo + '.' + '\nLo vi en www.gruporichardson.com.ni';
var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje) + "&phone= +50584980917";

window.open(url);
});

btn_leon.addEventListener('click', function(){
    codigo = document.getElementById('codigo').textContent;
encabezado = document.getElementById('encabezado').textContent;

var mensaje;
mensaje = 'Me interesa el producto, ' + encabezado + ', con código y/o nombre clave ' + codigo + '.' + '\nLo vi en www.gruporichardson.com.ni';
var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensaje) + "&phone= +50588389692";

window.open(url);
});


