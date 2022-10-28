// Esto nos sirve para definir valores por defecto. Podemos hacerlo de varias maneras, por ejemplo: 

// Una de las maneras puede ser esta: 

    const FirstApp = ({ title, subTitle='Soy un valor por defecto' }) => {
        return (
            <>
                <h1>{ title }</h1>
                <h2>{ subTitle }</h2>
            </>
        );
    }

// Otra menera puede ser la siguiente: 

    FirstApp.defaultProps = {
        title: 'No hay titulo',
        subTitle: 'No hay subtitulo',
        name: 'Adriel Roldan'
    }
    //Esto se coloca por fuera del componente y al final al igual que los propTypes.

// Tambien lo que podemos hacer es agregar valores que aun no estan puestos en nuestra app, como en este caso lo es el valor de 'name'. 
