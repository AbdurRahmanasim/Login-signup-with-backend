const mongoose = require("mongoose")

const userschema =  new mongoose.Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }
})

const model = mongoose.model("users" , userschema);

module.exports = model