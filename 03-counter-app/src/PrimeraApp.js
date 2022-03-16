import PropTypes from 'prop-types';



const PrimeraApp = ({ saludo, subtitulo }) => {


    return (
        <>
            <h1>{saludo}!!!</h1>
            <p id='texto'>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;