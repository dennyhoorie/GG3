const mongoose = require('mongoose');
const video = require('../models/video.model');
    

// function to show or get all video
const getAllVideo  = async (req, res) => {
    try {
        const videos = await video.find();
        res.json(videos);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to get All Video.' });
    }
};

// function to add or post video
const addVideo = async (req, res) => {
    try {
        const { videoID, imgURL } = req.body;
        const addVideo = new video({
        videoID,
        imgURL
    })
    const savedVideo = await addVideo.save();
    res.json({ message: 'Video successfully added.', savedVideo});
    }
    
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add video'});
    }
};

module.exports = { getAllVideo, addVideo };