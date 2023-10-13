const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const orderItemSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    subTotal: {
        type: String,
        required: true
    }
});

module.exports = OrderItem = model('OrderItem', orderItemSchema)