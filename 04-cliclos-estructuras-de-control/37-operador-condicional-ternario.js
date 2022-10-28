// El operador ternario funciona de la siguiente manera: 

    // Supongamos que tenemos un horario de apertura, donde si es fin de semana entonces abrimos a las 9 pero si es dia de semana entonces abrimos a las 11, lo que hacemos es lo siguiente: 

        horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

        // Lo que estamos diciendo aca entre los parentesis usamos un metodo propio de JavaScript que retorna un true o un false si el dia incluye un 0 o un 6, despues del signo de pregunta lo que hace es decirnos que si lo cumple entonces que retorne un 9 y despues de los dos puntos ponemos lo que va a retornar si la condicion no se cumple. En resumen lo que esta despues del signo de pregunta es el IF y lo que esta despues de los dos puntos es el ELSE. 


// PRO TIPS: 

// Supongamos que tenemos que crear un programa de que de notas al estilo americano, para esto podemos poner varias condiciones con el ternario. Por ejemplo: 

    let nota = 80;
    let grado = nota >= 95 ? 'A+' :
                nota >= 90 ? 'A'  :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B'  :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C'  : 'F';

    console.log({ nota, grado });