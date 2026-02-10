const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();


dotenv.config();

const port = process.env.PORT;
app.use(express.json());

connectDB().then(() => {
    console.log("MongoDB connected, starting server...");
})
app.use("/api/sales",require("./routes/salesRoute"));

app.get("/",(req,res)=>{
    res.send("Sales api running")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})




