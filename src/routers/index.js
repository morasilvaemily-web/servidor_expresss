
const {Router} = require ("express")
const enrutador =Router ()
const prueba = require ('./pruebaRouter')

enrutador.use("/rutaprueba", prueba)
//enrutador.use("/usuarios", ususariosRouter)


module.exports = enrutador