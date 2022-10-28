// Los arreglos se ven siempre entre estas llaves [], ahi adentro es como un contenedor o una biblioteca donde vamos a almacenar distintas cosas, podemos poner cosas de distintos datos, funciones o objetos literales, por ejemplo:

    let arreglo = [
        true,
        123,
        'Hola Mundo',
        function(){},
        () => {},
        { a: 1 }
    ];


    let arreglo2 = ['Adriel', 'Emilio', 'Roldan', 'Chitadino'];
// Si nosotros necesitamos saber el largo de nuestro arreglo podemos utilizar el metodo " .length "
    console.log(arreglo2.length); // Esto retornaria " 4 "

// Y si quisieramos siempre mostrar el ultimo elemento de nuestro array, podemos hacer lo siguiente: 
    console.log(arreglo2[ arreglo2.length - 1 ]); // Esto retorna el ultimo elemento de mi array. 

// Es totalmente valido poder hacer calculos dentro de mis llaves. 


// Si nosotros necesitamos barrer cada uno de los elementos para ejecutar algun tipo de procedimiento, tenemos el metodo " .forEach ": 
    arreglo2.forEach( (elemento, indice, arr) => {
        console.log({elemento, indice, arr});
    });

// Esto va a retornar lo siguiente: 

// {elemento: 'Adriel', indice: 0, arr: Array(4)}
// {elemento: 'Emilio', indice: 1, arr: Array(4)}
// {elemento: 'Roldan', indice: 2, arr: Array(4)}
// {elemento: 'Chitadino', indice: 3, arr: Array(4)}


// Luego tenemos un metodo para agregar un nuevo elemento al final de nuestro array que es el " .push() " esto luego va a retornar la longitud del arreglo con el nuevo elemento agregado:
    let nuevaLongitud = arreglo2.push( 'Roly' );
    console.log({ nuevaLongitud });

// Retornaria en consola lo siguiente:
    
    // {nuevaLongitud: 5}



// Si nosotros quisieramos agregar un elemento al principio del array, tenemos el " .unshift ":
    arreglo2.unshift( 'Hola' );



// Para remover el ultimo elemento del arreglo tenemos el " .pop " este tambien retorna el elemento que fue borrado:
    arreglo2.pop();



// Tambien tenemos un metodo para borrar, donde le tenemos que indicar apartir de que indice hasta que indice quiere que borremos, que es el " .splice ":
    arreglo2.splice( 1, 3 ); // Desde la posicion 1 hasta la posicion 3 vamos a borrar

// Y esto va a retonar un nuevo arreglo con los elementos eliminados. 



// Para saber en que posicion del indice se encuentra un elemento, tenemos el metodo " .indexOf() " y dentro de los parentesis va lo que queremos buscar:
    arreglo.indexOf( 'Emilio' ); // Esto va a retornar la posicion de la palabra "Emilio".

// Y en el caso de que no encuentre la palabra que estamos buscando, el "indexOf()" va a retornar un -1. 







    


