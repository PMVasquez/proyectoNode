const models = require('../database/models/index')
const errors= require('../const/errors')

module.exports ={    
    listarInfo : async(req,res,next) =>{
        try {
            console.log("mostrando info del usuario")    
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario        
                },
                /*include:[{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }]
                }]*/
            })    
            
            if(!usuario) return next(errors.usuarioInexistente)
            
            res.json({
                message: "Soy usuario: " + req.params.idUsuario,
                data: {
                    usu: usuario
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    listar : async(req,res,next) =>{
        try {
            console.log("mostrando usuarios")         
            const usuarios = await models.usuario.findAll()

            if(usuarios==[]) return next(errors.sinMedicos)   

            res.json({
                success:true,            
                message: "Listo todos los usuarios",
                data:{
                    misUsuarios: usuarios
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },
    crear : async(req,res,next) =>{
        try {console.log("creando usuario")         
        const usuario = await models.usuario.create(req.body)
        
        if(!usuario) return next(errors.errorCrearUsuario)   

        usuario.password = usuario.cryptPassword(usuario.password)  //encripto passw
        await usuario.save()  //guardo usuario

        res.json({
            success:true,            
            message: "creando usuario",
            data:{
                idUsu: usuario.id
            }
        })
        } catch (error) {            
            console.log(error)            
            return next(error)
        }        
    }
}