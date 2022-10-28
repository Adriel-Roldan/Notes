import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en FirstApp', () => { 

    test('FirstApp tiene que hacer match con el snapshot', () => { 
        
        const title = 'Hola, soy Adriel';

        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> );
        
        expect( getByTestId( 'test-title' ).innerHTML ).toBe( title );

     });
     
     test('Tiene que aceptar varios subtitulos', () => { 
        
        const title = 'Hola, soy Adriel';
        const subTitle = 'Cara de pingo';

        const { getAllByText, getByText } = render( 
        <FirstApp 
            title={ title }
            subTitle={ subTitle }
            /> );
        
        expect( getAllByText( subTitle ).length ).toBe( 3 );

     });
 });