//===== packages import =====\\
const {model, Schema} = require('mongoose')

//===== Schema ReponseTweets =====\\
const ReponseTweets = new Schema ({
    contentReponse: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("usersreponse", ReponseTweets, "usersreponse");