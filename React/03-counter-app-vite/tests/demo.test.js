 
    describe('Pruebas en <TestComponent />', () => { 
        
        test('Esta prueba no tiene que fallar', () => { 

            const message1 = 'Hola Mundo';

            const message2 = message1.trim();

            expect( message1 ).toBe( message2 );

         });

     });