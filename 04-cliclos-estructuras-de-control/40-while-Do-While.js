// El while son ciclos o bucles, al cual es necesario darle alguna condicion para que no entre en un bucle infinito y esta condicion tiene que ser siempre verdadera, porque en el caso de ser falsa no se va a ejecutar. 

// Algunos datos que se tomarian como falsos son: undefined, null y false. 

    // Supongamos que tenemos un arreglo de distintas marcas de autos y queremos imprimir cada uno de estos autos, para esto tenemos que recorrer el arreglo y podemos hacerlo de la siguiente manera: 

        let carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
        let i = 0

        while( i < carros.length ) {
            console.log( carros[i] );
            i++;
        }

        // Teniendo en cuenta que siempre va a ejecutarse cuando la condicion sea verdadera podemos resumir la condicion de ese while de la siguiente manera: 

        while( carros[i] ) {
            console.log( carros[i] );
            i++;
        }

        // Ya que cuando 'i' sea una posicion que no exista entonces va a retornar un "undefined" y no va a ejecutarse el while.  

        // Y si queremos saltear algun elemento podemos utilizar la palabra "continue" dentro de un 'if': 

        while( carros[i] ) {
            if( i === 1 ) {
                i++ // incrementar es importante para evitar entrar en un bucle infinito
                continue;
            }
            console.log( carros[i] );
            i++;
        }

            // Y de esa forma va a saltear lo que se encuentre en la posicion 1 pero va a ejecutar las demas posiciones. 


// DO WHILE

// El 'do while' a diferencia del 'while' es que este va a ejecutar el bloque interno una vez y la sintaxis es la siguiente: 

        let j = 0;

        do{
            console.log( carros[j] );
            j++;
        } while( carros[j] ); // Aca lo que le decimos es que si la condicion se sigue cumpliendo entonces que siga ejecuntando lo que hay dentro del 'do'. 
