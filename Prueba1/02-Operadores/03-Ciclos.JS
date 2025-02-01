// while.for y do while de toda la vida
let luchadores=['HBK','HHH','Jeff Hardy']
for(let luchador of luchadores){//for of se usa para recorrer todos los elementos de una lista
    console.log(luchador);
}
let user={
    id:1,
    name:"Juan",
    age:25,
}
for(let prop in user){
    console.log(prop);
}
for(let prop in user){
    console.log(user.id);
}
for(let prop in user){
    console.log(prop.name); 
}

for(let prop in user){
    console.log(prop, user[prop]);//para ver el indice de cada objeto
}

