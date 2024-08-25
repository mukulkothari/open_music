// backend/services/analytics.js
const User = require('../models/User');

const logUserInteraction = async (userId, interactionType, details) => {
    // Interaction types: 'play', 'like', 'skip', etc.
    await User.updateOne(
        { _id: userId },
        { $push: { interactions: { type: interactionType, details, timestamp: new Date() } } }
    );
};

module.exports = logUserInteraction;
