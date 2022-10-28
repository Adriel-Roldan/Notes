import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en CounterApp', () => { 

    const initialValue = 0;

    test('CounterApp debe de hacer match con el snapshot', () => { 

        const { container } = render( <CounterApp value={ initialValue }/>);
        expect( container ).toMatchSnapshot();

     });

    test('Debe de mostrar el valor inicial de 100', () => { 
        
        render( <CounterApp value={ 100 } />);
        expect( screen.getByText( 100 ) ).toBeTruthy();

    
     });

    test('Debe de incrementar con el boton +1', () => { 

        render( <CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
        expect( screen.getByText( '1' ) ).toBeTruthy();

      });

    test('Debe de decrementar con el boton -1', () => { 

        render( <CounterApp value={ 10 } />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-res' }));
        expect( screen.getByText( '9' ) ).toBeTruthy();

      });

    test('Debe de reiniciar el valor con el boton reset', () => { 

        render( <CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-sum' }));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText( initialValue ) ).toBeTruthy();

      });

 });