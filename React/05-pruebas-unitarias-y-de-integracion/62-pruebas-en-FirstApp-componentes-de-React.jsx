// Como yo tengo instalada la dependencia de 'React Testing Library' puedo llamar a una funcion llamada "render()", que es una funcion que renderiza el componente en memoria


// Crear en nuestro archivo del proyecto un archivo llamado "jest.config.js", que dentro tendra lo siguiente: 

    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }

// Y en la consola instalar lo siguiente: ' npm add -D jest-environment-jsdom '. 

// Tambien hay que tener otro archivo llamado "jest.setup.js", que dentro tendra lo siguiente: 

    import 'whatwg-fetch';

// Instalar en la consola " npm add -D whatwg-fetch "

// Dentro del archivo "babel.config.js" hay que tener lo siguiente: 

    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: { esmodules: true } } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    }

// Luego en la terminal instalar " npm add -D @babel/preset-react "