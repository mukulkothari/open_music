require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const collaborativeRecommendationsRoutes = require('./routes/collaborativeRecommendations');
app.use('/api/collaborative-recommendations', collaborativeRecommendationsRoutes);

const userInteractionsRoutes = require('./routes/userInteractions');
app.use('/api/user-interactions', userInteractionsRoutes);

const contentRecommendationsRoutes = require('./routes/contentRecommendations');
app.use('/api/content-recommendations', contentRecommendationsRoutes);

const playlistCollaboratorsRoutes = require('./routes/playlistCollaborators');
app.use('/api/playlist-collaborators', playlistCollaboratorsRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const secureRoute = require('./routes/secureRoute');
app.use('/api/secure', secureRoute);

const spotifyRoutes = require('./routes/spotifyRoutes');
app.use('/api/spotify', spotifyRoutes);

const lyricsRoutes = require('./routes/lyricsRoutes');
app.use('/api/lyrics', lyricsRoutes);

const queueRoutes = require('./routes/queueRoutes');
app.use('/api/queue', queueRoutes);

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const feedbackRoutes = require('./routes/feedbackRoutes');
app.use('/api/feedback', feedbackRoutes);

const playlistSharingRoutes = require('./routes/playlistSharingRoutes');
app.use('/api/playlist-sharing', playlistSharingRoutes);

const notificationRoutes = require('./routes/notificationRoutes');
app.use('/api/notifications', notificationRoutes);

const dynamicPlaylistsRoutes = require('./routes/dynamicPlaylists');
app.use('/api/dynamic-playlists', dynamicPlaylistsRoutes);

const playlistRoutes = require('./routes/playlists');
app.use('/api/playlists', playlistRoutes);

const recommendationRoutes = require('./routes/recommendations');
app.use('/api/recommendations', recommendationRoutes);

app.use(express.json());

const userPreferences = require('./routes/userPreferences');
app.use('/api', userPreferences);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// backend/index.js

