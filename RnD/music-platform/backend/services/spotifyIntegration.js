// backend/services/spotifyIntegration.js
const axios = require('axios');

const fetchSpotifyData = async (trackId) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: { 'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Spotify:', error);
        return null;
    }
};

module.exports = fetchSpotifyData;
