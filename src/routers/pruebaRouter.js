//ruta de solo prueba 
const {Router} = require ("express")
const enrutador =Router ()
const mostrarRuta = require("../controllers/rutapruebacotrollers")
//funcion (req)
enrutador.get("/rutaPersonal", mostrarRuta)



module.exports = enrutador