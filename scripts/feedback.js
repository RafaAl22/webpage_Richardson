const btnenviar = document.getElementById("enviar_form");

btnenviar.addEventListener('click', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre_form').value;
    const asunto = document.getElementById('asunto_form').value;
    const comentarios = document.getElementById('comentarios_form').value;
    window.location.href = `mailto:sabalprac@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A%20${nombre}%0A%0AAsunto%3A%20${asunto}%0A%0A%0AComentario%3A%20${comentarios}`
})