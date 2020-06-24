console.log("cargo servicios.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//definiendo controlador para el manejo de CRUD
const servicioCtrl = require('../controllers/servicio.controller');

// definiendo rutas
router.get('/', servicioCtrl.getServicios);
router.post('/', servicioCtrl.createServicio);
router.get('/:id', servicioCtrl.getServicio);
router.put('/:id', servicioCtrl.editServicio);
router.delete('/:id', servicioCtrl.deleteServicio);

//exportacion del modulo de rutas
module.exports = router;