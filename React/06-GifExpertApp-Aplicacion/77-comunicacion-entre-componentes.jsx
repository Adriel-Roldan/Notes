// En nuestro componente importado a la app, podemos mandar propiedad y funciones. Por ejemplo:

    <AddCategory setCategories={ setCategories }/> // Aca estamos poniendo una propiedad con una funcion

// Para pasar una funcion al otro componente puedo desestructurar el "props" en el componente al cual quiero agregarle la funcion del otro componente. En este caso seria pasar una funcion que tenemos dentro de nuestro componente de la aplicacion, al componente donde se encuentra el input. Es por esta razon que vamos a poder usar los "props" de la siguiente manera: 

    export const AddCategory = ({ setCategories }) => {
        // Y aca podemos agregarla a la funcion que necesitemos hacerlo. En este caso es la funcion de 'onSubmit':
        const onSubmit = ( event ) => {
            event.preventDefault();
            setCategories([ inputValue ])
        }
    }

// Pero si lo dejamos asi entonces lo que vamos a estar haciendo es reemplazar todos los items anteriores con el que vayamos a mandar, es por eso que tenemos que hacer un callback y llamara a las categories anteriores para clonarlas y no se borren: 


const onSubmit = ( event ) => {
    event.preventDefault();
    setCategories(categories => [ inputValue, ...categories ]);
}

// Pero aca seguimos con una problematica que es que atraves del input se pueden mandar espacios en blanco y se pueden mandar dos veces la misma cosa. 

// Para solucionar el problema de mandar cosas en blanco podemos mandar una condicion para que saltee la funcion en caso de que se mande algo sin caracteres, lo podemos hacer con un 'if' de la siguiente manera: 

    if( inputValue.trim().length <= 1 ) return; 

// Aca lo que hacemos es sacarle los espacios en blanco con el ".trim()" y  le decimos que si el 'inputValue' es menor o igual a 1 entonces que se saltee la funcion, con el objetivo de que no se puedan ingresar espacios en blanco o con un solo caracter.

// Despues para solucionar el problema de que cuando apretabamos 'enter' lo que escribimos no se borraba y quedaba ahi, podemos hacer lo siguiente:

    setInputValue('');

// Donde mandamos a llamar al final de la funcion el "setInputValue" y le decimos que va a ser igual a un string vacio, esto va a hacer que cuando apretemos 'enter' se borre lo que teniamos escrito. 