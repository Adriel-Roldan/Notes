const prompt = require("prompt-sync") ({ sigint: true});



let temperatura = prompt("Cuantos grados hacen afuera? ");

if(temperatura >= 25 && temperatura <= 32){
    console.log("Perfecto! El clima esta perfecto para salir solo de remera.");
}
else if (temperatura < 25 && temperatura >= 18){
    console.log("Esta lindo! Solo deberiamos ponernos una campera finita por las dudas.");
}
else if (temperatura < 18 && temperatura >= 10){
    console.log("Esta bastante fresco! Mejor nos ponemos una campera mas abrigada.");
}
else if (temperatura < 10){
    console.log("Esta muy frio, abrigate mucho!");
}
else {
    console.log ("Deberias decirme la cantidad de grados que hacen afuera, solo con el numero!");
}


let lluvia = prompt("Afuera esta lloviendo? ");

if(lluvia == "Si"){
    console.log("Entonces deberias salir con un paraguas.");
}
else if(lluvia == "No"){
    console.log("Entonces podemos salir sin problemas.");
}
else {
    console.log("Por favor, ingresa un Si o No.");
}



let ascensor = prompt("Vivis en un edificio? ");

if(ascensor == "Si"){
    console.log("Llamemos al ascensor para bajar!");
}
else if(ascensor == "No"){
    console.log("Que bueno no tener que esperar ascensores!");
}
else {
    console.log("Por favor, ingresa un Si o No.");
}



let horaApertura = 9;
let horaCierre = 19;
let horaActual = prompt("Cual es la hora actual? ");

if(horaActual > horaApertura && horaActual < horaCierre){
    console.log("Perfecto! La fiambreria esta abierta!");
}
else{
    console.log("El horario de atencion de la fiambreria es de 9:00hs a 19:00hs");
}



let cantidadFiambre = prompt ("Cuantos gramos de fiambre vas a llevar hoy? ");

let precioFiambre = 180;

function tengoQuePagar (){
    let totalAPagar = cantidadFiambre * precioFiambre / 100;
    return totalAPagar;
}

console.log("El total a pagar es de: $"+ tengoQuePagar());


// EL DESAFIO EXTRA 

let cajonPantalones = "remera";
let cajonRemeras = "pantalon";

function cambio(){
    let pantalon = cajonRemeras;
    let remera = cajonPantalones;
    return `Ahora en el cajon de las remeras esta la ${remera}` + "   " + `Ahora en el cajon de los pantalones esta el ${pantalon}`;
}

console.log(cambio());



