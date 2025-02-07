const apiKey="863d0e53e6851610b3281b360c258be5"
const ciudad="London"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`

function obtenerClima(){
    fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error('Erros al obtener informacion del clima')
        }
    return response.json();
    })
    .then(data=>{
        console.log(data)
        const temperatura=data.main.temp;
        const descripcion=data.weather[0].description;
        const ciudad=data.name;
        const pais=data.syscountry;

        document.getElementById('clima').innerHTML=`El clima en ${ciudad}, ${pais}: <br> ${temperatura}°C, ${descripcion}`;
    })
    .catch(error => {
        console.error('Hubo un error '+error)
    });
    
}

obtenerClima();
