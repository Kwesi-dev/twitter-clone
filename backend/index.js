const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const multer = require("multer")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const cors = require("cors")
const path = require("path")
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use("/images", express.static(path.join(__dirname, "images")))

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "images")
    }, 
    filename: (req, file, cb)=>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("file uploaded")
})

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server running")
})