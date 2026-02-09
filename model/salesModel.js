const mongoose = require("mongoose");

const salesSchema = mongoose.Schema({
    agentName : {
        type:String,
        required:true,
        index:true
    },
    amount : {
        type:Number,
        required:true
    },
    deals:{
        type:Number,
        required:true
    }
},{timestamps:true})

const salesModel = mongoose.model("sales",salesSchema)
module.exports = salesModel