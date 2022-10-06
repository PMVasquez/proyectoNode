const router = require("express").Router();  //importa express.router

const usuarioController = require("../controllers/usuario.controller") //importa controller

const validate = require('../midllewares/validate')
const schemeUsuario = require('../midllewares/schemes/usuario.scheme')

router.get('/',usuarioController.listar) 
router.get('/:idUsuario',usuarioController.listarInfo)
router.post('/',validate(schemeUsuario.crearUsuario),usuarioController.crear)
module.exports = router;