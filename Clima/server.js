var express=require('express')
var app=express()
const path=require('path')
const port=3000

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,res){
    res.send(`ruta de inicio: http://localhost:${port}`)
})

app.listen(port,function(){
    console.log(`Conexion exitosa en el puerto http://localhost:${port}`)
})



