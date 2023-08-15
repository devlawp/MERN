const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: [true, 'Amount required']
    },
    category: {
        type: String,
        required: [true, 'Category required']
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema);

