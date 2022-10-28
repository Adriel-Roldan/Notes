// Link a Jest que es un framework donde vamos a realizar las pruebas de nuestra aplicacion: https://jestjs.io/

// Tambien vamos a usar React Testing Library  que funciona en conjunto con Jest

// Pasos para instalar Jest: 

// 1: En la pagina entrar en "Get Started" y depende si estamos usando yarn o npm vamos a copiar el primer codigo que aparece en pantalla. 

// 2: Despues abrimos la terminal integrada y lo pegamos. 

// 3: Luego en el archivo "package.json" tenemos que copiar unas lineas de codigo que vamos a encontrar en la pagina de Jest, en GetStarted, el cual debe de tener de titulo "add the following section to your package.json:", esto lo pegamos dentro de donde dice "Script" en nuestro archivo de package.json. 

// 4: Despues en una nueva ventana de terminal nos metemos a la carpeta del proyecto y escribimos en ella "npm run test" o "yarn test" si estamos en yest. Esto va a tirar un error, para solucionar esto hacemos lo del paso 5.

// 5: Para esto tenemos que crear un nuevo directorio llamado "tests" dentro de la carpeta de nuestro proyecto fuera de la carpeta "src". 

// 6: Y dentro de esa carpeta "tests" crear un archivo llamado "demo.test.js". Pero si ejecutamos otra vez la terminal va a largar un error porque no hay ninguna prueba para evaluar.

// 7: Dentro del archivo que creamos escribimos lo siguiente: 

    test('Esta prueba no debe de fallar', () => {

    });



// Podemos mandar mensajes de error con el siguiente comando: 

    throw new Error('El mensaje que querramos');

// Si nosotros queremos estar escuchando cualquier cambio como hacemos cuando estamos creando una aplicacion en React que guardamos los cambios y se refresca todo tenemos que agregarle "--watchAll" a lo que agregamos en el paso 3. Quedaria de la siguiente manera: 

    "test": "jest --watchAll"

// Y una vez ejecutado otra vez en npm run test en la consola vamos a tener mas opciones para hacer nuestras pruebas. 

// Tambien en la consola vamos a instalar una dependencia que es para que en el editor de texto nos aparezcan los distintos metodos del "expect", asi que en la consola tenemos que escribir: npm add -D @types/jest

// Si nosotros queremos escribir codigo moderno en nuestras pruebas nos va a largar error, pero para esto tenemos que instalar lo siguiente: 

// 1) Tenemos que hacer la configuracion de Babel, para esto nos vamos a la documentacion de Jest, en GetStarted bajamos hasta donde esta el titulo de "Using Babel" y copiamos el codigo que aparece ahi en la terminal integrada. 

// 2) Luego tenemos que crear un archivo en nuestra carpeta del proyecto al cual le tenemos que poner "babel.config.js". (si da error probar crear el archivo con la extension .cjs)

// 3) En el archivo "babel.config.js" tenemos que escribir lo que nos da en la documentacion de Jest, en la parte de "Using Babel". 

