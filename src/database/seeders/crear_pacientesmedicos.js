'use strict'
const models = require('../models/index')

module.exports ={
    up: function(queryInterface, Sequelize){
        return Promise.all([
            models.paciente_medico.findOrCreate({
                where: {
                    id:"1"
                },
                defaults:{
                    medicoId:"1",
                    pacienteId:"1"
                }
            }),
            models.paciente_medico.findOrCreate({                
                where: {
                    id:"2"
                },
                defaults:{
                    medicoId:"1",
                    pacienteId:"2"
                }
            }),
            models.paciente_medico.findOrCreate({                
                where: {
                    id:"3"
                },
                defaults:{
                    medicoId:"2",
                    pacienteId:"2"
                }
            }),
        ])

    }
}