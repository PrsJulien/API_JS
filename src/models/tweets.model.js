//===== packages import =====\\
const {model, Schema} = require('mongoose')

//===== Schema Tweets =====\\
const Tweets = new Schema ({
    content: String,
    sondage: String,
    reponse: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model("Tweets", Tweets, "tweet");