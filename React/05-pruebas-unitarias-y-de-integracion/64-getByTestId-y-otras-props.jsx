// Cuando hagamos pruebas lo que hay que pensar es en hacerlas que funcionen correctamente y cumplan con lo que le estamos pidiendo pero que a la vez sean flexibles. 

// Tambien tenemos los data atributes que se los podemos agregar en el archivo que estamos renderizando en el test, dentro de la etiqueta que necesitemos probar:

    //Archivo del componente
    return (
        <>
            <h1 data-testid="..."></h1>
        </>
    );

// Entonces despues desde el mismo "render" podemos extraer el getByTestId, lo podemos usar de la sigueinte manera: 

expect( getByTextId( '...' ).innerHTML ).toContain( ... )

// Usamos el "toContain" para consultar si contiene lo que vayamos a poner dentro del "toContain", que a diferencia del "toBe" este no pregunta si es todo exactamente igual. 

// Tambien existe el "getAllByText" que a diferencia del "getByText" este puede hacer pruebas para varios elementos que esten dentro del componente, pero cuando usemos "getAllByText" nos va a retornar un arreglo de elementos HTML, por eso debemos usarlo con el "length" . Por ejemplo: 

        expect( getAllByText(...).length ).toBe(3)