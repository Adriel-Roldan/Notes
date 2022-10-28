// Cuando nosotros queremos hacer el test en una prueba asincronica debemos utilizar un funcion llamada "done", lo que le dice a Jest es que se espere a que terminemos de ejecutar mi codigo, pero si nosotros nunca llamamos al "done" entonces Jest se queda esperando unos 10 segundos a recibir alguna respuesta antes de largar error. Seria mas o menos de la siguiente manera: 

        test('el titulo del test', (done) => { 
            
            const inicializacion = '';

            funcionAsync( parametro )
                .then( hero => {


                    done(); 
                });
            
         });

// Algo asi es la sintaxis para utilizar el done(). 

// En pocas palabras con el "done" le estamos diciendo a Jest que se espere a que esta funcion termina para seguir ejecutando el codigo.