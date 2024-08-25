// backend/routes/lyricsRoutes.js
const express = require('express');
const fetchLyrics = require('../services/lyricsIntegration');
const router = express.Router();

router.get('/lyrics/:artist/:track', async (req, res) => {
    const { artist, track } = req.params;
    const lyrics = await fetchLyrics(track, artist);
    res.json(lyrics);
});

module.exports = router;
