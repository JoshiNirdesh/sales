const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();


dotenv.config();

const port = process.env.PORT;

connectDB();

app.get("/",(req,res)=>{
    res.send("Sales api running")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})




