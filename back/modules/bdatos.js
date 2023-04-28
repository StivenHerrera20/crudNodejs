//Este modulo es el que se encarga de conectarse a la BD

const mysql = require('mysql'); //Instanciamos el modulo MYSQL

//Creamos la conexion
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

//Nos conectamos a la BD
conexion.connect((error)=>{
    if(error)
    {
        //el throw apaga todos los servicios y envia un mensaje por consola 
        //(no recomendable para produccion)
        throw 'Existe un error en la cadena de conexion'
    } 
    else
    {
        console.log('Conexion Exitosa');
    }
});
//Exporta este modulo para usarlo en otros modulos principio SRP
module.exports = conexion;