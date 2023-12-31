const transactionModel =require('../models/transactionModel')
const getALLTransaction=async(req,res)=>{
        try{
        const Transactions = await transactionModel.find({userid:req.body.userid})
        res.status(200).json(Transactions);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

const addTransaction=async(req,res)=>{
    try{
        const newTransaction = new transactionModel(req.body)
        await newTransaction.save()
        res.status(201).send('Transaction Created')
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports={getALLTransaction,addTransaction};