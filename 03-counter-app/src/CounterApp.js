import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState(value);



    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( c => c + 1 );
    }
    const handleSubstract = () => {
        // setCounter( counter - 1 );
        setCounter( c => c - 1 );
    }
    const handleReset = () => {
        // setCounter( 0 );
        setCounter( c => value );
    }

    return (
    <div>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleAdd }>+1</button>
    </div>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
