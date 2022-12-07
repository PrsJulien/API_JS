//===== packages import =====\\
const User = require("../models/utilisateur.model.js")


// ==== Fonction pour l'utilisateur ==== \\
const CreateUser = async(req, res) => {
    try {
        const user = req.body.user
        const utilisateur = new User()
        utilisateur.username = user
        await utilisateur.save()
        res.status(200).send("Vous avez créé un utilisateur")
    } 
    catch (error) {
        res.status(500).send("Erreur rencontrée")
    }
}

const DeleteUtilisateur = async(req, res) => {
    try {
        const user = req.user
        await user.remove()
        res.status(200).send("Vous avez supprimé un utilisateur")
    } 
    catch (error) {
        res.status(404).send("Contenue non trouvé")
    }
}

const patchUtilisateur = async (req, res) => {
    try {
        const user = req.user
        const data = req.body.username;
        user.username = data;
        
        await user.save();
        res.status(200).json({ username: user.username })
    }   catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}
// ============ ============ \\

module.exports = {
    CreateUser,
    DeleteUtilisateur,
    patchUtilisateur,
}