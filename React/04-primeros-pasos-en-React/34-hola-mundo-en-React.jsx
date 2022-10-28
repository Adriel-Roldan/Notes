// Para empezar a correr la aplicacion en la consola tengo que escribir "npm run dev", esto nos da una direccion que tenemos que poner en el navegador y ahi ya tenemos iniciada nuestra app.

// En el archivo del 'main' de React debemos hacer la importacion de React, para esto podemos usar el atajo "imr", va a quedar algo asi:

    import React from 'react';

//  Tambien tenemos que hacer otra importacion de "react-dom/client" que a esto se le acostumbra poner el nombre de "ReactDOM". Estos dos elementos son los que necesitamos para renderizar mi aplicacion, el cual va a quedar asi: 

    import ReactDOM from 'react-dom/client'; 

// Luego para renderizar nuestra aplicacion vamos a utilizar componentes que no son mas que funciones, en la cual vamos a hacer lo siguiente:

     const App = () => {
       return (
        <h1> Hola Mundo </h1>
        ); 
     }
    // (este return es lo mismo a escribir "document.createElement...."). (esto en general va a estar en otro archivo fuera del "main").

// Despues para renderizar lo que queremos mostrar en nuestra app tenemos que hacer lo siguiente: 

    React.DOM.createRoot( document.getElementById('root') ).render(

         <React.StrictMode> 

            <App />   

        </React.StrictMode>
    );

//  ( El "root" del "document.getElementById" lo sacamos de nuestro documento HTML donde esta el <div> que tiene el ID al cual tenenemos que llamar para indicar donde se va a renderizar).

// Todos los elementos de nuestros functionalComponents van capitalizados con OperCamelCase, es decir que comienzan con mayuscula. 

