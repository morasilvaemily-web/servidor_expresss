const { 
    listarUsuarios, 
    obtenerUsuarios, // <-- Kaypi 'obtenerUsuarios' nispa churana
    crearUsuario,    // <-- Kaypi 'crearUsuario' nispa churana
    editarUsuario, 
    eliminarUsuario 
} = require("../services/usuariosService.js");

// GET - Listar todos los usuarios
const mostrarRutaUsuarios = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        return res.json(usuarios);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al comunicarse con la base de datos",
            error: error.message
        });
    }
};

// GET - Obtener un usuario por ID
const obtenerUsuarioController = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await obtenerUsuarios(id); // <-- Kaypipas 'obtenerUsuarios' llamk'achina
        
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        
        return res.json(usuario);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener el usuario",
            error: error.message
        });
    }
};

// POST - Registrar / Crear usuario
const registrarController = async (req, res) => {
    try {
        const { email, name, clave } = req.body;
        const nuevoUsuario = await crearUsuario(email, name, clave); // <-- Kaypipas 'crearUsuario'
        return res.json(nuevoUsuario);
    } catch (error) {
        return res.status(500).json({
            mensaje: "No se puede crear Usuario",
            error: error.message
        });
    }
};

// PUT - Editar usuario
const editarController = async (req, res) => {
    try {
        const { id } = req.params;
        const datos = req.body;
        const usuarioEditado = await editarUsuario(id, datos);
        return res.json(usuarioEditado);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al editar el usuario",
            error: error.message
        });
    }
};

// DELETE - Eliminar usuario
const eliminarController = async (req, res) => {
    try {
        const { id } = req.params;
        await eliminarUsuario(id);
        return res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al eliminar el usuario",
            error: error.message
        });
    }
};

// POST - Login
const loginController = async (req, res) => {
    return res.json({ mensaje: "Ruta para iniciar sesion" });
};

module.exports = { 
    mostrarRutaUsuarios, 
    obtenerUsuarioController,
    registrarController, 
    editarController,
    eliminarController,
    loginController 
};