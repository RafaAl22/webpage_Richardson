

var obj1 = document.getElementById("norte");
var obj2 = document.getElementById("sur");
var obj3 = document.getElementById("leon");
var obj4 = document.getElementById("mayoreo");

document.getElementById("btn1").addEventListener("click", function(){
    obj1.classList.remove('ocultar');

    obj2.classList.add('ocultar');
    obj3.classList.add('ocultar');
    obj4.classList.add('ocultar');
});
document.getElementById("btn2").addEventListener("click", function(){
    obj2.classList.remove('ocultar');

    obj1.classList.add('ocultar');
    obj3.classList.add('ocultar');
    obj4.classList.add('ocultar');
});
document.getElementById("btn3").addEventListener("click", function(){
    obj3.classList.remove('ocultar');

    obj1.classList.add('ocultar');
    obj2.classList.add('ocultar');
    obj4.classList.add('ocultar');
});
document.getElementById("btn4").addEventListener("click", function(){
    obj4.classList.remove('ocultar');

    obj1.classList.add('ocultar');
    obj2.classList.add('ocultar');
    obj3.classList.add('ocultar');
});

/*document.getElementById("btn5").addEventListener("click", function(){

    obj2.classList.add('ocultar');
    obj3.classList.add('ocultar');
    obj4.classList.add('ocultar');
});*/