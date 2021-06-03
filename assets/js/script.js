$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$( document ).ready(function() {
  $( "#btn_mail" ).click(function() {
    // alert( "El correo fue enviado correctamente..." );
    var section_alert = $('#myalert');

    var nodo = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> append
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    section_alert.append(nodo);

    var nodo2 = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> prepend
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>`
    section_alert.prepend(nodo2);
  });
});