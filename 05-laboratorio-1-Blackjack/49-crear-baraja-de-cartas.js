// Para crear la baraja tenemos que ver las cartas que tenemos en la carpeta llamada "cartas", luego tenemos que crear un arreglo en donde van a ir las cartas, podrimamos colocar todas las cartas de una forma manual por asi decirlo, pero nosotros necesitamos hacerlo de una mejor manera, es por eso que vamos a utilizar una funcion donde inserte las cartas automaticamente. 

// Para esto vamos a tener que tener una variable para las cartas, una constante para el tipo de carta y una funcion, el cual la funcion va a tener un 'for' que dentro va a contener un 'for of', de esta manera vamos a tener todas las cartas dentro del array que creamos anteriormente.

// Y para agregar lar cartas especiales podemos hacer lo mismo, tenemos que crear otro arreglo con el tipo de cartas especiales y dentro de la funcion crear otro doble for, pero esta vez van a ser dos 'for of'.

// Y para regresar las cartas mezcladas vamos a utilizar una libreria llamada "underscore.js" que lo que hace esta libreria es instalar varias funciones que JavaScript deberia de traer por defecto pero no lo hace. 

// Una vez instalado el "underscore.js" vamos a utilizar una funcion propia de la libreria llamada shuffle, que lo que hace es regresar un arreglo con sus elementos mezclados, esta funcion la vamos a mandar a llamar en nuestra funcion. 