// backend/services/dynamicPlaylistGenerator.js
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');
const { addJobToQueue } = require('./jobQueue');

const generateDynamicPlaylist = async (userId) => {
    addJobToQueue(userId);
    // Fetch user data
    const user = await User.findById(userId);
    const likedSongs = user.likedSongs;
    
    // Create a playlist based on liked songs and recommendations
    const recommendations = await Song.find({ _id: { $nin: likedSongs } }).limit(30);
    
    const playlist = new Playlist({
        name: 'Dynamic Playlist',
        user: userId,
        songs: [...likedSongs, ...recommendations.map(song => song._id)]
    });

    await playlist.save();
    return playlist;
};

module.exports = generateDynamicPlaylist;
