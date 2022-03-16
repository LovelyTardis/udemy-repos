

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC1234',
    username: nombre
});

const user = getUsuarioActivo('Albert');
console.log(user);