// 182 Introduccion a la seccion
// Explicación: crear sistema de colas de un banco
// Se obtiene un ticket de atencion N°1, esperar hasta ser llamado.
// Operarios: cajas, cajeros, atencion.
// Cliente se atiende con operario.
// Guardar info para cuando se corte la luz o se reinicia servidor. El ticket se mantiene con el último



// Aplicar sockets en un proyecto real
// Aprender sobre clases del ES6
// Asignar Tickets
// Leer Tickets
// Notificaciones 
// En resumen, crearemos una aplicación de cola

// 184 Inicio de proyecto - Aplicacion de Cola
// npm install express socket.io
// 15SocketsAplicaciondeCola\package.json
// "start": "node server/server.js"
// nodemon server/server.js

// 185 ES6 Classes - Clase para centralizar la lógica
// http://localhost:3000/nuevo-ticket.html
// ticket-control.js crear una clase.
// último dia y getDate() se guardará en un archivo de texto para que cuando se corte la luz o se reinicie el servidor, se mantenga el ticket.
// data.json. La clase TicketControl se guardará en un archivo de texto.
// Se actualiza el archivo data.json con el día de hoy. if ( data.hoy === this.hoy ) 
// 

// 186 Logica Siguiente ticket y centralizar la grabación

// 187 Socket Siguiente Ticket
// Boton generar ticket, en la parte servidor socket, va a una función la clase metodo siguiente(). siguiente regresa el sgte ticket para mostrar en pantalla.
// 15SocketsAplicaciondeCola\public\js\socket.nuevo-ticket.js
// Manejando los nuevo tickets
// Notar que al presionar el boton se desconecta y conecta. ademas se reinicia el nodemon
// Sucede porque cuando se graba un ticket ticket-control.js se refresca o cambia el data.json y eso dispara el refresh del nodemon
// Entonces ejecutar nodemon asi: nodemon server/server -e js html
// label debe llenar con el dato enviado del server

// 188 Socket Estado actual de la cola
// nuevo-ticket.html asignar en el label el último ticket asignado
// Crear un método getUltimoTicket.
// Servidor socket.js emitir  actual: ticketControl.getUltimoTicket()
// Cliente socket.nuevo-ticket recibir on actual: ticketControl.getUltimoTicket()

// 189 Coleccion de Tickets pendientes de atender
// Cola de tickets pendientes por atender
// Crear una clase con los campos numero y escritorio.
// TicketControl agregar this.ticket: []
// Reiniciar ticket si la fecha no es hoy
// tomar el valor de this.ultimo en el método siguiente() para agregarlo al arreglo de tickets pendientes. para ello crear intancia de tickets

// 190 Logica Atender un ticket
// escritorio.html
// un Escritorio se asigna en un ticket
// Si no hay registro array de objeto ticket entonces nada
// Obtener el primer número pendiente
// La variable atenderTicket corresponde a publico.html, tiene 4 tickets. Se maneja como un arreglo ultimos4tickets. Son los ultimo 4 tickets que se estan atentiendo en el momento.
// Crear en la clase TicketControl un campo ultimos4
// Al reiniciar el dia  this.ultimos4 = data.ultimos4;
// Agregar en el método grabarArchivo, reiniciarConteo el campo ultimos4

// 191 Socket Atender un Ticket
// socket.js client.on('atenderTicket') recibe una data y un callback para notificar cuando se haga el proceso o cual es el ticket al que se le asigna el escritorio.
// Confirmar que venga el escritorio
// llamar a TicketControl.atenderTicket(data.escritorio)
// Con esto se sabe el ticket que le toca al escritorio
// Retornar info para que el frontend lo pueda trabajar
// callback(atenderticket)
// escritorio.html agregar script
// nuevo archivo socket.escritorio.js
// Obtener los searchparams sirve para obtener query de la direccion web 
// importar socket.escritorio.js a escritorio.html
// has es para saber si una variable escritorio existe
// console.log( searchParams.has('escritorio')); //true
// Se valida que solo sea el params escritorio
// Cannot read property 'unshift' of undefined
// solucion debe inicializar el arreglo o incializarlo en data.json

// 192 Mostrar cola de tickets en pantalla
// Para reiniciar data.json - hoy:0 - iniciar nodemon
// Crear 10 tickets - crear proceso de cola - ir a publico.html
// crear socket.publico.js
// Al cargar la pantalla publico.html, se debe mostrar la cola actual de los tickets
// ticket-control - método getUltimos4()
// Socket.js
// client.emit('estadoActual', {
//   actual: ticketControl.getUltimoTicket(),
//   ultimos4: ticketControl.getUltimos4()
// });
// recargar la pantalla publico.html para recibir dos objetos actual y ultimo4
// crear referencia a lblTicket y lblEscritorio
// Cargar data.ultimos4 a los labels ticket y escritorio


// 193 Conectar la asignacion de Tickets con la pantalla de cola
// escritorio.html - boton atender el sgte ticket - se actualiza publico.html con los ultimos4 - sin tocar el boton de refresh de la página
// Socket.js - client.on('atenderTicket' -  client.broadcast.emit('ultimos4', ticketControl.getUltimos4());
// socket.publico.js - client.on('estadoActual' -  actualizaHTML(data.ultimos4););
// Emitir pitido de alerta
// var audio = new Audio('audio/new-ticket.mp3');
// audio.play();
// reiniciar nodemon para que se escuche

// 194 Probar aplicacion de Tickets en Heroku
// "start": "node server/server.js"
// const port = process.env.PORT || 3000;
// git init
// git status
// git add .
// git commit -m "inicial"

