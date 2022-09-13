module.exports ={
    listarInfo : async(rea,res) =>{
        try {
            console.log("mostrando info del paciente")         
            res.json({
                message: "Soy paciente"
            })
        } catch (error) {
            console.log(error)
        }
    },
}