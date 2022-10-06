require('dotenv').config()   // importar dotenv para obtener las variables de entorno 

module.exports ={
    constante1:"Te saludo",
    constante2:"valor2",
    PORT: process.env.PORT,
    DB_NOMBRE: process.env.DB_NOMBRE,
    DB_USUARIO: process.env.DB_USUARIO,
    DB_PASSWORD: process.env.DB_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET
}