const router = require("express").Router();  //importa express.router

const medicoController = require("../controllers/medico.controller") //importa controller

const validate = require('../midllewares/validate')
const schemeMedico = require('../midllewares/schemes/medico.scheme')

router.get('/',medicoController.listar) 
router.get('/:idMedico',medicoController.listarInfo)
router.post('/',validate(schemeMedico.crearMedico),medicoController.crear)
module.exports = router;