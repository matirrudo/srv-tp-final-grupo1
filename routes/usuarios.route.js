console.log("cargo usuarios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const usuarioCtrl = require('../controllers/usuario.controller');
const authCtrl = require('../controllers/auth.controller');

// definiendo rutas
router.get('/',authCtrl.verifyToken , usuarioCtrl.getUsuarios);
router.post('/',authCtrl.verifyToken , usuarioCtrl.createUsuario);
router.get('/:id',authCtrl.verifyToken , usuarioCtrl.getUsuario);
router.put('/:id',authCtrl.verifyToken , usuarioCtrl.editUsuario);
router.delete('/:id',authCtrl.verifyToken , usuarioCtrl.deleteUsuario);
router.post('/login',usuarioCtrl.loginUsuario)

//exportacion del modulo de rutas
module.exports = router;