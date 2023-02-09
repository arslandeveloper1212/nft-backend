const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
            type: String,
            required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    text:{
        type: String,
        required: true,
    }
});

//create model connection

const User = new mongoose.model("user",  userSchema);

module.exports = User;