// backend/models/User.js
const mongoose = require('mongoose');
const notification = require('./notification');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    notificationPreferences: {
        recommendations: { type: Boolean, default: true },
        playlistUpdates: { type: Boolean, default: true }
    },
    likedSongs: [String],
    skippedSongs: [String],
    preferences: {
        avoidGenres: [String],
        avoidArtists: [String]
    }
    
});

module.exports = mongoose.model('User', userSchema);
