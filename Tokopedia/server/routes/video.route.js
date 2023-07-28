const express = require('express');
const router = express.Router();
const Video = require('../controllers/video.controller');

// show all videos
router.get("/videos", Video.getAllVideo);

// add video
router.post("/add-video", Video.addVideo);

module.exports = router;