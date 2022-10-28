import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Pruebas en 09-promesas', () => { 

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 

        const heroId = 1;

        getHeroeByIdAsync( heroId )

            .then( heroId => {

                expect( heroId ).toEqual({id: 1, name: 'Batman', owner: 'DC'});

                done();
            });

        

    });

    test('getHeroeByIdAsync debe de retornar un error si heroe no existe', (done) => { 

        const heroId = 100;

        getHeroeByIdAsync( heroId )

            .catch( error => {

                expect( error ).toEqual( `No se pudo encontrar el héroe ${heroId}` );

                done();
            });

    });
    
 });