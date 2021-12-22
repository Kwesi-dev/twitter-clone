const router = require("express").Router()
const Post = require("../models/Post")
const verifyToken = require("./verifyToken")


//create a post
router.post("/", verifyToken, async(req, res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(201).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})

//get all posts and query to get new ones
router.get("/", verifyToken, async(req, res)=>{
    const qNew = req.query.new
    try{
        let posts
        if(qNew){
            posts = await Post.find().sort({createdAt: -1})
            res.status(200).json(posts)
        }else{
            posts = await Post.find()
            res.status(200).json(posts)
        }
    }catch(err){
        res.status(500).json(err)
    }
})

//get a post
router.get("/:postId", verifyToken, async(req, res)=>{
    try{
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//delete a posts
router.delete("/:postId", verifyToken, async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postId)
        if(post.userId === req.user.id || req.user.isAdmin){
            try{
                await Post.findByIdAndDelete(req.params.postId)
                res.status(200).json("post deleted")
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(500).json("you are not allowed this action")
        }
    }catch(err){
        res.status(404).json(err)
    }

})
//update a posts
router.put("/:postId", verifyToken, async (req, res)=>{
    try{
        const post = await Post.findById(req.params.postId)
        if(post.userId === req.user.id || req.user.isAdmin){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {$set : req.body}, {new: true})
                res.status(200).json(updatedPost)
            }catch(err){
                res.status(500).json(err)
            }
        }else{
            res.status(500).json("you are not allowed this action")
        }
    }catch(err){
        res.status(404).json(err)
    }
})

module.exports = router