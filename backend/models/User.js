const mongoose = require("mongoose")
const { isEmail } = require("validator")
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
        minlength:[6, "password lenth must not be less than 6 characters"]
    },
    fullname: {
        type: String,
    },
    desc:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, "email is not valid"]
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    profilePic:{
        type: String,
    },
},{timestamps: true})

module.exports = mongoose.model("User", userSchema)