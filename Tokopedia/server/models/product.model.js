const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productID: {
        required: true,
        type: Number,
    },

    url: {
        required: true,
        type: String,
    },

    title: {
        required: true,
        type: String,
    },

    price: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model('Product', productSchema)