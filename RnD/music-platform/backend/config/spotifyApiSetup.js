// backend/config/spotifyApiSetup.js
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: '9a18eeb9350e4322a0d69ba17de8088f',
    clientSecret: 'fcd4c429046042e48e8c7c73cdf735ec',
    redirectUri: 'http://localhost:3000/callback'
});

const getAccessToken = async () => {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(data.body['access_token']);
    } catch (err) {
        console.error('Failed to retrieve access token', err);
    }
};

module.exports = { spotifyApi, getAccessToken };
