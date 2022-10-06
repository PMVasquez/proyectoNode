const jwt = require('jsonwebtoken')
const errors =require('../const/errors')
const models= require('../database/models/index')
const globalConstants= require('../const/globalConstants')

module.exports = async function(req,res,next){
    if(req.header('Authorization') && req.header('Authorization').split(' ').length >1){  //el header tiene valor autorizacion 
        try {   

            // verifico el token y lo decodifico con la clave secreta
            let dataToken=jwt.verify(req.header('Authorization').split(' ')[1], globalConstants.JWT_SECRET)

            if(dataToken.exp <= moment().unix() )
                return next(errors.sesionExpirada)
        
            res.locals.token= dataToken
            
            const usuario = await models.usuario.findOne({
                where:{
                    id : dataToken.id
                }
            })

            if(!usuario) return next(errors.usuarioNoHabilitado)

            res.locals.usuario = usuario   //guardo el usuario en locals por si lo necesito en el cliente
            next()
        } catch (error) {
            return next(errors.sesionExpirada)            
        }        
    }
    else{
        return next(errors.usuarioNoHabilitado)
    }
}