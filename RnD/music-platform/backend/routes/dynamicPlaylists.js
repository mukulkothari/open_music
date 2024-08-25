// backend/routes/dynamicPlaylists.js
const express = require('express');
const generateDynamicPlaylist = require('../services/dynamicPlaylistGenerator');
const router = express.Router();

router.post('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const playlist = await generateDynamicPlaylist(userId);
    res.json(playlist);
});

module.exports = router;
