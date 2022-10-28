// Las 4 formas de definir funciones son las siguientes: 

    function saludar( nombre ) {
        console.log( arguments ); // Esto es algo que no funciona en las funciones de flecha, pero si esta en las funciones tradicionales, esto devuelve un objeto con los argumentos que le estamos pasando a la funcion. 
        console.log( 'Hola ' + nombre );
    }

    const saludar2 = function( nombre ) {
        console.log( 'Hola ' = nombre );
    }

    const saludarFlecha = () => {
        console.log('Hola Flecha');
    }

    const saludarFlecha2 = ( nombre ) => {
        console.log('Hola ' + nombre);
    }

// Y estas funciones se pueden llamar cuando lo necesitemos. 