// Material para ver mas del tema: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


// Si nosotros tuvieramos una varible con un objeto:

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// Lo que hubieramos tenido que hacer para llamar a cada uno de estos datos del objeto es lo siguiente:

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Lo cual es bastante tedioso y por eso es que se utiliza la desestructuracion, que consiste en lo siguiente:

const { nombre, edad, clave} = persona; 

// Y ya podriamos llamar a los datos de la siguiente manera y nos daria el mismo resultado que con la forma anterior:

console.log(nombre);
console.log(edad);
console.log(clave);

// Tambien podemos utilizarla en funciones de la siguiente manera: 

const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {  // Podemos poner lo que necesitamos saber ahi adentro, y tambien asignar valores que no esten asignados, pero si llegaran a estar asignados entonces no lo reemplazariamos a lo que ya esta asignado en nuestro objeto. 

    console.log(nombre, edad, rango);

}

//Tambien algo muy usado en React es lo siguiente: 

const useContext = ({nombre, clave, edad, rango = 'Capitan'}) => {

    return {
        nombreClave: clave, 
        anios: edad,
        latlng: {
            lat: 12.431234,
            lng: -34.54223
        }
    }
};

const avenger = useContext(persona);
const {nombreClave, anios} = useContext(persona);


// En el caso de que quisieramos aplicar la desestructuracion anidada de objetos tendremos dos formas de hacerlo. 

// La primera que no es tan comun:

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(lat, lng);

// Y la segunda que es la mas comun pero tiene un paso extra

const {nombreClave, anios, latlng} = useContext(persona);
const {lat, lng} = latlng;

console.log(lat, lng);