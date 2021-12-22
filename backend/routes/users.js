const router = require("express").Router()
const User = require("../models/User")
const verifyToken = require("./verifyToken")

//get all users and also if there is a new query get the new users
router.get("/", verifyToken, async (req, res)=>{
    const qNew = req.query.new
    if(req.user.isAdmin){
        try{
            let users
            if(qNew){
                users = await User.find().sort({createdAt: -1})
                res.status(200).json(users)
            }else{
                users = await User.find()
                res.status(200).json(users)
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        return res.status(403).json("only admins are allowed this function")
    }
})

//get one user
router.get("/:id", verifyToken, async (req, res)=>{
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
})

//update a user
router.put("/:id",  verifyToken, async (req, res)=>{
    if(req.params.id === req.user.id || req.user.isAdmin){
        if(req.body.password){
            return CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString()
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updatedUser)
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        return res.status(403).json("you are not allowed this function")
    }
})

//delete a user
router.delete("/:id",  verifyToken, async (req, res)=>{
    if(req.params.id === req.user.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("user deleted")
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        return res.status(403).json("you are not allowed this function")
    }
})

module.exports = router
