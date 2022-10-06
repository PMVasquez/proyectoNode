const { Router } = require("express")  //importa express

const pacienteRouter = require ("./paciente.routes")
const medicoRouter = require('./medico.routes')
const usuarioRouter = require('./usuario.routes')
const authRoutes = require('./auth.routes')
const decodeJWT = require('../midllewares/decodeJWT')

const rutas_init  =() => {
    const router = Router()  //crea instancia de express.router
    
    router.use("/pacientes",pacienteRouter)  
    router.use("/medicos",medicoRouter)  
    router.use("/usuarios",decodeJWT,usuarioRouter)
    return router
}

const rutas_auth = () =>{
    const router = Router()
    router.use("/auth",authRoutes)
    return router
}

module.exports = { rutas_init, rutas_auth}  //exporta el archivo de rutas de la api
