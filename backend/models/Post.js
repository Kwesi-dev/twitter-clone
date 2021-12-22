const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    postInfo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model("Post", PostSchema)