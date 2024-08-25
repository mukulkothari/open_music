// backend/routes/notificationRoutes.js
const express = require('express');
const Notification = require('../models/notification');
const router = express.Router();

router.post('/send', async (req, res) => {
    const { userId, message } = req.body;
    const notification = new Notification({ user: userId, message });
    await notification.save();
    res.status(201).json({ message: 'Notification sent' });
});

router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    const notifications = await Notification.find({ user: userId });
    res.json(notifications);
});

router.post('/mark-as-read', async (req, res) => {
    const { notificationId } = req.body;
    const notification = await Notification.findById(notificationId);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });

    notification.read = true;
    await notification.save();

    res.json({ message: 'Notification marked as read' });
});

module.exports = router;
