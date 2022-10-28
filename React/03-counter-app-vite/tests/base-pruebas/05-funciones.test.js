import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 

        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user2 = getUser();

        expect( user ).toEqual( user2 );

     });

     test('getUsuarioActivo debe de retornar un objeto', () => { 

        const name = 'Adriel';

        const user = getUsuarioActivo( name );

        expect( user ).toEqual( { uid: 'ABC567', username: name });

     });

 });