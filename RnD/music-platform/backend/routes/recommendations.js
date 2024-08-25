// backend/routes/recommendations.js
const express = require('express');
const recommendSongs = require('../services/recommendationService');
const router = express.Router();

router.post('/', async (req, res) => {
    const { mood, genres } = req.body;
    const recommendations = await recommendSongs(mood, genres);
    res.json(recommendations);
});

module.exports = router;
