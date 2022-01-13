import $ from 'jquery'

$(function() {
  $(".sidebar ul li a").click(function() {
    // quitar .seleccionado a todos (por si hay alguno)
    $(".sidebar ul li a").removeClass("seleccionado");
    // agregar seleccionado a "este" elemento.
    $(this).addClass("seleccionado");
  });
});






  