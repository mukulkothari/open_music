// backend/services/queue.js
const Bull = require('bull');
const playlistQueue = new Bull('playlistQueue', process.env.REDIS_URL);

playlistQueue.process(async (job) => {
    // Process the job here
    console.log('Processing job:', job.data);
});

// Add job to queue
const addJobToQueue = (data) => {
    playlistQueue.add(data);
};

module.exports = { addJobToQueue };
