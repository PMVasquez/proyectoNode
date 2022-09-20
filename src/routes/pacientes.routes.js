const router = require("express").Router();  //importa express.router

const pacienteController = require("../controllers/pacientes.controller") //importa controller

//router.get('/', async function(req,res){
//          res.send("Holasss nodemon HI: ");
//    })
router.get('/',pacienteController.listar) 
router.get('/:idPaciente',pacienteController.listarInfo)
module.exports = router;