const dia = 6; 
const horaActual = 8; 

let horaApertura;
let mensaje; 

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;
mensaje = ( horaActual >= horaApertura ) ? 'Estamos abierto' : `Estamos cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ mensaje, horaApertura });