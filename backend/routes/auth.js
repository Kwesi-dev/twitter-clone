const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()

router.post("/register", async(req, res)=>{
    const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_Key).toString()

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        desc: req.body.desc,
        profilePic: req.body.profilePic,
    })
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({$or : [{username: req.body.username}, {email: req.body.email}]})
        if(!user) return res.status(404).json("email or username incorrect")

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.Secret_Key)
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
        
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.Secret_Key, {expiresIn: "3d"})

        if(req.body.password !== originalPassword) return res.status(500).json("password incorrect")
        const { password, ...others } = user._doc
        res.status(200).json({...others, accessToken}) 
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router