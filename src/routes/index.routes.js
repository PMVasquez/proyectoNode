const { Router } = require("express")  //importa express

const pacienteRouter = require ("./pacientes.routes")

const rutas_init  =() => {
    const router = Router()  //crea instancia de express.router
    
    router.use("/pacientes",pacienteRouter)    
    return router
}

module.exports = { rutas_init}  //exporta el archivo de rutas de la api
