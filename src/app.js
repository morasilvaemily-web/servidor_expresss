
require("dotenv").config();
const express = require("express");

const enrutador = require("./routers");
const usuariosRouter = require("./routers/usuariosRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", enrutador);
app.use("/api/usuarios", usuariosRouter);

app.get("/", (req, res) => {
  res.send("API REST Estructurada por capas");
});

module.exports = app;
