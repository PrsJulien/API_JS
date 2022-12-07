//===== packages import =====\\
const mongoose = require("mongoose")
const { connect,set } = require("mongoose")

mongoose.connection.on("connected", ()=>{
    console.log("Connexion mogodb established")
})

mongoose.connection.on("reconnected", ()=>{
    console.log('Connexion mogodb restablished')
})

mongoose.connection.on("disconnect", ()=>{
    console.log("Connexion mogodb restablished")
})

mongoose.connection.on("error", ()=>{
    console.log('bd error')
})

mongoose.connection.on("close", ()=>{
    console.log('connection close')
})

set("debug", false);
connect(
    "mongodb+srv://WIEZII:Pires010916--@cluster0.nn5mj3f.mongodb.net/?retryWrites=true&w=majority",
    {useUnifiedTopology: true, useNewUrlParser: true}
);