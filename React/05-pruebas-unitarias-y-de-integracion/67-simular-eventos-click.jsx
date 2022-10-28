// Cuando nosotros queremos hacer pruebas a un evento 'React Testing Library' nos ofrece el "fireEvent" que lo tenemos que importar del 'React Testing Library'. 

// Podemos asignarle como un ID a nuestro elemento en el componente con el " aria-label="..." ", entonces luego en nuestras pruebas podemos llamar al elemento por el rol y el name que le asignamos en el "aria-label". Asi veria en nuestro test:

    getByRole('rol-del-elemento', {name: 'nombre-asignado'});

