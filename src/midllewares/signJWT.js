const jwt = require('jsonwebtoken')   //p crear token
const globalConstants = require('../const/globalConstants')

module.exports= function(usuario){    //recibe usuario por parametro
    console.log("en sign")
    if(usuario){
        //creo token con datod del usuario
        const token = jwt.sign(   //está funcnion crea el token
            {
                id: usuario.id
            },
            globalConstants.JWT_SECRET,   //clave secreta para encriptar el token
            {
                expiresIn: '3000m'   //tiempo en que expira : 3hs
            }
        )
        return token   // devuelvo token
    }else{
        return null   //si no encuentro el usuario
    }
}