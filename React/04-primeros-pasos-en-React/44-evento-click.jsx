// Mas informacion sobre los eventos click de React: https://es.reactjs.org/docs/events.html

// Para nosotros hacer un event de click vamos a usar en la etiqueta "onClick" que esto es una propiedad de JavaScript, por ejemplo: 

<button onClick={function(event) {console.log(event)}}>+1</button> 

// El 'event' siempre esta ahi aun que no lo pongamos, y es algo del tipo mouseEvent y en pocas palabras tiene la informacion de donde yo hice click y todo lo demas. Tambien dentro de onClick nosotros podemos poner una funcion o lo que querramos que ocurra cuando hagamos click, ya que es una propiedad de JavaScript. 

// Hacerlo de esa forma es raro, ya que queda dificil de leer en el codigo y por lo general esa funcion se saca de ahi y se pone dentro del componente, pero ya no puede ser una funcion anonima asi que hay que asignarle un nombre: 

    const FirstApp = ({ title, subTitle='Soy un valor por defecto' }) => {
       const handleAdd = (event) => {
        console.log(event);
       }
        return (
            <>
                <h1>{ title }</h1>
                <h2>{ subTitle }</h2>
                <button onClick={ handleAdd }> +1 </button> 
            </>
        );
    }

// Pero si quisieramos agregarle un nuevo valor deberiamos de pasarle como atributo el un newValue y en el onClick pasarle el atributo event, por ejemplo: 

    const FirstApp = ({ title, subTitle='Soy un valor por defecto' }) => {
        const handleAdd = (event, newValue) => {
            console.log(event);
           }
        return (
            <>
                <h1>{ title }</h1>
                <h2>{ subTitle }</h2>
                <button onClick={ (event) => handleAdd(event, 'Hola') }> +1 </button> 
            </>
        );
    }

// Pero lo mas comun es que nos encontremos el 'button' de la siguiente manera:  

    <button onClick={ handleAdd }> +1 </button> 


// Si la funcion en este caso llamada 'handleAdd' no ocupa nada del componente, entonces es recomendado ponerla por afuera del componente. 

