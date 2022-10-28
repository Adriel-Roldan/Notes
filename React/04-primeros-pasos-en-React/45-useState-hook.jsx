// Mas informacion de los hooks: https://es.reactjs.org/docs/hooks-intro.html

// Lo que debemos hacer para trabajar con Hooks es primero importarlas de la siguiente manera: 

import { useState } from 'react'; 

// Lo que hacemos es importarlas desde React, y lo que importamos es 'useState' que es una simple funcion de React y como estas existen varias mas, nos damos cuenta de que es un hook porque tiene la palabra "use", lo cual me indica que es un Hook. 

// Para poder usar el hook, en este caso para incrementar el valor con el boton, lo que debemos hacer es escribir lo siguiente dentro del componente: 

    const [ counter ] = useState( 10 );

    const handleAdd = () => {
        counter++ //Tira error al querer incrementarlo.  
    }

// Esto se setea en una constante para que nosotros en la funcion no vayamos a mutar el valor del counter, por eso se puede sumar con un +1 por ejemplo, pero no podemos incrementarlo o modificarle el valor que ya tiene, entonces al asignarlo en una constante nos va a largar un error al tratar de mutarlo. 

// Lo correcto seria hacer lo seria cambiarlo con un segundo argumento, el cual tiene el nombre de "set" y seguido el nombre que querramos pero en este caso va a ser "setCounter" entonces nosotros sabemos que "setCounter" es para cambiar el counter, entonces despues podemos mandar a llamar la funcion "setCounter" y ahi si cambiarle el valor al "counter" sin que nos largue error. Por ejemplo:

    const [ counter, setCounter ] = useState( 10 );

    const handleAdd = () => {
       setCounter( counter + 1 ); // Asi no largaria error, pero si o si hay que sumar si no larga error.
    }

// Lo que hacemos al ejecutar un "setCounter" es decirle a la aplicacion que el estado del "counter" cambio y como resultado tiene que volver a renderizar el componente. 

// Otra forma en la que lo podemos hacer es atraves de un CALLBACK, donde guarda el valor actual del "counter" y luego se lo suma con una funcion, por ejemplo: 

    const [ counter, setCounter ] = useState( 10 );

    const handleAdd = () => {
        setCounter( (c) => c + 1 ); 
    }

// Hay circunstancias donde vamos a utilizar un modo u otro, por eso es bueno entender ambos modos y saber aplicarlas. 
