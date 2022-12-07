//===== packages import =====\\
const { model, Schema} = require('mongoose');

//===== Schema D'utilisateur =====\\
const Utilisateur = new Schema ({
        username: String,
        createdAt: {
            type: Date,
            default: Date.now,
        },
});

module.exports = model("User", Utilisateur, "users");