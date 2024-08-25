// backend/routes/queueRoutes.js
const express = require('express');
const { addJobToQueue } = require('../services/queue');
const router = express.Router();

router.post('/enqueue', (req, res) => {
    const { data } = req.body;
    addJobToQueue(data);
    res.json({ message: 'Job added to queue' });
});

module.exports = router;
