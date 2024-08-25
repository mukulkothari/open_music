// backend/services/notificationService.js
const User = require('../models/User');
const { sendNotification } = require('./notificationSocket');

const sendNotificationToUser = async(userId, message) => {
    const user = await User.findById(userId);
    if (user.notificationPreferences.recommendations) {
    sendNotification(userId, message);
    }
};

module.exports = { sendNotificationToUser };
