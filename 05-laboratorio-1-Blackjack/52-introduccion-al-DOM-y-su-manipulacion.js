 // El DOM hace referencia todo nuestro documento que esta dentro del HTML.

 // Si nosotros queremos manipular el DOM entonces tenemos que empezar escribiendo "document", que hace referencia a nuestro documento, de ahi nosotros podemos seleccionar varias cosas.

 // Actualmente lo que mas se utiliza es el "querySelector" que me permite a mi recuperar el primer elemento que cumple la condicion que yo le especifico y despues esta el "querySelectorAll" que me recupera todos los elementos que cumpla con la condicion. 

 // Por ejemplo si nosotros queremos cambiar una imagen que esta en nuestra pagina lo que debemos hacer es llamar al querySelector, pasarle que queremos cambiar una imagen (img) y a continuacion utilizar un .src para seleccionar la ruta de la nueva imagen que queremos colocar: 

        document.querySelector('img').src = 'rutaDeLaImagen';

// Despues si queremos manipular el texto no vamos a utilizar el ".src" vamos a utilizar el ".inner" y de este hay dos tipos: 

// .innerText: Que cambia o agrega el texto directamente en el HTML y esto no seria util si quisieramos agregar alguna etiqueta HTML, ya que lo que coloquemos se agrega literalmente:
    
        document.querySelector('h1').innerText = 'Hola Mundo!';

        // Aca estaria agregando el "Hola Mundo" en donde esta la etiqueta "h1". 

// .innerHTML: Lo que hace es decirle que reemplace lo que esta en los parentesis del "querySelector" por lo que le estoy igualando: 

        document.querySelector('p').innerHTML = '<h1>Hola Mundo!</h1>';

        // Aca esta reemplazando la etiqueta "p" por la etiqueta "h1" y el "Hola Mundo!".

// Tambien algo que se utiliza bastante es el "getElementById" que lo que hace es buscar el id que tiene la etiqueta: 

        document.getElementById('titulo');

        // Tambien para llamar por el ID podemos utilizar el "querySelector" para eso hay que utilizar el numeral (#): 

            document.querySelector('#titulo');

// Y si nosotros queremos llamarlo por la clase tambien tenemos dos formas de hacerlo, la primera: 

        document.getElementsByClassName('parrafos'); // Esto devuelve todas las clases como "HTMLCollection". 

        // La segunda opcion es la siguiente: 

            document.querySelectorAll('.parrafos'); // Al utilizar el "All" devuelve todas las clases pero si queremos que solo devuelva la primera simplemente no colocamos el "All". Esto devuelve todos los elementos con esa clase como un "NodeList". 


// Algo que no esta bueno de llamar tanto al "document" es que cada vez que lo hacemos este recorre todo el HTML de inicio a fin y esto afecta al rendimiento. 

// Es por eso que se aconseja que si queremos cambiar el parrafo varias veces, entonces hagamos lo siguiente: 

        const parrafo = document.querySelector('.parrafos'); 

        // Entonces luego solo tenenemos que llamar a la variable "parrafo": 

            parrafo.innerHTML = 'Hola Mundo';


// Si nosotros necesitamos crear un elemento nuevo en nuestro HTML como por ejemplo otro parrafo, un boton o un h2, podemos hacerlo atraves del "createElement" el cual dentro de los parentesis va lo que queremos agregar, por ejemplo: 

        document.createElement('button');

// Esto al igual que todo si lo vamos a usar mas de una vez lo podemos guardar en una constante: 

        const botonNuevo = document.createElement('button');

        // Y supongamos que queremos poner ese boton en un div, entonces hacemos lo siguiente: 

            const divBotones = document.querySelector('#divBotones');

            divBotones.append( botonNuevo ); 

            // El "append" es algo que se utiliza para añadir algo y lo inserta al final, si nosotros queremos insertarlo al principio tenemos el "prepend". 

    // Algo bueno de crear esto es que lo que creemos dentro de javascript va a pasar por referencia, entonces cualquier modificacion que le hagamos a esa constante (en este caso "botonNuevo") va a manipular ese elemento. 

    // Sabiendo esto ahora si al boton le queremos añadir un texto podemos hacer lo siguiente: 

        botonNuevo.innerText = 'Soy un boton nuevo'; 

    // Pero ahora este boton no tiene ningun estilo, pero si queremos añadir el mismo estilo que los demas botones o agregarle una clase ya existente entonces podemos hacer lo siguiente: 

        botonNuevo.classList.add('claseBoton'); 

        // Lo que hace el ".classList" es mostrarnos cuales son las clases que tiene ese boton, y para añadirle una nueva clase lo que tenemos que agregarle es el ".add" y luego el nombre de la clase que yo necesito agregar. 










        