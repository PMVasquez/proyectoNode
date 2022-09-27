module.exports = (scheme) =>{

    return (req,res,next) =>{
        let result = scheme.validate(req.body) //valida los datos de entrada con el esquema

        if(result.error){
            next(result.error)  // envía el error al controlador
        }else{
            netx()   //continúa con la ejecución
        }
    }
}