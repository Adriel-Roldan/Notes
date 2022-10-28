// Si nosotros queremos evaluar un objeto en el test, no podemos usar "toBe", tenemos que usar "toEqual" o su forma estricta que es "toStrictEqual". 

// Ya que en JavaScript cuando un objeto a pesar de ser exactamente igual a otro objeto, estos objetos estan ocupando distontos espacios en memoria, entonces eso los diferencia. Ya que los objetos se comparan en base a su ubicacion en memoria