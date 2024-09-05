$(document).ready(function(){
    document.querySelector("#title").innerHTML = "DOM con JS";

    $("#title").html("DOM con JQuery");
//Seleccionar por clase
    $(".demo").html("Clase seleccionada")
    //Solo usar el primero de una clase
    $(".demo").first().html("Primer elemento de la clase")
});