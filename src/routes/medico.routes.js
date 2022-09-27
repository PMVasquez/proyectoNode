const router = require("express").Router();  //importa express.router

const medicoController = require("../controllers/medico.controller") //importa controller

const validate = require('../midllewares/validate')
const schemePaciente = require('../midllewares/schemes/paciente.scheme')

router.get('/',medicoController.listar) 
router.get('/:idMedico',medicoController.listarInfo)
router.post('/',validate(schemePaciente.crearPaciente),medicoController.crear)
module.exports = router;