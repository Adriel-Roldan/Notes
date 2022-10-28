// Nosotros podemos crear toda la aplicacion en un unico componente, pero esto no esta bien ya que viola los principios de responsabilidad unica y es recomendado que manejemos los componentes de manera segmentada y que cada uno de ellos se dedique en hacer una tarea en especifico. 

// Si nosotros tenemos un formulario como en este caso va a ser una barra para buscar gifs, vamos a utilizar la etiqueta "input" y dentro del "input", en el "value" vamos a poner un valor por defecto que se va a encontrar en el "useState", pero si queremos cambiar ese valor por defecto debemos utilizar el "onChange", ya que si no lo usamos nos va a largar un error en consola. 

// Tenemos los eventos ("event") que son cosas de JavaScript que vienen por defecto, dentro de estos eventos hay muchisimas propiedades, la que hace cambiar lo que nosotros queremos escribir esta en el 'event.target.value'. Eso es lo que debemos de cambiar con nosotros escribamos en el formulario, seria algo asi: 

    const onInputChange = ({ target }) => { //No hace falta poner el event ya que siempre esta, por eso desestructuramos el "target".
        setInputValue(target.value);
    }

<form>
    <input>
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange } 
    </input>
</form>


// El "input" va a estar dentro de un "form" pero cuando nosotros apretamos el 'enter' va a hacer un full refresh de la pagina, y nosotros queremos evitar que haga esto.

// Para hacer que no haga el refresh de la pagina podemos usar el evento del "form" de la siguiente manera: 

{/* <form onSubmit={ (event) => onSubmit(event) }> */}

// Y luego hacer una constante fuera del return de lo siguiente: 

    const onSubmit = ( event ) => {
        event.preventDefault(); //con esto no se refresca el navegador. 
    }