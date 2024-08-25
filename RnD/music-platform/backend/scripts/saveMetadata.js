// backend/scripts/saveMetadata.js

require('dotenv').config();
const mongoose = require('mongoose');
const fetchBollywoodMetadata = require('../services/fetchBollywoodMetadata.js');
const Song = require('../models/Song.js');

const uri = "mongodb+srv://abnvjain:Abhi%402911@music-platform.e59qx.mongodb.net/?retryWrites=true&w=majority&appName=music-platform";
console.log('MONGODB_URI:', "mongodb+srv://abnvjain:Abhi%402911@music-platform.e59qx.mongodb.net/?retryWrites=true&w=majority&appName=music-platform");

const saveMetadata = async () => {
    try {
        await mongoose.connect(uri);

        const songs = await fetchBollywoodMetadata();
        await Song.insertMany(songs);

        console.log('Bollywood metadata saved successfully');
    } catch (error) {
        console.error('Error saving metadata:', error);
    } finally {
        await mongoose.disconnect();
    }
};

saveMetadata();



