// Nosotros podemos escribir expresiones de JavaScript en nuestros componentes SIEMPRE Y CUANDO NO SEAN OBJETOS, para esto tenemos que utilizar las llaves '{ JavaScript }'.

const persona = {
    nombre: Adriel,
    apellido: Roldan
};

// Entre los parentesis podemos escribir cualquier expresion de JavaScript siempre y cuando cuando sea un objeto, si quisieramos escribir un objeto dentro de nuestra etiqueta podemos hacer lo siguiente: 

// Llamar a cada elemento del objeto: 
    return( 
        <h1>{ persona.nombre }</h1>
    )

// Pero si queremos imprimir todo el objeto tenemos que usar una funcion que pertenece a React que es el JSON: 
    return(
        <h1>{ JSON.stringify( persona ) }</h1>
    )

// Una regla que hay en React es que si a la expresion que estemos llamando en nuestro componente no le estamos cambiando el valor o no tienen relacion con ningun hook, entonces tenemos que colocar la expresion fuera del componente. 

// Hay que tener cuidado con poner funciones porque si la funciones es asincrona (async), porque va a marcar un error, porque una promesa es un objeto. 

