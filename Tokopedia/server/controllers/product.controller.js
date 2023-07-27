const mongoose = require('mongoose');
const product = require('../models/product.model');
    

// function to show or get all product
const getAllProduct  = async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to get All Product.' });
    }
};

// function to add or post product
const addProduct = async (req, res) => {
    try {
        const { productID, url, title, price } = req.body;
        const addProduct = new product({
        productID,
        url,
        title,
        price
    })

    const savedProduct = await addProduct.save();
    res.json({ message: 'Your Product successfully added.', savedProduct});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add product'});
    }
};

module.exports = { getAllProduct, addProduct };