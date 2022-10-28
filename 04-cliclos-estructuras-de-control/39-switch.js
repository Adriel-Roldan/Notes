// Cuando nosotros tenemos valores especificos como 0, 1, 2... o valores exactos como strings y nosotros podemos utilizar el triple igual ( === ) pra igualarlo a algo, entonces podriamos utilizar un SWITCH. 

// Suponiendo que queremos imprimir el dia en el que estamos, entonces hariamos lo siguiente: 

    const dia = 0;

    switch( dia ) {
        case 0: 
            console.log('Domingo');
            break;
        case 1: 
            console.log('Lunes');
            break;
        case 2: 
            console.log('Martes');
            break;
        default: 
            console.log('No es domingo, lunes o martes');
    }

    // Lo que hace la palabra "case" es crear algo que tiene que hacer en caso de que el "case" sea igual a la condicion. 

    // Lo que hace la palabra "break" es decirle que ya queremos que salga del 'switch' en caso contrario de que no tenga la palabra "break" se van a seguir ejecutando lo siguientes casos. 

    // Lo que hace la palabra "default" es crear una accion en caso de que ninguna condicion se cumpla. 

    

