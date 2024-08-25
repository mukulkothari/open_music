// backend/routes/playlists.js
const express = require('express');
const Playlist = require('../models/Playlist');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, userId, songs } = req.body;
    const playlist = new Playlist({ name, user: userId, songs });
    await playlist.save();
    res.json(playlist);
});

router.get('/:userId', async (req, res) => {
    const playlists = await Playlist.find({ user: req.params.userId }).populate('songs');
    res.json(playlists);
});

module.exports = router;
