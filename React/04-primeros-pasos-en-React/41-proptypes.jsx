// Si nosotros queremos que el titulo sea algo que si o si se tenga que poner o lo que sea que nosotros querramos que se utilice si o si en nuestro codigo entonces vamos a configurar un propTypes. Asi que debemos importarlo de la siguiente manera: 

import PropTypes from 'prop-types'; //Esto es algo que no viene instalado por defecto si usamos Vite.

// Asi que para instalarlo hay que abrir la consola y escribir "npm install prop-types"

// Las PropTypes sirven para definir el tipo a las props. 

// Para definir una PropTypes hay que definirlo con el nombre del componente que queremos asignarselo y hacerlo por fuera del componente: de la siguiente manera: 

const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subTitle }</h2>
        </>
    );
}
// Aca definimos la propTypes: 

FirstApp.propTypes = {
    title: PropTypes.string,
}
// Aca estamos diciendo que el 'title' debe ser de tipo string, tambien podemos asignarle que sea de tipo number, boolean y muchas otras opciones que tenemos disponibles. Si el 'title' no llega a ser del dato que le estamos pidiendo entonces nos va a tirar un error la consola. 

// Tambien podemos decirle que 'title' sea obligatorio de la siguiente manera: 

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.number
}
// Esto larga un error en la consola si el title no tiene nada.




