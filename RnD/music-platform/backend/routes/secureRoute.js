// backend/routes/secureRoute.js
const express = require('express');
const { authenticateToken } = require('../services/auth');
const router = express.Router();

router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'This is a secured route', user: req.user });
});

module.exports = router;
