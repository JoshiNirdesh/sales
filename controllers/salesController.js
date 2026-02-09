const salesModel = require("../model/salesModel");

const addSalesController = async (req,res)=>{
    const {agentName,amount,deals}=req.body;
    try {
        if(!agentName || !amount || !deals){
            return res.status(400).send({
                success:false,
                message:"Agentname, amount , deals are required"
            })
        }
        const sales = await salesModel.create({agentName,amount,deals});
        res.status(200).send({
            success:true,
            data : sales
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Add Sale api error",
            error:error.message
        })
    }
}
module.exports = {addSalesController}