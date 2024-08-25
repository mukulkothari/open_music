// backend/services/fetchBollywoodMetadata.js
const { spotifyApi, getAccessToken } = require('../config/spotifyApiSetup');

const fetchBollywoodMetadata = async () => {
    await getAccessToken();
    
    const bollywoodSongs = [];
    const searchQuery = 'Bollywood'; // Modify this query as needed

    try {
        const response = await spotifyApi.searchTracks(searchQuery, { limit: 50 });
        const tracks = response.body.tracks.items;

        tracks.forEach(track => {
            const { name, artists, album, popularity, release_date, id } = track;
            bollywoodSongs.push({
                id,
                name,
                artists: artists.map(artist => artist.name),
                album: album.name,
                release_date,
                popularity,
            });
        });
    } catch (err) {
        console.error('Error fetching Bollywood metadata', err);
    }

    return bollywoodSongs;
};

module.exports = fetchBollywoodMetadata;

