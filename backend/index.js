const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const multer = require("multer")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const cors = require("cors")
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/posts", postsRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server running")
})