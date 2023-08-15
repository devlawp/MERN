const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, 'Amount required']
    },
    category: {
        type: String,
        required: [true, 'Category Required']
    },
    date: {
        type: String,
        required: [true, 'Date Required']
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema);

module.exports=transactionModel;