
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    type:{
        enum:['Income','Expense'],
        required:[true,'Please add Transaction Type.']
    },
    amount:{
        type:Number,
        required:[true,"Please add Transaction amount"]
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
    paymentMethod:{
        type:String,
    },
    note:{
        type:String,
        maxlength:[500,"Description can not be longer than 500 characters."]
    }
});
module.exports = mongoose.model('Transaction',TransactionSchema);