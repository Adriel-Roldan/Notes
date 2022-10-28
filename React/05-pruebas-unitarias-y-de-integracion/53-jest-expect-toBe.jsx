// Jest nos proporciona herramientas para que nuestras pruebas sean faciles de leer, lo que nosotros siempre vamos a tener son los tres pasos: Inicializacion, Estimulo y Observacion de lo esperado. 

test('Esta prueba no debe de fallar', () => {

    // 1: Inicializacion aca vamos a poner algo como una variable

        const message1 = 'Hola Mundo';

    // 2: Estimulo

        const message2 = message1.trim();    

    // 3: Observar el comportamiento esperado

        expect( message1 ).toBe( message2 );

    // Aca estamos diciendo con el "expect" que esperamos que "message1" y con el "toBe" decimos que sea igual a "message2".

    // En la documentacion de Jest tenemos muchas mas condiciones o "expect" para usar o para investigar: https://jestjs.io/docs/expect 

    
});
// Tambien podemos meter el "test" dentro de un "describe" para que en la consola de pruebas aparezca con un titulo y tengamos mas referencia de lo que estamos probando, seria asi: 

    describe('Pruebas en <AcaVaElNombreDelArchivo />', () => { 
                
                test('Nombre de la prueba', () => { 
                    
                })

    });

// El "toBe" tambien se encarga de comparar el tipo de datos 