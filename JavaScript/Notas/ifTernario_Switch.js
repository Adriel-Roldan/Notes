//IF TERNARIO
let comida = "Fideos";

let resultadoComida = comida == "Arroz" ? "Nos hacemos una arroz con huevo" : "Busquemos otra receta para hacer";
console.log (resultadoComida);

let botella = "esta vacia"

let botellaResultado = botella == "esta llena" ? "No hace falta llenarla" : "Hay que llenar la botella";
console.log(botellaResultado);

//SWITCH
let tiempo = "sigo mimiendo";

switch (tiempo) {
    case "me levante a horario":
        console.log("Buenisimo, podemos hacer todo tranqui");
        break;

    case "me levante muy justo":
        console.log("Tenemos que hacer las cosas rapido");
        break;

    case "me quede dormido":
        console.log("Tenemos que salir corriendo");
        break;
        
    default:
        console.log("No escuche la alarma, sigo durmiendo");
}

