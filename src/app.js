require("dotenv").config()
const express = require("express")
//importar enrutador 
const enrutador = require("./routers")
const app = express()
//usar 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//importar archivo routeres
app.use("/api", enrutador)
//endpoint raiz, de bienbenida 
app.get("/", (req, res) => {
  res.send("API REST Estructurada por capas");
});
module.exports = app