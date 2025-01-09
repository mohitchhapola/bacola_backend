const mongoose = require ('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    description: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    Timestamp: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;