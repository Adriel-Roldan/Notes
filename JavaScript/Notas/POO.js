// En la Programcion Orientada a Objetos los conceptos basicos es que tiene una CLASE, OBJETO, ATRIBUTO, METODO, CONSTRUCTOR y la INSTANCIACION

// CLASE: Es como la receta o la plantilla, para que con esa plantilla podamos crear objetos.

// OBJETO: Los objetos son los resultados de las clases.

// ATRIBUTO: Son las propiedad o las caracteristicas que tiene nuestro objeto. 

// METODO: Son las cosas que puede hacer nuestro objeto. 

// CONSTRUCTOR: Es una particularidad que tienen las clases, que es una funcion obligatoria. Cuando creamos una clase tenemos que crear un constructor que nos va a construir las propiedades del objeto.

// INSTANCIACION: Es cuando ya podemos decir que la clase esta instanciada, estamos intanciando un objeto.   

// Creando un objeto:

class animal {
    constructor(especie, edad, color){ //Estos parametros se los vamos a dar nosotros
        this.especie = especie;
        this.edad = edad;
        this.color = color; //Aca lo que pongamos despues del this. puede ser lo que nosotros querramos y luego del = vamos a llamar al parametro. 
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    
}

let perro = new animal("perro", 5, "marron"); //El new lo que hace es decir que vamos a crear un objeto, que vamos a instanciar ese objeto 

console.log(perro); //Esto nos va a retornar lo siguiente: color:"rojo"    edad:5    especie:"perro"

// Para crear mas animales o objetos lo podemos hacer de la misma manera como hicimos con perro, por ejemplo: 

let loro = new animal("loro", 2, "verde y rojo");
let gato = new animal("gato", 6, "blanco"); 

// Si queremos llamar solo a un atributo podemos hacerlo utilizando el punto . por ejemplo:

console.log(gato.info); //Esto nos retorna "Soy un gato, tengo 6 años y soy de color blanco". 

// Para crear un METODO necesitamos crearla adentro de la clase. Los metodos son basicamente funciones, pero cuando estan dentro de la clase se les llama metodo, ya cuando estan fuera de la clase se les llaman funciones. 

class animal {
    constructor(especie, edad, color){ //Estos parametros se los vamos a dar nosotros
        this.especie = especie;
        this.edad = edad;
        this.color = color; //Aca lo que pongamos despues del this. puede ser lo que nosotros querramos y luego del = vamos a llamar al parametro. 
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
   verInfo(){
    console.log(this.info);
   }
}
// Entonces con ese metodo creado ya si queremos llamar al metodo lo hariamos de la siguiente manera: 

perro.verInfo(); 