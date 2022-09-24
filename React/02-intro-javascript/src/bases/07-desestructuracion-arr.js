// Desestructuracion de arreglos

// Supongamos que tenemos el siguiente arreglo: 

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Lo que nosotros normalmente hariamos para llamar a cada elemento del array seria lo siguiente:

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[3]);

// Pero eso es demasiado tedioso, asi que existe otra manera mucho mas sensilla

// const [ , , p3] = personajes;  // Podemos dejar un espacio vacio para decir que no necesitamos saber lo que esta en la posicion anterior, aun que no es muy buena practica, lo que seria un buena practica es asignarle un valor a cada uno para despues llamar el que necesitemos 
// console.log(p3);

const [p1, p2, p3] = personajes; // Y asi podemos llamar al que necesitemos. 
// console.log(p1, p2);

const retornaArreglo = () => {
    return ['ABC', 123];
};

const[letras, numeros] = retornaArreglo();

// console.log(letras);

// Tarea

const useState = (valor) => {
    return [ valor, () => {console.log('Hola Mundo')} ];
}

const [nombre, funcion] = useState('Roly');

console.log(nombre);

funcion();
