const models = require('../database/models/index')
const errors= require('../const/errors')

module.exports ={    
    listarInfo : async(req,res,next) =>{
        try {
            console.log("mostrando info del paciente")    
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente        
                }
            })                     
            
            if(!paciente) return next(errors.pacienteInexistente)

            res.json({
                message: "Soy paciente: " + req.params.idPaciente,
                data: {
                    paciente: paciente
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    listar : async(req,res,next) =>{
        try {
            console.log("mostrando pacientes")         
            const pacientes = await models.paciente.findAll()

            if(!pacientes) return next(errors.sinPacientes)

            res.json({
                success:true,            
                message: "Listo todos los pacientes",
                data:{
                    pacientes: pacientes
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    crear : async(req,res,next) =>{
        try {console.log("creando pacientes")         
        const paciente = await models.paciente.create(req.body)

        if(!paciente) return next(errors.errorCrearPaciente)

        res.json({
            success:true,            
            message: "creando paciente",
            data:{
                id: paciente.id
            }
        })
        } catch (error) {
            console.log(error)            
            return next(error)
        }        
    }
}