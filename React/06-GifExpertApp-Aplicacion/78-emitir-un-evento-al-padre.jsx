// Cuando un evento tenga adelante del nombre la palabra "on" quiere decir que ese evento esta emitiendo algo, no es obligatorio pero en las buenas practicas eso es lo normal.

// La mejor manera para hacer que se comuniquen un componente con otro no es como lo hicimos anteriormente, si no que podemos crear una propiedad dentro de nuestro componente el cual contenga la funcion que hace que se cumpla el evento que nosotros estamos necesitando, en este caso seria asi: 

    <AddCategory onNewCategory={ (value) => onAddCategory(value) }/> // En este caso como le pasamos por argumento el evento, podemos hacer lo mismo que anteriormente y borrar los argumentos y dejar solo el "onAddCategory", pero en este caso lo dejamos asi para poder entenderlo mejor. 

// Y en nuestra funcion "onAddCategory" tenemos que pasarle como argumento la funcion "onNewCategory" que ese argumento es el que va a contener lo que nosotros estamos escribiendo en el input. 

// Despues en el otro componente donde tenemos el 'input' vamos a tener que mandarle en las props la desestructurazion del "onNewCategory", luego colocar ese "onNewCategory" dentro de la funcion del "onSubmit" y pasarle el "inputValue".