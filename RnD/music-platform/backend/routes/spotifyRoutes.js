// backend/routes/spotifyRoutes.js
const express = require('express');
const fetchSpotifyData = require('../services/spotifyIntegration');
const router = express.Router();

router.get('/track/:id', async (req, res) => {
    const trackId = req.params.id;
    const data = await fetchSpotifyData(trackId);
    res.json(data);
});

module.exports = router;
