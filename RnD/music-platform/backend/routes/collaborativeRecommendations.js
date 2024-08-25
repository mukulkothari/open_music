// backend/routes/collaborativeRecommendations.js
const express = require('express');
const recommendBasedOnUser = require('../services/collaborativeFiltering');
const router = express.Router();

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const recommendations = await recommendBasedOnUser(userId);
    res.json(recommendations);
});

module.exports = router;
