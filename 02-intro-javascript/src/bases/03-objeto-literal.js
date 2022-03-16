const persona = {
    nombre: 'Albert',
    apellido: 'Chao',
    edad: 21,
    direccion: {
        calle: 'hola',
        numero: 5
    }
};

const persona2 = { ...persona };
persona2.nombre = "Eric";



console.log(persona);
console.log(persona2);