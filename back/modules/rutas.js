//Este es el modulo que resuelve las rutas de las API REST
//ARQUITECTURA RESTFUL
//Recordar: la api rest trabaja con los verbos HTTP
// GET, POST, PUT, DELETE, PATCH ...
//Crearemos los endpoints para cada verbo

// Paquetes requeridos 

const express = require('express');
const cors = require('cors'); //Para evitar restricciones entre llamadas de sitios 
const ruta = express.Router(); //trae el metodo router de express para hacer los endpoint
const url_permitida = "http://127.0.0.1:5500";

//middlewares requeridos
//middlewares: Logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones
//distribuidas
ruta.use(express.json()); //serializa la data en JSON 
ruta.use(cors(
    {
        origin: url_permitida
    }
))

const conex = require('./bdatos');

//construimos los endpoint
//Listar todos usamos el GET
ruta.get('/api/users', (req,res) => {
    conex.query("SELECT * FROM users", (error, response)=>{
        if (error)
        {
            throw error;
        }
        else
        {
            res.send(response);
        }
    });
})
// ...... 

module.exports = ruta;