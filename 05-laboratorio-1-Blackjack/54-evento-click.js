// Para mandar a llamar un elemento el cual queremos que actue de cierta manera cuando le hagamos click tenemos que primero asignarle un ID a ese elemento y luego llamarlo en el JavaScript: 

    const btn = document.querySelector('#btn-pedir');

// Y ahora si yo necesito estar escuchando algun evento, entonces es la siguiente sintaxis: 

        btn.addEventListener('click', () => {

        }); 

        // Se hace atraves del metodo "addEventListener" el cual se le pasan dos argumentos, el primero es el evento que yo quiero estar escuchando y luego viene una funcion especial. 

            // Cuando se coloca una funcion como un argumento en otra funcion a esto se le llama "callback" y esta puede ser una funcion tradicional o puede ser una funcion de flecha. 
            
    // Despues dentro de esta funcion podemos mandar a llamar otras funciones externas, por ejemplo si queremos pedir una carta al hacer click en el boton, tendriamos que hacer lo siguiente: 

        btn.addEventListener('click', () => {

            const carta = pedirCarta();

        }); 


// Luego siguiendo lo del juego de las cartas, tenemos que sumar los puntos segun la carta que salga, para esto vamos a ir al principio del archivo y vamos a crear dos variables nuevas una para los puntos del jugador y otra para los puntos de la computadora. 

// Despues esta variable la mandamos a llamar en nuestra funcion del evento click, y le vamos a sumar el valor de la carta. 






