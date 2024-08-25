import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import GenreSelector from '../components/GenreSelector';
import PlaylistManager from '../components/PlaylistManager';
import Notifications from '../components/Notifications';

const HomePage = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const userId = 'your-user-id'; // Replace with actual user ID

    return (
        <div>
            <h1>Welcome to Music Kaum!!</h1>
            <MoodSelector selectedMood={selectedMood} onSelectMood={setSelectedMood} />
            <GenreSelector selectedGenres={selectedGenres} onSelectGenre={setSelectedGenres} />
            <PlaylistManager userId={userId} />
            <Notifications userId={userId} />
        </div>
    );
};

export default HomePage;
