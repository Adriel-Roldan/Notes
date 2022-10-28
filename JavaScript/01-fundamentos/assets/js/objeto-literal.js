let personaje = {
    nombre: 'Tony Stark',
    organizacion: 'Avengers',
    edad: 46,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Mark IV'],
};

console.log( 'Cantidad de trajes:', personaje.trajes.length ); 
console.log( 'Ultimo traje:', personaje.trajes[ personaje.trajes.length - 1 ] );