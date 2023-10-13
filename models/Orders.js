const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const OrderItem = require('./OrderItem')

const orderSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    },
    shippingAddress: {
        streetAddress: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        
    },
    orderPrice: {
        type: String,
        required: true
    },
    shippingFee: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
  
    currency: {
        type: String,
        required: true
    },
    orderItems: {
        type: [OrderItem]
    },
    shippingMethod: {
        type: String,
        required: true,
        enum: ['Standard Shipping', 'Express Delivery']
    },
    Notes: {
        type: String,
        required: false
    },
    discountCode: {
        type: String,
        required: false
    }
});

module.exports = Orders = model('Orders', orderSchema)