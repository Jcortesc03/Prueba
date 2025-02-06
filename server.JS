const express = require('express');
const app=express();
const path = require('path');
const port=3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send(`ruta de inicio http://localhost:${port}`)
})
app.listen(port,function(){
    console.log(`Conectado exitosamente http://localhost:${port}`)
})