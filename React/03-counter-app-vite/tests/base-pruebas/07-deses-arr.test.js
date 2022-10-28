import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Haciendo pruebas en 07-deses-arr', () => { 
    
    test('Debe de retornar un arreglo', () => { 
        
        const [letters, numbers] = retornaArreglo();

        expect( letters ).toEqual( expect.any(String) );
        expect( typeof numbers ).toBe( 'number' );

     });

 });