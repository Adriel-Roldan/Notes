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


//Las variables se defininen con CONST porque es algo que no va a cambiar en un futuro, se puede hacer con LET pero esto quizas podria ocasionar errores en un futuro. 

const perro = new animal("perro", 5, "marron"); //El new lo que hace es decir que vamos a crear un objeto, que vamos a instanciar ese objeto 

console.log(perro); //Esto nos va a retornar lo siguiente: color:"rojo"    edad:5    especie:"perro"

// Para crear mas animales o objetos lo podemos hacer de la misma manera como hicimos con perro, por ejemplo: 

const loro = new animal("loro", 2, "verde y rojo"); 
const gato = new animal("gato", 6, "blanco"); 

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




// Las caracteristicas de la Programacion Orientada a Objetos son: la ABSTRACCION, la MODULARIDAD, el ENCAPSULAMIENTO y el POLIMORFISMO. 

// Abstraccion: es basicamente tratar de resumir lo que es el objeto en si, por ejemplo si tenemos que un perro no nos ponemos a pensar en que el perro tiene un color de pelo, un color de ojos, 4 patas, que ladra y todo eso, si no que si resumimos todo eso a perro solamente, como tambien si dijieramos ladrar, no pensamos si ladra fuerte, ladra bajito, si ladra afonico, simplemente ladra y nada mas que eso, de eso trata la abstraccion, de resumir las cosas.

//Modularidad: es la capacidad de tener un problema grande y separarlo por partes para poder solucionarlo. 

//Encapsulamiento: trata de hacer que todos los datos esten privados, es como encerrarlos para que no se puedan acceder a ellos de manera tan sensilla. 

//Polimorfismo: trata en ver como un objeto se comporta de manera distinta ante el mismo metodo. Por ejemplo si yo tengo un animal y le digo que camine, un perro va a caminar de una forma y un gato de otra forma distinta. Basicamente es como un objeto se comporta distinto a un mismo metodo por sus propiedades. 



// Despues hay otros conceptos de Programacion Orientada a Objetos, que son: la HERENCIA, los METODOS ESTATICOS y los METODOS ACCESORES.

// Para trabajar con HERENCIA se usa la palabra reservada "extends".

// Para trabajar con METODOS ESTATICOS se usa la palabra reservada "static".

// Para trabajar con METODOS ACCESORES se usan las palabras reservadas "get" (getters) y "set" (setters).



// Si nosotros quisieramos agregarle a un objeto por ejemplo al objeto animal que le queremos agregar la propiedad de que ladre no se va a poder, porque no todos los animales ladran. Es por eso que tenemos la herencia, para poder crear una clase nueva llamado perro y que herede las propiedades de animal, y ahi si poder agregarle la propiedad de que ladra. Por ejeplo:

class perro extends animal {
    constructor(especie, edad, color, raza){ //Aca llamamos al constructor con las propiedades que queremos llamar de la clase animal,tambien podemos agregar nuevas propiedades.
        super(especie, edad, color); // Aca lo que hacemos es poner las propiedades que tenia la clase animal. 
        this.raza = raza; // Y aca si creamos la propiedad raza con un this.raza, ya que no esta como propiedad en la clase animal. 
    }
    ladrar(){     //Ahora si le podemos agregar la funcion de que ladre, una vez creado la clase perro que hereda las propiedades de animal.
        console.log("WAW!");
    }
}

const perroo = new perro("perro", 5, "marron", "pitbull");   // NO PUEDE HABER UNA VARIABLE QUE SE LLAME IGUAL QUE LA CLASE DEL OBJETO!!

perro.ladrar();



//Los metodos estaticos son metodos que no necesita que la clase se defina para poder ser creado. Por ejemplo:

class perro extends animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza; 
    }

    static ladrar(){  // Esto tranquilamente podria ser un metodo estatico, porque no estoy usando las propiedades y como no estoy usando las propiedades no hace falta crear al objeto. Porque el constructor lo que hace es contruir al objeto cuando le damos todo lo que nos pide en los parametros, entonces le pasamos los parametros, pero aca no estamos usando nada entonces tranquilamente podemos ejecutar esto antes de crear el objeto, antes de instanciarlo como tal y para eso es que usamos STATIC. 
        console.log("WAW!"); 
    }
}

perro.ladrar(); // Entonces si no existe la variable perroo (como la que tenemos creada en la linea 94) yo podria llamar a la clase perro (linea 102), entonces lo que sucederia entonces es que igual diria "WAW!", como lo que le pedimos que haga en la funcion ladrar.



// Despues tenemos los metodos GETTERS (get) que son para obtener un valor, y los SETTERS (set) son para modificarlos o definirlo 

// Ejemplo de SETTERS:

class perro extends animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null; //Supongamos que tenemos esta propiedad con un valor null y nosotros queremos modificarlo
    }
    set setRaza(newName){ //Lo que tenemos que hacer es esto para poder modificarlo correctamente. Se le agrega un parametro
        this.raza = newName; // Que luego ese parametro lo agregamos a la propiedad que queremos modificar
    }
    get getRaza(){
        return this.raza;
    }
    
}

perro.setRaza = "caniche"; // Para poder darle un valor a ese parametro tenemos que hacerlo de la siguiente manera porque raramente a los GETTERS y a los SETTERS nos los toma como propiedad y asi es como se deberia de llamar a un SETTER para que funcione correctamente. 

console.log(perro.getRaza);