 let cont = 0;
function noParesDeContarImparesHasta (numero){
       for (let x = 1; x <= numero; x++ ){
            if (x % 2 != 0){
             cont = cont + 1;
            }
        }
        return cont;
    }
    console.log(noParesDeContarImparesHasta(4))


      function tablaDeMultiplicar(numero) {
        let multiplo = 1;
        while(numero * multiplo <= 10){
                console.log(tablaDeMultiplicar(5));
            multiplo++
        };

    }
    