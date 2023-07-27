const mongoose = require('mongoose');
const comment = require('../models/comment.model');
    

// function to show or get all comment
const getAllComment  = async (req, res) => {
    try {
        const comments = await comment.find();
        res.json(comments);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to get All Comment.' });
    }
};

// function to add or post comment
const addComment = async (req, res) => {
    try {
        const { username, comment, timestamp } = req.body;
        const addComment = new comment({
        username,
        comment,
        timestamp
    })

    const savedComment = await addComment.save();
    res.json({ message: 'Your Comment successfully added.', savedComment});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add comment'});
    }
};

module.exports = { getAllComment, addComment };