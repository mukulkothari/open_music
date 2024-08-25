// backend/routes/playlistCollaborators.js
const express = require('express');
const Playlist = require('../models/Playlist');
const User = require('../models/User');
const router = express.Router();

router.post('/add-collaborator', async (req, res) => {
    const { playlistId, collaboratorId } = req.body;

    // Validate collaborator
    const collaborator = await User.findById(collaboratorId);
    if (!collaborator) return res.status(404).json({ message: 'User not found' });

    const playlist = await Playlist.findById(playlistId);
    playlist.collaborators.push(collaboratorId);
    await playlist.save();

    res.json({ message: 'Collaborator added' });
});

module.exports = router;
