const express = require('express');
const router = express.Router();
const Video = require('../controllers/video.controller');

// show all videos
router.get("/videos", video.controller.getAllVideo);

// add video
router.post("/add-video", video.controller.addVideo);

module.exports = router;