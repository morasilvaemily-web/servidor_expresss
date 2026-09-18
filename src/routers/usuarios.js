const { Router } = require("express");
const enrutador = Router();
const mostrarusuarios = require("../controllers/pruebausuarios");

// Aquí va la definición del método GET
enrutador.get("/mostrarusuarios", mostrarusuarios);

module.exports = enrutador;