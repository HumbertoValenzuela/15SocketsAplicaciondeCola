const fs = require('fs');

class Ticket {

    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }

}

class TicketControl {

  constructor() {
    this.ultimo = 0;//último número de ticket
    this.hoy = new Date().getDate();//día actual
    this.tickets = [];//arreglo de tickets
    this.ultimos4 = [];
    // Leer info de un archivo json
    let data = require('../data/data.json'); //importar la información del archivo data.json

    // console.log(data);
    // Cada vez que empieza un nuevo día, se reinicia el ticket
    if ( data.hoy === this.hoy ) {
      this.ultimo = data.ultimo;
      this.tickets = data.tickets;
      this.ultimos4 = data.ultimos4;
    } else {
      // Si es otro día, se reinicia el ticket
      this.reiniciarConteo();
    }
  }

  // Incrementar el número de ticket
  siguiente() {

    this.ultimo += 1;
    let ticket = new Ticket(this.ultimo, null);//crear un nuevo ticket con el número
    this.tickets.push(ticket);//Agregar el ticket al arreglo de tickets

    this.grabarArchivo();

    return `Ticket ${this.ultimo}`;
  }

  getUltimoTicket() {
    // Obtener el ´ltimo ticket generado y retornarlo
    return `Ticket ${this.ultimo}`;
  }

  getUltimos4() {
    return this.ultimos4;
  }

  // un Escritorio se asigna en un ticket
  atenderTicket(escritorio) {

    // Si no hay registro array de objeto ticket entonces nada
    if (this.tickets.length === 0) {
      return 'No hay tickets';
    }
    
    // Obtener el primer número pendiente
    // Se extrae el número par romper la relación que tiene javascrpt. Que todos los objetos son pasados por referencia
    let numeroTicket = this.tickets[0].numero;
    console.log(numeroTicket)
    
    this.tickets.shift();//eliminar el primer elemento del arreglo

    // Instancia de un nuevo ticket, para poder atenderlo
    let atenderTicket = new Ticket(numeroTicket, escritorio);
    // console.info(atenderTicket);

    // Poner a atenderTicket al inicio del Array
    this.ultimos4.unshift(atenderTicket);

    // Verificar que solo exista 4 tickets en ese arreglo
    if ( this.ultimos4.length > 4 ) {
      this.ultimos4.splice(-1, 1);//eliminar el último elemento del arreglo
    }
    console.log('Ultimos 4');
    console.log(this.ultimos4);

    this.grabarArchivo();

    return atenderTicket;

  }

  // Método para reiniciar Conteo
  reiniciarConteo(){
    // console.log('Se ha iniciado el Conteo');

    this.ultimo = 0;
    this.tickets = [];//Otro día se reinicia el ticket
    this.ultimos4 = [];
    
    console.log('Se ha reiniciado el sistema'); 
    this.grabarArchivo();

  }


  // grabar archivo
  grabarArchivo() {
    // Objeto que se quiere grabar
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.hoy,
      tickets: this.tickets,// grabar ticket pendiente
      ultimos4: this.ultimos4,
    }

    // Mandar como string
    let jsonDataString = JSON.stringify( jsonData );
    // Grabar en el archivo data.json
    fs.writeFileSync('./server/data/data.json', jsonDataString);
  
  }

}

module.exports = {
    TicketControl
}

