import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('Debe retornar un héroe por id', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id );
        expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un héroe de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter( h => h.owner === owner );
        expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar un array con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroes.filter( h => h.owner === owner );
        expect(heroe.length).toBe(heroeData.length);
    });

});
