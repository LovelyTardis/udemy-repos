const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

//const { nombre, edad, clave } = persona;

//console.log(nombre, edad, clave);

const usarContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2021,
            lng: -15.1454
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = usarContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);