const router = require("express").Router();  //importa express.router

const pacienteController = require("../controllers/pacienteController.js") //importa controller

router.get('/',pacienteController.listarInfo)