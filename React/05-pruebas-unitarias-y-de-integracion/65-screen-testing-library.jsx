// Existe algo llamado "screen", esto lo podemos importar del 'React Testing Library' y esto nos ayuda a hacer muchas limpiezas automaticas despues de cada prueba.

// Este "screen" va dentro del "expect()" y lo que hace el "screen" es mostrar el objeto que estamos renderizando. Esto lo podemos comprobar utilizando "screen.debug()" debajo de lo que estemos renderizando. Esto hace que en consola nos muestre lo que estamos renderizando y lo que podemos buscar con el "screen". 

// Por ejemplo:

expect(screen.getByText(title)).toBeTruthy();

// Y para mostrar lo que estamos renderizando:

render( <FirstApp title={ title } />);
screen.debug();

// El screen esta actualizado con los cambios que se hagan en el momento.

// Para buscar un elemento por su rol debemos usar el "getByRole(...)"