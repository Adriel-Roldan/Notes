// Como yo tengo instalada la dependencia de 'React Testing Library' puedo llamar a una funcion llamada "render()", que es una funcion que renderiza el componente en memoria. El "render" retorna un objeto, una de ellas es el "container", el container se parece mucho a un nodo de HTML, el cual podemos utilizarlo para muchas cosas, una de ellas es tomarle una fotografia (snapshot). 

// El "snapshot" es una fotografia del componente y se almacena en una carpeta creada automaticamente al hacer lo siguiente: 

    test('nombre de la prueba', () => { 

        const { container } = render( <Componente /> )
        expect( container ).toMatchSnapshot();

     }); 

// Y eso crea en nuestro directorio una carpeta llamada "__snapshot__" que dentro contiene un archivo de snapshot con la fotografia de lo que contiene nuestro componente. 

// Esto sirve para que si en un futuro alguien modifica algo de mi componente el snapshot va a largar un error y va a mostrar que es lo que esta diferente en nuestro componente en comparacion a al snapshot. 

// Si un componente recibe muchos cambios quizas no conviene tanto hacer este tipo de pruebas. 

// La funcion "render()" tiene muchas otras funciones dentro, una de las que vamos a usar es el "getByText", es decir que obtenga algun nodo por algun texto. 

// Aparte del "toBe", el "toEqual", existe el "toBeTruthy" que pregunta si lo que estamos esperando existe. Tambien existe el "toContain" que pregunta si lo que ponemos dentro del "toContain" contiene lo que esta dentro del "expect". 