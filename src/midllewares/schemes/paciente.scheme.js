const Joi = require("Joi")  //importa joi para validar datos de entrada

let crearPaciente= Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().optional()
})

module.exports ={
    crearPaciente
}

