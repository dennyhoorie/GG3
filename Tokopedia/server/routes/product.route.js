const express = require('express');
const router = express.Router();
const Product = require('../controllers/product.controller');

// show all product
router.get("/product", Product.getAllProduct);

// add video
router.post("/add-product", Product.addProduct);

module.exports = router;