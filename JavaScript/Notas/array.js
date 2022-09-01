// ARRAYS

 let variado = ["Adriel", 24, 25, 21]; 

console.log(variado[0], variado[3]); //PARA LLAMAR A DOS ELEMENTOS DENTRO DEL ARRAY

console.log(variado.length);  //CONSULTA EL LARGO DEL ARRAY


//pop PARA EXTRAER ELEMENTOS AL FINAL EJ: 
variado.pop()  

//PARA GUARDARLO USAR UNA VARIABLE EJ: 
let elUltimoDato = variado.pop();

 //push PARA INSERTAR ELEMENTOS AL FINAL EJ: 
 variado.push("Juan", 24);

//shift PARA EXTRAER ELEMENTOS AL PRINCIPIO  EJ: 
variado.shift(); //TAMBIEN SE PUEDEN GUARDAR DENTRO DE UNA VARIABLE

//unshift PARA INSERTAR ELEMENTOS AL PRINCIPIO EJ: 
variado.unshift("Soy un agregado");

//indexOf PARA PREGUNTAR EL INDICE DE UNA OCURRENCIA DEL PRINCIPIO AL FINAL EJ: 
variado.indexOf("Adriel")

 //O SE PUEDE CREAR UNA VARIABLE EJ: 
 let enQuePosicionEstoy = variado.indexOf("Adriel")

//lastIndexOf PARA PREGUNTAR EL INDICE DE UNA OCURRENCIA DEL FINAL AL PRINCIPIO EJ: 
variado.lastIndexOf("25") //TAMBIEN SE PUEDE AGREGAR A UNA VARIABLE

// join PARA UNIFICAR TODOS LOS ELEMENTOS PRESENTES EN UN ARRAY EJ: 
console.log (variado.join("-"));  

//TAMBIEN PUEDE SER DENTRO DE UNA VARIABLE EJ:
 let resultadoConGuion = variado.join("-");







