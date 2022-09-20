module.exports ={    
    listarInfo : async(req,res) =>{
        try {
            console.log("mostrando info del paciente")         
            res.json({
                message: "Soy paciente: " + req.params.idPaciente
            })
        } catch (error) {
            console.log(error)
        }
    },
    listar : async(req,res) =>{
        try {
            console.log("mostrando pacientes")         
            res.json({
                message: "Listo todos los pacientes"
            })
        } catch (error) {
            console.log(error)
        }
    }
}