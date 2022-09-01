// La idea de las funciones es el poder reutilizar codigo, en vez de tener que volver a escribir de nuevo todo un codigo, lo que podemos hacer es volver a llamar a la funcion que esta programada para realizar la accion que necesitamos. De este modo nos ahorramos mucho codigo y tiempo. 

// Ejemplo de funcion

function saludar (){
    let saludo = prompt("Hola, como estas?");

    if(saludo == "bien"){
        return "me alegro"; // El return se usa para guardar el resultado de una funcion, es lo que va a retornar esa funcion.
    }
    else{
        return "que mal"
    }
}
 
// Despues nosotros podemos definir los parametros de una funcion, esto se hace de la siguiente manera: 

function suma(num1, num2){   // Estos son los parametros que le podemos añadir a nuestra funcion. 
    let resultado = num1 + num2; 
    return resultado;
} 
console.log(10, 5); // De esta manera le podemos dar los parametros a nuestra funcion. 


// Tambien existe la funcion de flecha que cumple la misma funcion que la funcion pero es como una forma mas resumida de usarla. 

// Ejemplo: 

let suma = (num1, num2) =>{ // Es de esta manera, con un variable, un parentesis para los parametros y luego la flecha que reemplaza a la palabra function
    let resultado = num1 + num2;
    return resultado; 
}  
    // Si estamos solo dandole un solo parametro a la variable cuando usamos la funcion de flecha, no hace falta encerrar entre parentesis al parametro