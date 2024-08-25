import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoodSelector from './components/MoodSelector';
import GenreSelector from './components/GenreSelector';
import PlaylistManager from './components/PlaylistManager'; // New component
import SocialShare from './components/SocialShare';
import FeedbackForm from './components/FeedbackForm';
import Notifications from './components/Notifications';
import NotificationPreferences from './components/NotificationPreferences';


function App() {
    const [mood, setMood] = useState('');
    const [genres, setGenres] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const userId = 'your-user-id';

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/recommendations', { mood, genres });
            setRecommendations(response.data);
        } catch (error) {
            console.error('Error fetching recommendations', error);
        }
    };

    const fetchPlaylists = async () => {
        try {
            const response = await axios.get('/api/playlists/USER_ID'); // Replace USER_ID with actual user ID
            setPlaylists(response.data);
        } catch (error) {
            console.error('Error fetching playlists', error);
        }
    };

    return (
        <div className="App">
            <h1>Music Recommendation System</h1>
            <MoodSelector setMood={setMood} />
            <GenreSelector setGenres={setGenres} />
            <button onClick={handleSubmit}>Get Recommendations</button>
            <button onClick={fetchPlaylists}>Load Playlists</button>
            <PlaylistManager playlists={playlists} /> {/* Display playlists */}
            <ul>
                {recommendations.map(song => (
                    <li key={song.id}>{song.name} by {song.artists.join(', ')}</li>
                ))}
                {playlists.map(playlist => (
                <div key={playlist._id}>
                    <h2>{playlist.name}</h2>
                    <SocialShare playlist={playlist} />
                    <PlaylistManager userId={userId} />
                    <FeedbackForm userId={userId} />
                    <Notifications userId={userId} />
                    <NotificationPreferences userId={userId} />
                    
                    <Route>
                        <Routes>
                            <Route path="../pages/HomePage" element={<HomePage />} />
                        </Routes>
                    </Route>
                </div>
            ))}
            </ul>
        </div>
    );
}

export default App;
