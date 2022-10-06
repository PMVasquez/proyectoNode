const Joi = require("Joi")  //importa joi para validar datos de entrada

let crearUsuario= Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),    
    email: Joi.string().optional(),
    password: Joi.string().required()
})

module.exports ={
    crearUsuario
}

