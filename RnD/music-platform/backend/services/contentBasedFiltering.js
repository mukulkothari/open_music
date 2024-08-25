// backend/services/contentBasedFiltering.js
const Song = require('../models/Song');

const recommendSimilarSongs = async (songId) => {
    const song = await Song.findById(songId);

    if (!song) return [];

    const similarSongs = await Song.find({
        genre: song.genre,
        _id: { $ne: songId }
    }).limit(30);

    return similarSongs;
};

module.exports = recommendSimilarSongs;
