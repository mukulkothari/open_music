// backend/routes/userInteractions.js
const express = require('express');
const User = require('../models/User');
const logUserInteraction = require('../services/analytics');
const router = express.Router();

router.post('/like', async (req, res) => {
    const { userId, songId } = req.body;
    await User.updateOne({ _id: userId }, { $addToSet: { likedSongs: songId } });
    res.json({ message: 'Song liked' });
});

router.post('/skip', async (req, res) => {
    const { userId, songId } = req.body;
    await User.updateOne({ _id: userId }, { $addToSet: { skippedSongs: songId } });
    res.json({ message: 'Song skipped' });
});

router.post('/log', async (req, res) => {
    const { userId, interactionType, details } = req.body;
    await logUserInteraction(userId, interactionType, details);
    res.json({ message: 'Interaction logged' });
});

module.exports = router;
