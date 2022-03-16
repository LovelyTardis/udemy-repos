import {getHeroeById} from './bases/08-imp-exp';


// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000 );

// });
// promesa.then( (heroe) => {
//     console.log(heroe);
// }).catch(err => console.warn('No se ha encontrado')
// );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById( id );
            // resolve(heroe);
            if (heroe) {
                resolve(heroe);
            }
            else {
                reject('No se encuentra el héroe con esa id');
            }
        }, 2000 );
    });
}

getHeroeByIdAsync(2)
.then( console.log )
.catch( console.warn ); //se puede usar el warn sin tener que mandarle nada