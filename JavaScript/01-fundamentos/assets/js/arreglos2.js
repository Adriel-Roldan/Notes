let arreglo2 = ['Adriel', 'Emilio', 'Roldan', 'Chitadino'];

arreglo2.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

    let nuevaLongitud = arreglo2.push( 'Roly' );

    console.log({ nuevaLongitud });