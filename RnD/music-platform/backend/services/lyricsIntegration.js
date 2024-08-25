// backend/services/lyricsIntegration.js
const axios = require('axios');

const fetchLyrics = async (trackName, artistName) => {
    try {
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artistName}/${trackName}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lyrics:', error);
        return null;
    }
};

module.exports = fetchLyrics;
