// LINK A MAS INFORMACION DE LOS OBJETOS: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object


// Cuando nosotros miremos unas llaves {} significa que son objetos literales y estos objetos tienen pares de valores, es decir que tienen dos valores uno que es conocido como la "llave" el cual va del lado izquierdo y el del lado derecho es el "valor de la llave", y nosotros para ingresar al valor que tiene esa llave tenemos que mandar a llamar a la variable del objeto que la contiene y luego con un punto . llamamos a la llave, por ejemplo si tuvieramos este objeto: 

    // let personaje = {
    //     nombre: 'Tony Stark',
    //     organizacion: 'Avengers',
    //     edad: 46
    // };

// Para tener por ejemplo la 'organizacion' tenemos que hacer lo siguiente: 

    console.log( personaje.organizacion );

    // Tambien se puede hacer de la siguiente manera: 

    console.log( personaje['organizacion'] );

// Tambien podemos tener objetos anidados y hasta podemos agregar arreglos de la siguiente manera: 

      let personaje = {
        nombre: 'Tony Stark',
        organizacion: 'Avengers',
        edad: 46,
        coords: {
            lat: 34.034,
            lng: -118.70
        },
        trajes: ['Mark I', 'Mark V', 'Mark IV'],
    };


// Si nosotros queremos borrar alguna propiedad de nuestro objeto tenemos que hacer lo siguiente: 

    delete personaje.edad; 


// Si quisieramos volver nuestro objeto un array, donde cada llave y cada valor de esa llave va estar dentro del mismo array, la sintaxis seria la siguiente: 

    // Creamos una variable: 

    const entriesPares = Object.entries( personaje ); 


// Tambien podemos agregarle valores al objeto de la siguiente manera: 

    personaje.casado = true; 


// Si nosotros quisieramos bloquear nuestro objeto, es decir que no pueda ser mutado o modificado, no nos vale con crear el objeto en una constante, lo que tendriamos que hacer es lo siguiente: 

    Object.freeze( personaje );

// Esto solamente bloquearia a los objetos principales por asi decirlo, pero no a los objetos anidados, para bloquear tambien los objetos anidados bastaria solo con llamar a esa propiedad en el "Object.freeze": 

    Object.freeze( personaje.coords ); 


// Si nosotros necesitaramos un listado de todas las propiedades que tiene nuestro objeto podemos hacer lo siguiente: 

    const propiedades = Object.getOwnPropertyNames( personaje );

    // De esta forma tendriamos el objeto en forma de arreglo

// Pero si nosotros quisieramos tambien tener los valores vamos a hacer lo siguiente: 

    const valores = Object.values( personaje )