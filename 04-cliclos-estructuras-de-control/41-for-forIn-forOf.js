// FOR: 

    // Este es el "for" tradicional el cual es muy util si queremos recorrer un arreglo y para hacerlo tiene 3 partes " for( inicializacion; condicion; incremento  ) " y teniendo un arreglo podriamos recorrerlo de la siguiente manera: 

        let heroes = ['Iron Man', 'Capitan America', 'Hulk', 'Thor', 'Spider Man'];

      for( let i = 0; i < heroes.length; i++ ){
            console.log( heroes[i] );
      }

// FOR IN:

      // Este for es una version mas simple para recorrer un arreglo, ya que el 'in' se va a encargar de recorrer todo el arreglo hasta que no hayan mas objetos para recorrer:

      for( let i in heroes ) {
            console.log( heroes[i] );
      }


// FOR OF: 

      // Este for es bastante utilizado para obtener referencias a valores de objetos o arreglos de una manera mas sensilla basicamente lo que hace el "for of" es extraer el valor que se encuentra dentro del arreglo y lo regresa a la variable que estamos inicializando dentro del 'for' y cada iteracion vamos a obtener cada una de las posiciones de mi arreglo o de mi objeto. 

        for( let heroe of heroes ) {
            console.log( heroe );
        }

        // En el " for of " no se utiliza la variable 'i' si no que se acostumbra a colocar el modo singular del arreglo.