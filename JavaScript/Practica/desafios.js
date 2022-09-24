const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  
  function contarOvejas(ovejas) {
    for(let i = 0; i > ovejas.length; i++){
      
      if(ovejas[i].color === 'rojo' && ovejas[i].name.incluides('a', 'A') === true && ovejas[i].name.incluides('n', 'N') === true){
        console.log(ovejas[i]);
      }
    }
    return ovejas;
  }

  console.log(contarOvejas(ovejas));



