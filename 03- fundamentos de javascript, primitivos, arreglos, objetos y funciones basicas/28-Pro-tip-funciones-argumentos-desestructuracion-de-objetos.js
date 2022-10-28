// PRO TIP 1:

// Si nosotros queremos hacer una funcion que cree una persona lo hariamos de la siguiente manera: 

    function crearPersona( nombre, apellido ){
        return {
            nombre: nombre,
            apellido: apellido,
        }
    }
        crearPersona('Adriel', 'Roldan');

// Pero podemos hacerlo aun mas sensillo de la siguiente manera:

    function crearPersonaProTip( nombre, apellido ) {
        return{ nombre, apellido }
    }
        crearPersona('Adriel', 'Roldan');

// Con ambas tendriamos el mismo resultado. 

// Tambien lo podemos hacer con una funcion de flecha: 

    const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });




// PRO TIP 2: 


// Si nosotros queremos imprimir los argumentos que le mandamos a nuestra funcion, pero esta funcion es una funcion de flecha entonces tenemos que hacer lo siguiente para que funcione:

    const imprimeArgumentos = ( ...args ) => {
        console.log( args );
    }

    // imprimeArgumentos(10, true, false, 'Adriel', 'Hola');



// PRO TIP 3: 


// Y si nosotros por ejemplo necesitamos poner cada uno de estos argumentos en una constante por ejemplo cuantos años tiene, si esta vivo, si esta casado, el nombre y el saludo, podemos hacerlo de la siguiente manera: 
    
const [edad, vivo, casado, nombre, saludo] = imprimeArgumentos(10, true, false, 'Adriel', 'Hola');
   
    // Y despues solo nos quedaria hacer un console.log de las constante que quisieramos imprimir: 

        console.log({edad, vivo, casado, nombre, saludo});



// PRO TIP 4: 

// Si nosotros tuvieramos un objeto como este: 

    let tony = {
        nombre: 'Tony Stark',
        organizacion: 'Avengers',
        edad: 46,
        trajes: ['Mark I', 'Mark V', 'Mark IV'],
    };

// Y quisieramos crear una funcion que imprima cada uno de sus valores pensariamos en hacerlo de esta manera: 

    const imprimePropiedades = ( personaje ) => {
        console.log( personaje.nombre );
        console.log( personaje.organizacion );
        console.log( personaje.edad );
        console.log( personaje.trajes );
    }

        imprimePropiedades( tony );


// Pero podemos desestructurar objetos y hacerlo mas simple, tambien podemos asignarles valores por defecto en caso de que algun argumento no exista. Por ejemplo para usarla en una funcion, de la siguiente manera:

    const imprimePropiedadesPro = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
        console.log({nombre});
        console.log({codeName});
        console.log({vivo});
        console.log({edad});
        console.log({trajes});
    }

        imprimePropiedadesPro( tony );