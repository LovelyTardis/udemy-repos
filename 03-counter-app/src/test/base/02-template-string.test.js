import getSaludo from '../../base/02-template-string';
import '@testing-library/jest-dom';

describe('Pruebas 02-template-string', () => {
    test('Debe de enseñar Hola Albert', () => {
        const nombre = "Albert";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });
    test('Debe de enseñar Hola Carlos', () => {
        const saludo = getSaludo() + '!';
        expect(saludo).toBe('Hola Carlos!');
    });
});