const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const OrderItem = require('./OrderItem')

const shoppingCartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    cartItems: [OrderItem]
});

module.exports = ShoppingCart = model('ShoppingCart', shoppingCartSchema);