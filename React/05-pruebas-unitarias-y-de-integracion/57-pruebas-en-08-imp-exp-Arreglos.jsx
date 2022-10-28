// Nosotros podemos tener la cantidad de "expect" que querramos segun la cantidad de condiciones que necesitemos, pero cuando llegue a un "expect" con el que no cumpla la condicion y ahi va a retonar el error. 

// Si nosotros queremos hacer una condicion donde no exista lo que nosotros esperamos, entonces podemos usar el "toBeFalsy", pero hay que tener cuidado porque si en el "expect" ponemos un 'false' entonces va a funcionar de todos modos. Por ejemplo: 

expect( estoNoExiste ).toBeFalsy(); // En el caso de no existir lo que esta en el "expect" va a pasar la prueba. 