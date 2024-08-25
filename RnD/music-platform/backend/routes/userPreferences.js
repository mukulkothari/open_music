// backend/routes/userPreferences.js
const express = require('express');
const router = express.Router();

router.post('/preferences', (req, res) => {
    const { mood, genre } = req.body;
    // Handle the received data (e.g., store it, trigger recommendations)
    res.json({ message: 'Preferences received', mood, genre });
});

module.exports = router;
