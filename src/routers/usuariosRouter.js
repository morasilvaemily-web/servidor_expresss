
const { Router } = require("express");
const enrutador = Router();

const {mostrarRutaUsuarios, registrarController, loginController} = require("../controllers/rutaUsuariosControllers")

enrutador.get("/listado", mostrarRutaUsuarios)
enrutador.get ("/registar", registrarController)
enrutador. get("/login", loginController)



module.exports = enrutador
