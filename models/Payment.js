const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const paymentSchema = new Schema({
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Failed', 'Success', 'Pending']
    },
    method: {
        type: String,
        required: true,
        enum: ['Credit Card', 'Paystack', 'Flutterwave']
    },
    paymentDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    Currency: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        maxLength: 200,
        minLength: 0
    }
});

module.exports = Payment = model('Payment', paymentSchema);