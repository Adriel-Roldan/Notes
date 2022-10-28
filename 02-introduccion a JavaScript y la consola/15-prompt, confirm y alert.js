// Estas son alertas o interacciones con el usuario, que hoy en dia no se utilizan bastante pero son importante para conocerlas. 

// Esta ejecucion es bloqueante quiere decir que bloquea todas las lineas de codigo hasta que el usuario de click en la alerta: 

    alert('Hola Mundo');

// Despues tenemos otro que es para que el usuario escriba algo y tambien podemos agregarle un valor por defecto: 

    let nombre = prompt('Como es tu nombre?', 'Valor por defecto');

    // El "prompt" es una funcion que retorna un string, tambien podemos utilizarla para almacenar esa informacion en una variable como en este caso.

// Tambien tenemos el ultimo que es un confirm, esto en el caso de que el usuario toque en "aceptar" va a devolver un TRUE y en caso de que toque cancelar va a devolver un FALSE. 

    confirm('Esta seguro de que quiere borrar esto?');