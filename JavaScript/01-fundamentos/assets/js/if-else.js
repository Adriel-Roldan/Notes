const dia = 3;
const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

console.log( 'Hoy es ' + dias[dia] );

// O puedo tener el mismo resultado asi: 

    const dias2 = {
        0: 'domingo',
        1: 'lunes',
        2: 'martes',
        3: 'miercoles',
        4: 'jueves',
        5: 'viernes',
        6: 'sabado',
    }

console.log('Hoy es ' + dias2[dia]);