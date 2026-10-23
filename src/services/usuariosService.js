const ormPrisma = require("../config/conexion");

// 1. Obtener todos los usuarios
const listarUsuarios = async () => {
    const usuarios = await ormPrisma.usuarios.findMany();
    return usuarios;
};

// 2. Obtener un usuario por ID
const obtenerUsuarios = async (id) => {
    const usuario = await ormPrisma.usuarios.findUnique({
        where: { id: Number(id) }
    });
    return usuario;
};

// 3. Crear usuario
const crearUsuario = async (email, name, clave) => {
    const nuevoUsuario = await ormPrisma.usuarios.create({
        data: {
            email,
            name,
            clave
        }
    });
    return nuevoUsuario;
};

// 4. Editar usuario
const editarUsuario = async (id, datosEditados) => {
    const usuarioEditado = await ormPrisma.usuarios.update({
        where: { id: Number(id) },
        data: datosEditados
    });
    return usuarioEditado;
};

// 5. Eliminar usuario
const eliminarUsuario = async (id) => {
    const usuarioEliminado = await ormPrisma.usuarios.delete({
        where: { id: Number(id) }
    });
    return usuarioEliminado;
};

// Exportar todas las funciones juntas como un objeto (module en minúscula)
module.exports = {
    listarUsuarios,
    obtenerUsuarios,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
};