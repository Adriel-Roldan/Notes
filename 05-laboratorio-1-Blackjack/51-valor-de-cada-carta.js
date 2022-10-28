// Para agregarle el valor a cada carta lo que vamos a empezar haciendo es crear una funcion que reciba por argumento la carta. 

// Una vez tengamos nuestra funcion vamos a crear una constante para el valor que sea igual a la carta y aca vamos a utilizar el metodo " .substring() " el cual lo que hace es que recortar el string y nos retorna el string en la posicion que le estamos pidiendo. 

// Esto lo vamos a utilizar porque si pasamos que queremos la carta y para obtener el numero vamos a necesitar colocar que queremos la carta y lo que tenga en la posicion '0' lo cual va a dar error cuando querramos pedir un '10', ya que nos va a retornar un '1'.

// Entonces con el substring() vamos a poder decirle que queremos desde la posicion '0' a la posicion 'carta.length - 1' y de esa manera nos va a retornar el numero correcto. 

// Cuando ya tenemos el valor de la carta hecho vamos a tener que crear una condicion con un 'if' el cual vamos a preguntar si no es un numero con "isNaN()" que lo que va a retornar es un 'true' en caso de que NO sea un numero y un 'false' en caso de que SI lo sea. 

// Despues tenemos que crear una variable para los puntos, lo cual se tiene que sumar con el valor de la carta. Pero el problema es que el valor de la carta es un string, entonces para convertir un string a number lo que podemos hacer es multiplicar el valor por 1, y ya seria un numero y lo podriamos sumar sin problemas. 

// Y para pasar las cartas con letras como lo son la "K, Q, J, A" vamos a utilizar otra condicion, pero en este caso podriamos utilizar un condicional ternario. 

// Entonces al final vamos a tener una funcion donde tengamos dos variables una para el valor y otra para los puntos, despues vamos a tener un if donde pregunte si lo que le mandamos no es un numero y en caso de que sea un numero se va al else donde va a cambiar de string a number, despues en el if vamos a tener los que no sean numeros y van a cambiar tipo number con un condicional ternario donde vamos a asignarles el valor segun la letra de la carta y al final vamos a retornar el valor.  