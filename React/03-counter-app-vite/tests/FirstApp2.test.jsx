import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en FirstApp', () => { 

    const title = 'Hola, soy Roly';
    const subTitle = 'Soy un subtitulo';

   test('FirstApp debe de hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar el mensaje "Hola, soy Roly"', () => { 

        render( <FirstApp title={ title } />);
        expect( screen.getByText( title ) ).toBeTruthy();

     });

    test('El titulo tiene que estar en un h1', () => { 
        
        render( <FirstApp title={ title } />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain( title );

      });

    test('Debe mostrar el subtitulo mandado por props', () => { 

        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle } 
            />
        );
        expect( screen.getAllByText( subTitle ).length ).toBe( 2 );

     });
    
 });