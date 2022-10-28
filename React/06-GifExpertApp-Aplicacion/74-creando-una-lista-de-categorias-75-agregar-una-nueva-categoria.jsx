// Cuando nosotros tenemos que almacenar informacion y esa informacion tiene que cambiar el HTML nosotros tenemos que usar al "hook" de React para poder mantener el estado y hay varios "hooks" para mantener el estado, pero nosotros aun vamos a seguir usando "useState".

// Para esto tenemos que importar el "useState" de "React", de la siguiente manera: 
    import { useState } from 'react';

// Luego dentro de nuestro componente tenemos que escribir lo siguiente: 

    const [categories, setCategories] = useState([ 'One Punch' ]);  // Dentro de los parentesis del 'useState' tenemos que escribir algo porque si no puede que hayan errores en nuestro componente. En este caso vamos a inicializarlo con un arreglo y vamos a incializarlo con un primer valor, que en este caso va a ser 'One Punch'.  

// Y asi tenenemos un espacio en memoria que nos va a servir para manejar mis categorias o lo que necesitemos manejar. 

// Si nosotros queremos mostrar ese valor por defecto del "useState", (en este caso en una lista ordenada) vamos a desestructurarlo de la siguiente manera: 

<ol>
    {categories} 
</ol>

// Esto mostraria 'One Punch' en pantalla, pero en el caso de que tuvieramos dos objetos dentro de "useState": 

    useState([ 'One Punch', 'Dragon Ball Z' ]);

// Esto mostraria 'One PunchDragon Ball Z' en pantalla, es por eso que tenemos que usar el " .map() " que es algo propio de los arreglos en JavaScript, el ".map()" me permite barrer cada uno de los elementos del arreglo y regresar algo nuevo quedaria de la siguiente manera: 

<ol>
    { 
        categories.map( category => {
            return <li key={ category }>{ category }</li>
        })
    }
</ol>

// Aca lo que estamos poniendo dentro del ".map()" es una funcion de flecha, donde dentro de la etiqueta "li" tenemos una "key" la cual es si o si necesaria, ahi podemos colocar lo que nosotros querramos, puede ser una fecha, un nombre o lo que sea pero no se puede repetir, tiene que ser algo unico. Al hacer eso lo que tendriamos en pantalla seria lo siguiente: 

// 1. One Punch
// 2. Dragon Ball Z

// Nosotros podemos tener la cantidad de 'States' como nosotros querramos y necesitemos.


// Si nosotros quisieramos tener un boton que agregue objetos a nuestro array, no podemos utilizar el ".push", ya que React esta pensado para no mutar las cosas y lo que esta haciendo el ".push" es mutar nuestras cosas. Es por eso que lo que podemos hacer para agregar cosas a nuestro arreglo en "categories" es utilizar el "setCategories", donde debemos crear un array, clonar lo que tengamos en "categories" para que estos no se borren y reemplazen al apretar el boton, seria de la siguiente manera: 

    const onAddCategory = () => {
        setCategories([ ...categories, "Fortnite" ]);
    }

    // Esta es una de las maneras que hay de hacerlo, otra manera seria la siguiente: 

    const onAddCategory = () => {
        setCategories(cat => [...cat, 'Fortnite']); // "cat" hace referencia a 'categories'. 
    }


 

