const mongoose = require("mongoose");

const connectDB = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb Connected Successfully")
    } catch (error) {
        console.log(`MongoDb error : ${error}`)
    }
}
module.exports = connectDB