import react from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo='Hola, buenas' />, divRoot);

ReactDOM.render(<CounterApp value={10} />, divRoot);