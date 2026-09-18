//agregar rutas de  mi aplicacion (usuario, productos, notas, citas )
const {Router} = require ("express")
const enrutador = Router ()
const prueba  = require ("./pruebaRouter")
enrutador.use ("/rutaPrueba", prueba)
//ejemplo
//enrutador.use("/usaurios", usuariosRouter)

module.exports = enrutador
