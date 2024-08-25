// backend/models/Song.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    id: String,
    name: String,
    artists: [String],
    album: String,
    release_date: String,
    popularity: Number,
});

module.exports = mongoose.model('Song', songSchema);
