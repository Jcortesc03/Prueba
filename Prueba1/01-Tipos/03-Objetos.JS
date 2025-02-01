let personaje ={
    nombre:"Shawn Michaels",
    eslogan:"HBK",
    cancion:"Sexy boy",
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['eslogan']);

delete  personaje.cancion;
console.log(personaje);
