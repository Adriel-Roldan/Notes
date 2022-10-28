// Las "props" son un objeto y podemos verla dentro de la parte de componentes en el navegador, tambien podemos agregar props que sean por defecto en el archivo del main.  

// Es raro ver las props de esta manera:

const FirstApp = (props.title) => {

    return (
        <>
            <h1>{ props.title }</h1>
        </>
    );

}

// Por lo general se destructuran de la siguiente manera: 

const FirstApp = ({ title }) => {

    return (
        <>
            <h1>{ title }</h1>
        </>
    );

}

// Y para agregar props por defecto podemos hacerlo desde el archivo del main: 

ReactDOM.createRoot( document.getElementById('root') ).render(

    <React.StrictMode>
        <FirstApp title="Hola Mundo!" subTitle="123"/>
    </React.StrictMode>

);
// En este caso el "subTitle" no va a ser un tipo numero si no que va a ser de tipo string, pero si queremos que sea de tipo numero entonces deberiamos hacerlo de la siguiente manera: 

        <React.StrictMode>
            <FirstApp title="Hola Mundo!" subTitle={ 123 }/>
        </React.StrictMode>

// Y en el otro archivo deberiamos escribir lo siguiente: 

const FirstApp = ({ title, subTitle }) => {

    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subTitle }</h2>
        </>
    );

}