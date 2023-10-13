const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const productSchema = new Schema({
    productTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true,
        enum: ['Clothes', 'Hats', 'Shoes', 'Jewelry' ]
    },
    description: {
        type: String,
        required: false
    },
    producImage: {
        type: [],
        required: true
    }
});

module.exports = Product = model('Product', productSchema)