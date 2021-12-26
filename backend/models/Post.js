const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    postInfo: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema)