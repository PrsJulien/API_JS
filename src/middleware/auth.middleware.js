//===== packages import =====\\
const User = require("../models/utilisateur.model")

//===== System D'authentification =====\\
const isAuthenticated = async (req, res,next) => {
    try{
        const username = req.headers.username
        
        if(!username){
            res.status(401).send("Connectez-vous avant de réaliser cette action")
            return
        }
        const user = await User.findOne({username: username})
        if (!user){
            res.status(401).send("Vérifier l'orthographe")
            return
        }
        req.user = user
        return next()
        
    }catch(error){
        res.status(500).send("Erreur D'authentification")
    }
}

module.exports = isAuthenticated