// backend/models/Playlist.js
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Add collaborators
    sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Add sharedWith field
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
    
});

module.exports = mongoose.model('Playlist', playlistSchema);

// Ensure frequently queried fields are indexed
playlistSchema.index({ user: 1 });
playlistSchema.index({ name: 1, user: 1 });
