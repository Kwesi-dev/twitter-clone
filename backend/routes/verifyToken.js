const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1]
        
        jwt.verify(token, process.env.Secret_Key, (err, user)=>{
            if(err) return res.status(404).json("token not valid")
            req.user = user
            next()
        })
    }else{
        res.status(401).json("user is not authenticated")
    }
}

module.exports = verifyToken