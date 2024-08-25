const Queue = require('bull');
const playlistQueue = new Queue('playlistQueue', 'redis://127.0.0.1:6379');

playlistQueue.process(async (job) => {
    // Process job
    const { userId } = job.data;
    await generatePlaylistForUser(userId); // Replace with actual processing function
});

const addJobToQueue = (userId) => {
    playlistQueue.add({ userId });
};

module.exports = { addJobToQueue };
