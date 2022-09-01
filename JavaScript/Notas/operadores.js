// OPERADORES DE COMPARACION

let numero1 = 1;
let numero2 = 2;
let texto1 = "1";
let texto2 = "2";

// OPERADOR DE IGUALDAD
console.log(numero1 == numero2) // Retornaria un falso, porque no son iguales

// OPERADOR DE DESIGUALDAD 
console.log(numero1 != numero2) // Retornaria un true, porque son diferentes o desiguales

// OPERADOR COMPARACION ESTRICTA 
console.log(numero1 === texto1) // Retornaria un false, porque a pesar de que tienen el mismo numero son distintos datos. Para que retorne un true tanto el contenido como el dato debe ser el mismo.

// OPERADOR DESIGUALDAD ESTRICTA
console.log(numero1 !== texto1) // Retornaria un true, porque le pregunte si numero1 es distinto a texto1, y como ambos tienen el mismo valor pero distinto tipo de dato me retorna el true. 

// OPERADOR DE MAYOR 
console.log(numero2 > numero1) // Retorna un true, porque numero2 es mayor a numero1 

// OPERADOR DE MAYOR O IGUAL
console.log(numero2 >= numero1) // Retorna un true

// OPERADOR DE MENOR 
console.log(numero2 < numero1) // Retorna un false, porque numero2 no es menor a numero1 

// OPERADOR DE MENOR O IGUAL
console.log(numero2 <= numero1) // Retorna un false



// OPERADORES LOGICOS
// ESTOS OPERADORES RECIBEN DATOS DEL TIPO BOOLEAN

let valor1 = true;
let valor2 = true;


// OPERADOR AND (&&)
console.log(valor1 && valor2) // Si las dos condiciones se cumple va a retornar TRUE, pero en el caso de que una de las dos condiciones no se cumplar retorna un FALSE.

// OPERADOR OR (||)
console.log(valor1 || valor2) // Si algunas de las dos condiciones se cumple va a retornar un TRUE, al contrario del operador AND el operador OR solo necesita que una sola condicion se cumpla para retornar un TRUE.

// OPERADOR NOT (!)
console.log(!valor1) // Retorna que es FALSE a pesar de que valor1 sea true, lo que hace el operador NOT es cambiar el resultado del booleano, si un booleano era TRUE el NOT va a retornarlo como FALSE y en caso de que el booleano sea FALSE va a retornarlo como TRUE.
