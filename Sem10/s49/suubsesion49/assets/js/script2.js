$(document).ready(function(){
//Con JS
    document.querySelector("#title").innerHTML = "DOM con JS";
//Con JQuery
    $("#title").html("DOM con JQuery");
//Seleccionar por clase
    $(".demo").html("Clase seleccionada")
//Solo usar el primero de una clase
    $(".demo").first().html("Primer elemento de la clase")
//Seleccionar elemento y cambiar atributo
$("img").attr
("src", "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg");

$("img").attr
("title", "Un koala");

$("#btn").click
(function () {
    $("#resultado").toggle();
});
});