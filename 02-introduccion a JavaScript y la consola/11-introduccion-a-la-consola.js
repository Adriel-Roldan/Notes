// Existen varios modos de mandar la funcion en la consola o mostrar el resultado en la consola, por ejemplo estos:

    console.log( 03 );
    console.warn( 03 );
    console.error( 03 );
    console.info( 03 );

// Tambien si nosotros queremos imprimir una variable en la consola pero tambien queremos que aparte del resultado de esa variable aparezca el nombre de la variable, lo que podemos hacer es lo siguiente: 

    let a = 30;

    console.log({ a });

// Esto va a imprimir en consola lo siguiente: 

    // {a: 30}

// Tambien podemos agregarles estilos con CSS a lo que queremos imprimir en consola, de la siguiente manera: 

    console.log('% Variables', 'color: blue; font-weight: bold'); 

// Eso imprimiria en consola la palabra "Variables" con color azul y en negrita. 


// Si nosotros queremos imprimir varias cosas en consola podemos utilizar lo siguiente: 

    console.table({ a, b, c, d });

// Esto crea una tabla en la consola mostrando lo que contiene cada variable, tambien se pueden mandar como un arreglo [] o como en este caso, como un objeto {}.