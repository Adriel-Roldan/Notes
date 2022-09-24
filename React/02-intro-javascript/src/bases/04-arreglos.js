const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5]; // Aca podemos crear un nuevo array utilizando el array anterior, donde clonamos el array anterior y le agregamos otro valor, seria lo mismo que usar un .push

const arreglo3 = arreglo2.map(function(num){
    return num * 2;
}); // esto es conocido como callback, es una funcion que se va a ejecutar dentro de el metodo .map y es una funcion que se va a ejecutar por cada uno de los elementos que se encuentran en el arreglo2.


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


// Mas contenido para ver sobre el metodo .map en el siguiente link: 

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map