const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 42352354,
        lat: 32.23423,
        lng: 23.656565,
    }
};

// Ahora si yo quiero agregar a otra persona lo correcto seria hacer esto:

const persona2 = {...persona}; // Aca lo que hariamos seria que creariamos una copia del objeto persona, ya que esto deberiamos hacer para poder crear optra persona y asi poder cambiarle los valores.
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';

console.log(persona);
console.log(persona2);

// Y de esta manera podemos cambiar valores de un objeto sin pisar el objeto ya creado anteriormente sin tener que escribir todo nuevamente. 

