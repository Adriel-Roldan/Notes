// Si nosotros tenemos dos variables una de ellas un objeto y a la segunda le asignamos el valor de la primera, o sea el objeto, ambas van a ser objetos. 

    let juan = { nombre: 'Juan' };
    let ana  = juan;

// Si imprimimos esto, va a retornar lo siguiente: 
    console.log({juan, ana}); // Retorna: juan: { nombre: 'Juan' } ana: { nombre: 'Juan' }

// Pero si ahora queremos cambiarle el valor a el objeto de 'ana': 
    ana.nombre = 'Ana';

// Y lo imprimimos va a retornar lo siguiente:
    console.log({juan, ana});  // Retorna juan: { nombre: 'Ana' } ana: { nombre: 'Ana' }


// Esto ocurre, porque en JavaScript todos los objetos son pasados por referencia. 

// Tambien ocurre lo mismo si tenemos la siguiente problematica: 

    // Creamos una funcion: 

        const cambiaNombre = ( persona ) => {
            persona.nombre = 'Tony';
            return persona;
        }

    // Y despues creamos dos objetos: 

        let peter = { nombre: 'Peter' };
        let tony  = peter;

    // Aca ocurre que ambos van a retornar " { nombre: 'Tony' } " porque estamos pasando a el objeto "Peter" como referencia en nuestra funcion y ahi es cuando vuelve y le cambia el valor a "Peter". 


// Para poder solucionar esto tenemos para usar el operador spread ( ... ), esto lo que hace es seperar todas las propiedades y los valores de un objeto, entonces para solucionar el problema tendriamos que haberlo hecho de la siguiente manera: 

    let juan = { nombre: 'Juan' };
    let ana  = { ...juan };
    ana.nombre = 'Ana';

    // Y aca si retornaria lo siguiente: 
        
        console.log({ juan, ana }); // juan: { nombre: Juan } ana: { nombre: Ana }

    // Y con la funcion podemos solucionarlo de la misma manera con el operador spread: 

        const cambiaNombre = ( { ...persona } ) => {
            persona.nombre = 'Tony';
            return persona;
        }


// Arreglos

// En los arreglos ocurre lo mismo, por ejeplo: 

    let frutas = ['Manzana', 'Pera', 'Anana'];
    let otrasFrutas = frutas; 

// Si tuvieramos esos dos arreglos y hacemos un push, se nos va a agregar en ambas: 

    otrasFrutas.push('Mango'); // 'mango' se agrego en ambos arreglos, por eso deberiamos hacerlo de la siguiente manera: 

    let frutas = ['Manzana', 'Pera', 'Anana'];
    let otrasFrutas = [ ...frutas ];
    
    // Entonces ahi a la hora de hacer un push solo modificariamos ese arreglo al cual estamos apuntando. 



// Segun entendi cuando nosotros asignamos dos objetos y uno de ellos esta hecho con el primer objeto esto va a ocupar un solo espacio en memoria, asi que lo que hace el el operador spread es crear un nuevo espacio en memoria para no pisar al que estamos usando de referencia. 


// Extra bonus: 

        // Si nosotros queremos crear un timer para saber cuanto se demora la funcion o lo que estemos creando podemos hacerlo de la siguiente manera: 

            console.time('test');
            const estoyDentroDelTimer = [];
            console.timeEnd('test');


