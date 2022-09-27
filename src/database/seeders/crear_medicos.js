'use strict'
const models = require('../models/index')

module.exports ={
    up: function(queryInterface, Sequelize){
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id:"1"
                },
                defaults:{
                    nombre:"Julia",
                    appellido:"Rosas",	
                    email:"lr@gmail.com",
                    celular: "0221455555",
                    especialidad: "clinica médica"
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id:"2"
                },
                defaults:{
                    nombre:"Hernan",
                    appellido:"Pensado",	
                    email:"hp@gmail.com",
                    celular: "0221455555",
                    especialidad: "Traumatología"
                }
            }),
        ])

    }
}