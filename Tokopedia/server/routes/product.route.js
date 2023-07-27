const express = require('express');
const router = express.Router();
const Product = require('../controllers/product.controller');

// show all product
router.get("/product", product.controller.getAllProduct);

// add video
router.post("/add-product", product.controller.addProduct);

module.exports = router;