// Comando para establecer la conexión

var socket = io();

var searchParams = new URLSearchParams( window.location.search );

// console.log(searchParams);

// has es para saber si una variable escritorio existe
console.log( searchParams.has('escritorio')); //true
if ( !searchParams.has('escritorio') ) {
  // redirigir a la pantalla principal
  window.location = 'index.html';
  // código JS se detiene
  throw new Error('El escritorio es necesario');
}

// Si viene la variable escritorio por la url
var escritorio = searchParams.get('escritorio');

// Tener referencia a la etiqueta small
var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

// Evento click de button
$('button').on('click', function() {

  socket.emit('atenderTicket', { escritorio: escritorio }, function( resp ) {
    // resp es función de socket.js client.on callback da un error y enviar el atenderTicket

    // console.log(resp);
    if( resp === 'No hay tickets') {
      label.text(resp);
      alert(resp);
      return;
    }

    label.text('Ticket ' + resp.numero);

  } );
});