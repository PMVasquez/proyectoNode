const models = require('../database/models/index')
const errors= require('../const/errors')

module.exports ={    
    listarInfo : async(req,res,next) =>{
        try {
            console.log("mostrando info del medico")    
            const medico = await models.medico.findOne({
                where: {
                    id: req.params.idMedico        
                },
                include:[{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }]
                }]
            })    
            
            if(!medico) return next(errors.medicoInexistente)
            
            res.json({
                message: "Soy medico: " + req.params.idMedico,
                data: {
                    medico: medico
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    listar : async(req,res,next) =>{
        try {
            console.log("mostrando medicos")         
            const medicos = await models.medico.findAll()

            if(!medicos) return next(errors.sinMedicos)   

            res.json({
                success:true,            
                message: "Listo todos los medicos",
                data:{
                    medicos: medicos
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    crear : async(req,res,next) =>{
        try {console.log("creando medicos")         
        const medico = await models.medico.create(req.body)
        
        if(!medico) return next(errors.errorCrearMedico)   

        res.json({
            success:true,            
            message: "creando medico",
            data:{
                id: medico.id
            }
        })
        } catch (error) {            
            console.log(error)            
            return next(error)
        }        
    }
}