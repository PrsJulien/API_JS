//===== packages import =====\\
const PostSchema = require("../models/tweets.model.js")
const SondageSchema = require("../models/reponseTweet.model.js")

// ==== Fonction pour Le Tweet ==== \\
const createTweet = async (req, res) => {
    try {
        const tweet = req.body.content;
        const sondage = req.body.question

        const newTweet = new PostSchema();
        
        if (sondage) {
            const answer = req.body.answer;

            const newAnswer = new SondageSchema();

            newAnswer.user = req.user._id;
            newAnswer.contentAnswer = answer;

            newTweet.user = req.user._id;
            newTweet.content = tweet;
            newTweet.sondage = sondage;
            newTweet.reponse = answer;

            await newTweet.save();
            res.status(201).json(newTweet)
            return;
        }
        newTweet.user = req.user._id;
        newTweet.content = tweet;
        
        await newTweet.save();
        
        res.status(201).json(newTweet)
    }   catch (error) {
        console.log(error)
        res.status(500).send("Une erreur est survenue côté serveur")
    }      
}

const getTweet = async (req, res) => {
    try {
        const tweetId = req.params.id;
        
        const tweet = await PostSchema.findOne(
            { _id: tweetId },
            );
            
            res.status(200).json({ content: tweet.content });
        }   catch (error) {
            res.status(500).send("Une erreur est survenue côté serveur");
        }  
    }

const patchTweet = async (req, res) => {
    try {
        const tweetId = req.params.id;
        const data = req.body.content;
        const tweet = await PostSchema.findOne({ _id: tweetId })
        tweet.content = data;
        await tweet.save();

        res.status(200).json({ content: tweet.content })
    }  catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }  
}
    
const deleteTweet = async (req, res) => {
    try {
        const tweetId = req.params.id;
        const tweet = await PostSchema.findOne( { _id: tweetId } );
        await tweet.remove();
        res.status(200).send("Le tweet a bien été supprimé")
    }catch (error) {
        res.status(500).send("Une erreur est survenue côté serveur")
    }  
}

const CreateSondage = async(req, res) => {
    try {
        const Sondage = new SondageSchema()
        await Sondage.save()
        res.status(200).send("Le sondage à bien été envoyer")
    } 
    catch (error) {
        res.status(404).send("Contenue non trouvé")
    }
}
// ============ ============ \\

module.exports = {
    CreateSondage,
    createTweet,
    getTweet,
    patchTweet,
    deleteTweet
}