//Las rutas para resolver cada verbo de http
//Modulo que resuelve las rutas de las API REST 
//ARQUITECTURA RESTFUL
//Recordar: la api rest trabaja con los verbos HTTP
// GET, POST, PUT, DELETE, PATCH ...
//Crearemos los endpoints para cada verbo

const express = require('express');
const cors = require('cors'); //Para evitar restricciones entre llamadas de sitios 
const ruta = express.Router(); //trae el metodo router de express para hacer los endpoint
const conex = require('./bdatos');

//Construimos la capa intermedia de la aplicacion MIDDLEWARE

ruta.use(express.json()); //Serializa la data en JSON
ruta.use(cors()); //Permite acceso de otras direcciones ip distintas a la de mi servicio
ruta.options('*',cors()); // configura las ip admitidas por cors , "*" significa que las acepta todas

//codificamos los verbos HTTP (crud tipico)

//Verbo GET = Listar

ruta.get('/api/users', (req,res)=> {
    conex.query("SELECT * FROM users", (error, respuesta)=>{
        if (error)
        {
            throw error;
        }
        else
        {
            res.send(respuesta);
        }
    });
});

//Verbo POST = INSERTAR 
ruta.post('/api/users', (req,res)=> {
    let data = {
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone
    }
    conex.query("INSERT INTO users set ?", data, (error, respuesta)=>{
        if (error)
        {
            console.log(error);
        }
        else
        {
            res.status(201).send(respuesta);
        }
    });
});


module.exports = ruta;