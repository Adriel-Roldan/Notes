const prompt = require("prompt-sync") ({ sigint: true});


// AGREGA CAMINOS 

// function puedePasar(edad){
//     if(edad < 0){
//         console.log("Error, edad invalida. Por favor ingrese un numero valido.");
//     }
//     else if(edad == 21){
//         console.log("Te felicitamos por haber llegado a la mayoria de edad! <3");
//     }
//     else if(edad % 2 != 0){
//         console.log("Sabias que tu edad es impar?");
//     }
// }

// puedePasar(23);



// TOTAL A PAGAR 

// function totalAPagar(vehiculo, litrosConsumidos){
//     if (vehiculo == "coche" && litrosConsumidos > 0 && litrosConsumidos <= 25){
//         let precioFinal = litrosConsumidos * 86 + 50;
//         return `Su total a pagar es de $${precioFinal}`;
//     }
//     else if (vehiculo == "coche" && litrosConsumidos > 25){
//         precioFinal = litrosConsumidos * 86 + 25;
//         return `Su total a pagar es de $${precioFinal}`;
//     }
//     else if (vehiculo == "moto" && litrosConsumidos > 0 && litrosConsumidos <= 25){
//         precioFinal = litrosConsumidos * 70 + 50;
//          return `Su total a pagar es de $${precioFinal}`;
//     }
//     else if (vehiculo == "moto" && litrosConsumidos > 25){
//         precioFinal = litrosConsumidos * 70 + 25;
//         return `Su total a pagar es de $${precioFinal}`;
//    }
//    else if (vehiculo == "autobus" && litrosConsumidos > 0 && litrosConsumidos <= 25){
//         precioFinal = litrosConsumidos * 55 + 50;
//         return `Su total a pagar es de $${precioFinal}`;
//    }
//    else if (vehiculo == "autobus" && litrosConsumidos > 25){
//         precioFinal = litrosConsumidos * 55 + 25;
//         return `Su total a pagar es de $${precioFinal}`;
//    }
//    else{
//     return "Error, ingrese los datos correctos."
//    }
    
//  }


// console.log(totalAPagar("autobus", 45));



// LOCAL DE SANDWICHES

let elegiLaBase = prompt("Que sandwich base te gustaria? ");

function sandwichBase(){
    let pollo = 150;
    let carne = 200; 
    let vegetariano = 100;

    if(elegiLaBase == "pollo"){
        return pollo; 
    }
    else if(elegiLaBase == "carne"){
        return carne;
    }
    else if(elegiLaBase == "vegetariano"){
        return vegetariano;
    }
    
}

let elegiTuPan = prompt("Que tipo de pan te gustaria? ");

function elegiElPan(){
    let blanco = 50; 
    let negro = 60;
    let sinGluten = 75;

    if(elegiTuPan == "blanco"){
        return sandwichBase() + blanco;
    }
    else if(elegiTuPan == "negro"){
        return sandwichBase() + negro;
    }
    else if(elegiTuPan == "sin gluten"){
        return sandwichBase() + sinGluten;
    }
}

let adicional1 = prompt("Desea adicionar queso? ");

let adicional2 = prompt("Desea adicionar tomate? ");

let adicional3 = prompt("Desea adicionar lechuga? ");

let adicional4 = prompt("Desea adicionar cebolla? ");

let adicional5 = prompt("Desea adicionar mayonesa? ");

let adicional6 = prompt("Desea adicionar mostaza? ");

function opcion1(){
    let queso = 20; 
        if(adicional1 == "si"){
            return elegiElPan() + queso;
        }
        else {
            return elegiElPan();
        }
}

function opcion2(){
    let tomate = 15;
        if(adicional2 == "si"){
            return opcion1() + tomate;
        }
        else{
            return opcion1();
        }
}

function opcion3(){
    let lechuga = 10; 
        if(adicional3 == "si"){
            return opcion2() + lechuga;
        }
        else{
            return opcion2();
        }
}

function opcion4(){
    let cebolla = 15;
        if(adicional4 == "si"){
            return opcion3() + cebolla; 
        }
        else{
            return opcion3();
        }
}

function opcion5(){
    let mayonesa = 5; 
        if(adicional5 == "si"){
            return opcion4() + mayonesa;
        }
        else{
            return opcion4();
        }
}

function opcion6(){
    let mostaza = 5;
        if(adicional6 == "si"){
            return opcion5() + mostaza;
        }
        else{
            return opcion5();
        }
}
   
let sandwichTerminado = `Su total a pagar es de $${opcion6()}`;

console.log(sandwichTerminado);


