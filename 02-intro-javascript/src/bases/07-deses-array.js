
const personajes = [ 'Albert', 'Eric', 'Ayno' ];

const [ , , p3 ] = personajes;
console.log(p3);

const retornaArray = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArray();

console.log(letras, numeros);

const usarState = ( valor ) => {
    return [ valor, ( newName ) => {
        console.log(newName);
    }]
}

const [ nombre, setNombre ] = usarState('Hey');
console.log( nombre );

console.log( nombre );
setNombre("Albert");