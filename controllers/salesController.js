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

const getLeaderboardController = async (req,res)=>{
    try {
        const aggregate = await salesModel.aggregate([
            {
                $group:{
                    _id:"$agentName",
                    totalSales : {$sum : "$amount"},
                    totalDeals :{$sum:"$deals"} 

                }
            },{
                $sort:{totalSales:-1}
            }
        ])
        let rank  = 1;

        for(let i = 0; i<aggregate.length ; i++){
            if(i>>0 && aggregate[i].totalSales<aggregate[i-1].totalSales){
                rank = i+1
            }
            aggregate[i]={
                rank,
                agentName:aggregate[i]._id,
                totalSales:aggregate[i].totalSales,
                totalDeals:aggregate[i].totalDeals
            }
        }
        res.status(200).send({
            success:true,
            count : aggregate.length,
            leaderBoard : aggregate
        })
    } catch (error) {
         res.status(500).send({
      success: false,
      message: error.message
    });
    }
}
module.exports = {addSalesController,getLeaderboardController}