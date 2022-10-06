const models = require('../database/models/index')
const errors= require('../const/errors')
const signJWT = require('../midllewares/signJWT')
const bcrypt = require('bcryptjs') // para encriptar la contraseña

module.exports ={    
    login : async(req,res,next) =>{
        try {
            console.log("logeando usuario:" + req.body.email)    
            const usuario = await models.usuario.findOne({
                where: {
                    email: req.body.email                    
                },                
            })    
            console.log("usuario:" + usuario.password)
            var passwCorrecta = false
            if(usuario){
                passwCorrecta= bcrypt.compareSync(req.body.password,usuario.password)
            }    

            if(!usuario || !passwCorrecta) return next(errors.errorLogueoInvalido)
            
            res.json({
                message: "Ingresó usuario: " + req.body.email,
                data: {
                    token: signJWT(usuario),                    
                    usu: usuario
                }
            })
        } catch (error) {
            console.log(error)
            return next(error)
        }
    },    
    registrarse : async(req,res,next) =>{
        try {
            console.log("registrando usuario")         
        
            req.body.password = bcrypt.hashSync(req.body.password,10) //encripto passw  
            
            const usuario = await models.usuario.create(req.body)   //creo usuario
            
            if(!usuario) return next(errors.errorCrearUsuario)   

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