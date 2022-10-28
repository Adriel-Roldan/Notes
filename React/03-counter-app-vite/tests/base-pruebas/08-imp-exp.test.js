import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';




describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar el heroe del id', () => { 
        
        const id = 1;

        const hero = getHeroeById( id );
        
        expect( hero ).toEqual( {id: 1, name: 'Batman', owner: 'DC'} ); 
    
     });

     test('getHeroeById no debe de retonar un heroe', () => { 
        
        const id = 10;

        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy(); 
    
     });

     test('getHeroesByOwner debe de retornar los heroes de DC', () => { 
        
        const saga = 'DC';

        const heroes = getHeroesByOwner( saga );
        
        expect( heroes.length ).toBe( 3 );

        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ] ); //Esto seria poco flexible y lo ideal seria hacerlo asi:

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === saga ) );
         
     });

     test('getHeroesByOwner debe de retornar los heroes de Marvel', () => { 
        
        const saga = 'Marvel';

        const heroes = getHeroesByOwner( saga );
        
        expect( heroes.length ).toBe( 2 );
         
     });

 });