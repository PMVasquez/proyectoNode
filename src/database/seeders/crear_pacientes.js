'use strict'
const models = require('../models/index')

module.exports ={
    up: function(queryInterface, Sequelize){
        return Promise.all([
            models.paciente.findOrCreate({
                where: {
                    id:"1"
                },
                defaults:{
                    nombre:"Pilar",
                    appellido:"Vasquez",	
                    email:"pv@gmail.com"
                }
            }),
            models.paciente.findOrCreate({
                where: {
                    id:"2"
                },
                defaults:{
                    nombre:"Diego",
                    appellido:"Lopez",	
                    email:"dl@gmail.com"
                }
            }),
        ])

    }
}