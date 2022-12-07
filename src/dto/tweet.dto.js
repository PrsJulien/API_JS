//===== packages import =====\\
const PostSchema = require("../models/tweets.model.js")

//===== Crée Un Tweet =====\\
const CreateTweet = async (req, res, next) => {
    try{
        const tweet = req.body.content;
        if (!tweet) {
            res.status(400).send("Entrez le contenu du tweet");
            return;
        }
        next();
    } catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur");
    }
}

const GetTweet = async (req, res, next) => {
    try {
        const tweetId = req.params.id;
        const tweet = await PostSchema.findOneById(tweetId);

        if (!tweet) {
            res.status(400).send("Contenue non trouvé");
            return;
        }
        next();
    }   catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }  
}

const PatchTweet = async (req, res, next) => {
    try {
        const tweetId = req.params.id;

        const tweet = await PostSchema.findOne({  _id: tweetId })
        if (!tweet) {
            res.status(404).send("Contenue non trouvé");
            return;
        }

        next();
    }   catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}

const DeleteTweet = async (req, res, next) => {
    try {
        const tweetId = req.params.id;

        const tweet = await PostSchema.findOne({  _id: tweetId })
        if (!tweet) {
            res.status(404).send("Contenue non trouvé");
            return;
        }

        next();
    }   catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }
}

module.exports = {
    CreateTweet,
    GetTweet,
    PatchTweet,
    DeleteTweet
}