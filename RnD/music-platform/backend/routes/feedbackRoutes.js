// backend/routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

router.post('/submit', async (req, res) => {
    const { userId, feedbackType, message } = req.body;
    const feedback = new Feedback({ user: userId, feedbackType, message });
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
});

router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    const feedbacks = await Feedback.find({ user: userId });
    res.json(feedbacks);
});

module.exports = router;
