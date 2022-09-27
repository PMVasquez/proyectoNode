const router = require("express").Router();  //importa express.router

const pacienteController = require("../controllers/paciente.controller") //importa controller

//router.get('/', async function(req,res){
//          res.send("Holasss nodemon HI: ");
//    })
const validate = require('../midllewares/validate')
const schemePaciente = require('../midllewares/schemes/paciente.scheme')

router.get('/',pacienteController.listar) 
router.get('/:idPaciente',pacienteController.listarInfo)
router.post('/',validate(schemePaciente.crearPaciente),pacienteController.crear)
module.exports = router;