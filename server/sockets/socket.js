const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

// Test prueba lectura de archivo json
const ticketControl = new TicketControl();

io.on('connection', (client) => {

   client.on('siguienteTicket', ( data, callback )=> {
       
    let siguiente = ticketControl.siguiente();
      console.log(siguiente);

    callback(siguiente);
   });

  //  Emitir un evento estadoActual este debe retornar el ticket actual
  // {
  //   actual: ticketControl.
  // }
  client.emit('estadoActual', {
    actual: ticketControl.getUltimoTicket(),
    ultimos4: ticketControl.getUltimos4()
  });

  
  client.on('atenderTicket', ( data, callback ) => {

    if ( !data.escritorio) {
      return callback({
        err: true,
        mensaje: 'El escritorio es necesario'
      });
    }

    let atenderTicket = ticketControl.atenderTicket(data.escritorio );

    callback(atenderTicket);

    // Actualizar/Notificar cambios en los ultimos 4 tickets
    client.broadcast.emit('ultimos4', {
      ultimos4: ticketControl.getUltimos4()
    });

  });

});