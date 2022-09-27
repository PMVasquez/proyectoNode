const { Router } = require("express")  //importa express

const pacienteRouter = require ("./paciente.routes")
const medicoRouter = require('./medico.routes')

const rutas_init  =() => {
    const router = Router()  //crea instancia de express.router
    
    router.use("/pacientes",pacienteRouter)  
    router.use("/medicos",medicoRouter)  
    return router
}

module.exports = { rutas_init}  //exporta el archivo de rutas de la api
