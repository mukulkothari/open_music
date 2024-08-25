// backend/services/notificationSocket.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const sendNotification = (userId, message) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.userId === userId) {
            client.send(JSON.stringify({ message }));
        }
    });
};

wss.on('connection', (ws, req) => {
    const userId = req.headers['user-id'];
    ws.userId = userId;

    ws.on('message', message => {
        console.log(`Received message: ${message}`);
    });

    ws.on('close', () => {
        console.log(`Connection closed for user: ${userId}`);
    });
});

module.exports = { sendNotification };
