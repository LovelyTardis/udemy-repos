

describe('pruebas de demo.test.js', () => {
    test( "deben ser strings iguales", () => {
        const mensaje = 'Hola Mundo';
    
        const mensaje2 = "Hola Mundo";
    
        expect(mensaje).toBe(mensaje2);
    });
});




