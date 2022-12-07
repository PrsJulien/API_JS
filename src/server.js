//===== packages import =====\\
const express = require("express");
const isAuthenticated = require("./middleware/auth.middleware.js")
const userdto = require("./dto/users.dto")
const tweetdto = require("./dto/tweet.dto")
const tweetcontroller = require("./controllers/tweet.controller.js")
const usercontroller = require("./controllers/users.controller.js");
require("./database")


//===== Lancement de L'API =====\\
const server = express()
server.use(express.json())

//===== Route raçine du projet =====\\
server.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world !" })
})

//===== Route =====\\

// Crée un utilisateur \\ 
server.post("/users/register", 
userdto.CreateUtilisateur,usercontroller.CreateUser)

// Suprimer un utilisateur \\
server.delete("/users/delete",
isAuthenticated, usercontroller.DeleteUtilisateur)

// Modifie un utilisateur \\
server.patch("/users/me",
isAuthenticated,userdto.PatchUtilisateur,usercontroller.patchUtilisateur)

// Crée un Tweet \\
server.post("/tweets/create",
isAuthenticated,tweetdto.CreateTweet,tweetcontroller.createTweet)

// Récupère un Tweets \\
server.get("/tweet/gettweet/:id",
tweetdto.GetTweet,tweetcontroller.getTweet)

// Modifie le Tweet \\
server.patch("/tweet/patchTweet/:id",
tweetdto.PatchTweet,tweetcontroller.patchTweet)

// Supprime le Tweet \\
server.delete("/tweet/DeleteTweet/:id",
tweetdto.DeleteTweet,tweetcontroller.deleteTweet)

// Ecoute le port 3000 \\
server.listen(3000, () => {
    console.log("listening on port 3000")
})