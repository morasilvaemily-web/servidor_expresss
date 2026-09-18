const jwtoken = require("jsonwebtoken")

const autenticacion = (req, res, next) => {
    //requerir o capturar el token
    const token = req.header("autenticar")?.split(" ")[1]
    if(!token){
        res.status(401).json({Error:"Acceso denegado, no provee token."})
    }
    jwtoken.verify(token, process.env.JWT_SECRET, (error, usuario) => {
        if(error){
            res.status(403).json({Error:"Token invalido"})
        }
        req.usuario = usuario
        next()
})
}

module.exports = autenticacion