// Funcion tradicional (no recomendado porque se puede pisar con otra variable en el codigo)

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
};

// Funcion tradicional (metodo recomendado es crear la funcion dentro de una variable)

const usuario = function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
};

// Funcion de flecha

const getUsuarioActivo = nombre => {
    return {
        uid: 'ABC5453',
        username: nombre
    }
};

// Funcion de flecha con objeto implicito

const getUsuarioActivo = nombre => ({
    uid: 'ABC5453',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Adriel');
