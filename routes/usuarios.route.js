console.log("cargo usuarios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const usuarioCtrl = require('../controllers/usuario.controller');

// definiendo rutas
router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuario);
router.get('/:id', usuarioCtrl.getUsuario);
router.put('/:id', usuarioCtrl.editUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);

//exportacion del modulo de rutas
module.exports = router;