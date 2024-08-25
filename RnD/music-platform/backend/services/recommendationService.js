// backend/services/recommendationService.js

const Song = require('../models/Song');
const redisClient = require('../config/redisClient');

// Extend recommendation logic to include more song features
const recommendSongs = async (mood, genres, page = 1, limit = 30) => {
    const cacheKey = `recommendations:${mood}:${genres.join(',')}:${page}`;
    const user = await User.findById(userId);
    const { avoidGenres, avoidArtists } = user.preferences;

    const cachedData = await redisClient.getAsync(cacheKey);
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const moodMap = {
        happy: { minPopularity: 60, minEnergy: 0.6 },
        sad: { minPopularity: 30, maxEnergy: 0.2 },
        energetic: { minPopularity: 70, minEnergy: 0.8 },
        calm: { minPopularity: 40, maxEnergy: 0.4 },
    };

    const genreMap = {
        pop: ['Pop', 'Dance Pop', 'Electropop'],
    rock: ['Rock', 'Alternative Rock', 'Hard Rock'],
    classical: ['Classical', 'Baroque', 'Romantic'],
    jazz: ['Jazz', 'Smooth Jazz', 'Bebop'],
    // Add more genres as needed
    };

    const { minPopularity, maxEnergy, minEnergy } = moodMap[mood] || { minPopularity: 50 };

    const genreFilters = genres.flatMap(genre => genreMap[genre] || []);

    const query = {
        popularity: { $gte: minPopularity },
        ...(maxEnergy ? { energy: { $lte: maxEnergy } } : {}),
        ...(minEnergy ? { energy: { $gte: minEnergy } } : {}),
        ...(genreFilters.length ? { genre: { $in: genreFilters } } : {}),
        ...(avoidGenres.length ? { genre: { $nin: avoidGenres } } : {}),
        ...(avoidArtists.length ? { artists: { $nin: avoidArtists } } : {}),
    };

    const recommendedSongs = await Song.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

    redisClient.setex(cacheKey, 3600, JSON.stringify(recommendedSongs));

    return recommendedSongs;
};
