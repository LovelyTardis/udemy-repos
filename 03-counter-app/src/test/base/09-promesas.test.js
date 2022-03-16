import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
    test('Esto es el primer describe', ( done ) => {
        const id = 3;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe( heroes[id-1] );
            console.log(heroe, heroes[0]);
            done();
        });
    });
});
