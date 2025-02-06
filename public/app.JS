
let tiempo=0; let continua=true

function ejecutarPromesa(){
let promesa=new Promise((resolve, reject)=>{
    if(continua){
        setTimeout(()=>{
            tiempo++
            document.getElementById("Tiempo").textContent=tiempo
            resolve();
        },1000)
    }
    else{
        reject()
    }

})

promesa
    .then(()=>{
        if(continua){
             ejecutarPromesa()
            }
        })
    .catch(()=>{document.getElementById("Tiempo").textContent=tiempo;})

}
function cambio(){
    continua=!continua
    if(!continua){
        tiempo=0
        document.getElementById("Tiempo").textContent=tiempo;
    }
}

