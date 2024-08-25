import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationPreferences = ({ userId }) => {
    const [preferences, setPreferences] = useState({});

    useEffect(() => {
        const fetchPreferences = async () => {
            const response = await axios.get(`/api/users/${userId}/preferences`);
            setPreferences(response.data);
        };

        fetchPreferences();
    }, [userId]);

    const handleChange = async (e) => {
        const { name, checked } = e.target;
        await axios.post(`/api/users/${userId}/preferences`, { [name]: checked });
        setPreferences(prev => ({ ...prev, [name]: checked }));
    };

    return (
        <div>
            <h2>Notification Preferences</h2>
            <label>
                <input
                    type="checkbox"
                    name="recommendations"
                    checked={preferences.recommendations}
                    onChange={handleChange}
                />
                Recommendations
            </label>
            <label>
                <input
                    type="checkbox"
                    name="playlistUpdates"
                    checked={preferences.playlistUpdates}
                    onChange={handleChange}
                />
                Playlist Updates
            </label>
        </div>
    );
};

export default NotificationPreferences;
