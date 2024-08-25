// backend/routes/playlistSharingRoutes.js
const express = require('express');
const Playlist = require('../models/Playlist');
const router = express.Router();

router.post('/share', async (req, res) => {
    const { playlistId, userId } = req.body;
    const playlist = await Playlist.findById(playlistId);
    if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

    playlist.sharedWith.push(userId);
    await playlist.save();

    res.json({ message: 'Playlist shared' });
});

router.get('/shared/:userId', async (req, res) => {
    const userId = req.params.userId;
    const playlists = await Playlist.find({ sharedWith: userId });
    res.json(playlists);
});

module.exports = router;
