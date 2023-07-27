const express = require('express');
const router = express.Router();
const Comment = require('../controllers/comment.controller');

// show all product
router.get("/comment", comment.controller.getAllComment);

// add video
router.post("/add-comment", comment.controller.addComment);

module.exports = router;