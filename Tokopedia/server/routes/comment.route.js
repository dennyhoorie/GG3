const express = require('express');
const router = express.Router();
const Comment = require('../controllers/comment.controller');

// show all product
router.get("/comment", Comment.getAllComment);

// add video
router.post("/add-comment", Comment.addComment);

module.exports = router;