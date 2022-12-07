//===== packages import =====\\
const utilisateur = require("../models/utilisateur.model")

//===== Crée un utilisateur =====\\
const CreateUtilisateur = async(req, res,next) => {
    try{
        const user = req.body.user
        if (!user) {
            res.status(400).send("Aucun nom d'utilisateur trouvé")
            return
        }
        const userExist = await utilisateur.exists({username: user})
        if(userExist) {
            res.status(400).send("Le nom d'utilisateur existe déjà")
            return
        }
        return next();
    }
    catch(error){
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}

//===== Modifier un utilisateur =====\\
const PatchUtilisateur = async (req, res, next) => {
    try {

        
        next();
    }   catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}

module.exports = {
    CreateUtilisateur,
    PatchUtilisateur
}