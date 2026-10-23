const { Router } = require("express");
const enrutador = Router();

const {
    mostrarRutaUsuarios,
    obtenerUsuarioController,
    registrarController,
    editarController,
    eliminarController,
    loginController
} = require("../controllers/rutaUsuariosControllers");

// GET - Obtener todos los usuarios
enrutador.get("/listado", mostrarRutaUsuarios);

// GET - Obtener un usuario por ID
enrutador.get("/listado/:id", obtenerUsuarioController);

// POST - Registrar / Crear usuario
enrutador.post("/registrar", registrarController);

// PUT - Editar usuario por ID
enrutador.put("/editar/:id", editarController);

// DELETE - Eliminar usuario por ID
enrutador.delete("/eliminar/:id", eliminarController);

// POST - Iniciar sesión
enrutador.post("/login", loginController);

module.exports = enrutador;