import $ from 'jquery'

$(function() {
  $(".navbar2 ul li a").click(function() {
    // quitar .seleccionado a todos (por si hay alguno)
    $(".navbar2 ul li a").removeClass("seleccionado");
    // agregar seleccionado a "este" elemento.
    $(this).addClass("seleccionado");
  });
});






  