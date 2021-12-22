const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const multer = require("multer")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
dotenv.config()
const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("database connected")
})
.catch((err)=>{
    console.log(err)
})

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.listen(process.env.PORT || 5000, ()=>{
    console.log("backend server running")
})