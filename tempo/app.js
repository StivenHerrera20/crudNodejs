//Puerta de entrada de la aplicacion (entry-point), usamos el principio SRP
//Single-Responsibility-Principle


//instanciamos los modulos requeridos 
const express = require('express');
const app = express(); //Creamos nuestra aplicacion llamando el metodo constructor de express 
app.use('/', require('./modules/rutas')); //redirigimos al modulo rutas donde se resolveran las rutas
app.listen('3300',()=>{
    console.log('Aplicacion ejecutandose en : http://localhost:3300');
})