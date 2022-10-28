import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () =>{

    test('getSaludo debe retornar "Hola Adriel"', () => { 
        
        const name = 'Adriel';

        const result = getSaludo( name );

        expect( result ).toBe( `Hola ${ name }` );

     });


});