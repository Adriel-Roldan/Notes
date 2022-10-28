// Para poder consumir una API vamos a utilizar 'Postman', ahi vamos a crear un workspace y ahi nos va a dejar poner el link, el api_key y lo que necesitemos.

// Luego esa url que nos genero es el que vamos a utilizar en nuestra app, vamos a tener que crear una funcion donde vamos a colocar el url: 

    const nombreFuncion = async() => {

        const url = `aca va el url`; 

        // Despues que tenemos el URL vamos a realizar la peticion HTTP con una constante: 

        const resp = await fetch( url );

        // Aca como estamos usando el "await" la funcion tiene que ser "async", asi que se lo agregamos.

    }

// Despues cuando hagamos un console.log de la funcion nos va a mostrar en consola todos los objetos que nos devuelve esa URL y de ahi podemos sacar lo que nosotros vayamos a utilizar, de ahi podemos desestructurar ese objeto y quedarnos con lo que vayamos a necesitar. 

// Luego podemos hacer una funcion con un objeto donde nosotros pidamos los datos que vayamos a necesitar utilizar. 

// Estas funciones por lo general no se dejan dentro del componente, si no que se colocan dentro de otra carpeta dentro de la carpeta donde estan los componentes y esa carpeta se va a llamar "helpers". Aun que seguimos teniendo una mala practica que queda pendiente de resolver. 