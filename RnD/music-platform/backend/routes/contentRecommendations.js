// backend/routes/contentRecommendations.js
const express = require('express');
const recommendSimilarSongs = require('../services/contentBasedFiltering');
const router = express.Router();

router.get('/:songId', async (req, res) => {
    const songId = req.params.songId;
    const recommendations = await recommendSimilarSongs(songId);
    res.json(recommendations);
});

module.exports = router;
