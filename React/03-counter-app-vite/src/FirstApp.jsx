import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
        <h1 data-testid="test-title">{ title }</h1>

        <h2>Soy Adriel Roldan</h2>

        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo', 
    name: 'Adriel Roldan'
}

 