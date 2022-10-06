const router = require('express').Router();   //importa express.router
const authController = require('../controllers/auth.controller')
//const signJWT = require('../midllewares/signJWT')

router.post('/login', authController.login)
router.post('/registrarse', authController.registrarse)

module.exports = router;
