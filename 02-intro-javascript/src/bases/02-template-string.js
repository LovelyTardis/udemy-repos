const nombre = "Albert";
const apellido = "Chao";

console.log(`${nombre} ${apellido}`);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Esto es un texto: ${getSaludo( nombre )}`)