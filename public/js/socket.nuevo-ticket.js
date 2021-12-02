// Manejando los nuevo tickets

// Comando para establecer la conexión
var socket = io();
// Test prueba lectura de archivo json
var label = $('#lblNuevoTicket');  //referencia al label, se recomienda 

socket.on('connect', function() {
  console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
  console.log('Lost conection with Server');
});

// on 'estadoActual' cuando se reciba el objeto, colocar el valor del ticket en el label
socket.on('estadoActual', function(data) {
  label.text(data.actual);
});

$('#btnticket').on('click', function(){
  // console.log('click');
  socket.emit('siguienteTicket', null, function( siguienteTicket ){
    // ejecutar la function cuando termine
    label.text(siguienteTicket);
  
  });

});