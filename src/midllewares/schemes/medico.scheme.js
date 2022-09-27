const Joi = require("Joi")  //importa joi para validar datos de entrada

let crearMedico= Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    especialidad: Joi.string().required(),
    email: Joi.string().optional(),
    celular: Joi.integer().optional

})

module.exports ={
    crearMedico
}

