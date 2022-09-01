// Lo que hace el WHILE a diferencia del IF es que el IF una vez que la condicion se cumple sigue con el codigo, pero el WHILE cuando la condicion se cumple lo que hace es volver a preguntar a la condicion si todavia se sigue cumpliendo y asi sucesivamente hasta que la condicion se deja de cumplir.

// Por ejemplo:

let number = 0;

while (number < 8){ // Lo que hace WHILE aca es agarrar number y preguntar si es menor a 8
    number++;       // Como es menor a 8 lo que hace es incrementarlo 
    
    console.log(number); // Para despues imprimirlo y luego volver a repetir el paso hasta que la condicion se deje de cumplir.
}


// Despues esta el DO WHILE que a diferencia del WHILE lo que hace es ejecutarse y por ultimo preguntar si la condicion se cumple

// POR EJEMPLO: 

do {                // Primero se ejecuta el DO
    number ++;
                         
    console.log(number);
}

while (numero < 8)  // Y luego consulta si se cumple la condicion  


// Uno de las cosas que es importante cuando utilizamos un WHILE es la sentencia BREAK que es la que corta todo el proceso.

// POR EJEMPLO:

while (number < 1000){ // Esto si estuviera sin el BREAK se ejecutaria hasta que number llegue al numero 1000 
    numero++;
    console.log(number);

    if (number == 10){ // Aca lo que estamos haciendo es agregar otra condicion la cual dice que cuando number sea igual a 10 se ejecute el if y con la  sentencia BREAK cortamos el proceso del WHILE y sigue con el programa
        break;
    }
}  // Esto se utiliza mucho, por ejemplo, si nosotros tenemos una base de datos y le decimos que busque la contraseña de tal usuario, entonces el programa empieza a buscar uno por uno hasta que la encontro y listo, corta el bucle. Con esto evitariamos que aun que la encontrara siguiera ejecutandose.




// El FOR se compone de tres partes: primero donde las DECLARAMOS, segundo donde las condicionamos dandole una CONDICION y tercero donde las ITERAMOS en este caso es un aumento + o un decremento - 

// POR EJEMPLO: 

for (let i = 0; i <= 6; i++){
    console.log(i); // Esto va a imprimir: 0 1 2 3 4 5 6 
}



// Existe una sentencia llamada CONTINUE que lo que hace es continuar, es como el BREAK solo que no corta el bucle, o sea que todo lo que venga despues del CONTINUE no lo va a ejecutar pero para a la siguiente condicion o continua el bucle 

// POR EJEMPLO

for (let i = 0; i <= 6; i++){
    
    if (i == 4) { // Aca lo que esta haciendo el IF es que si i es igual a 4 se saltee lo que sigue por debajo y vuelva a empezar
        continue;
    }

    console.log(i); // Entonces lo que imprime es: 0 1 2 3 5 6 
}



// Sentencia FOR IN y FOR OF, estas sentencias sirven para abreviar lo que hace el FOR por defecto. Lo que hace es dar las vueltas como haria el FOR, lo que estamos haciendo en el ejemplo de abajo es que que ANIMAL va a ser igual a cada uno de los valores que contiene la variable ANIMALES. 

let animales = ["gato", "perro", "loro"];

for (animal in animales){   // Lo que hace FOR IN es devolvernos la posicion de los valores de nuestro array. Porque lo que esta haciendo ANIMAL es entrar en los valores de la variable ANIMALES y retorna la posicion que ocupa cada valor. 

    console.log(animal);  // Esto nos imprimiria " 0 1 2 " en la terminal 
}

for (animal of animales){  // Lo que hace el FOR OF es devolvernos el valor de cada posicion dentro de nuestro array. 

    console.log(animal); // Esto nos imprimiria " gato perro loro " en la terminal
}