// Si nosotros en el expect queremos poner que el resultado esperado tienen que ser algun tipo de dato en especifico, podemos usar la propiedad de JavaScript "typeof", que lo que hace es decirnos que tipo de dato es lo que evaluamos, por ejemplo: 

const numeros = 123412;

typeof numeros; // Esto nos va a decir que 'numeros' es del tipo "number". 

// Esto lo podemos aplicar en el expect de la siguiente manera: 

expect( typeof numeros ).toBe('number'); 

// Si no podemos comparar con las herramientas que nos brinda Jest, que seria de la siguiente manera: 

expect( numeros ).toEqual( expect.any(Number) ); // lo hacemos con el "toEqual" porque con el "toBe" nos largaria error. 

// Lo que dice ahi en pocas palabras es que espera cualquier tipo de 'number'. 