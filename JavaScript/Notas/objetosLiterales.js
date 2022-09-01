// ESTRUCTURA DE UN OBJETO LITERAL

 let objeto = {       // Los objetos siempre van a tener sus propiedades dentro de las llaves {}. 
      propiedad : valor,
      propiedad : valor,
      propiedad : valor, 
      propiedad : valor
}

 
// EJEMPLO

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],   //Al tener que ingresar mas de un dato, utilizamos un array. 
    horario : "de 19 a 21hs."
}

//console.log(curso.cantidadDeAlumnos);  //Cuando se llame a la variable del objeto, para ver alguna propiedad del objeto hay que usar una "doc notacion" que va a ser el punto .


// Nuestro objeto aparte de propiedades, puede realizar acciones y para esto tenemos que definir metodos dentro de nuestro objeto 

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21hs.",
    notificaciones : function(){
        return "El horario de cursada es de 19 a 21 hs.";  // Esto en el console.log va a retornar lo mismo que dice la propiedad "horario"
        return "El horario de cursada es" + curso.horario;  // Con esto el console.log va a retornar lo mismo que con el return anterior pero usando la propiedad de "horario"
        return "El horario de cursada es" + this.horario;  // Una buena practica es llamar al objeto que por el momento vamos a estar instanciando con la palabra "this" en lugar de poner el nombre del objeto que queremos llamar
    }
}

// SE PUEDEN CREAR UN OBJETO DENTRO DE OTRO, DE ESTA MANERA 

let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    aula : {
        metrosDeAncho : 15,
        metrosDeLargo : 20,
        capacidadAlumnos : 40
    }
}