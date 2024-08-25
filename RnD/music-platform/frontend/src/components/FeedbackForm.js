import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ userId }) => {
    const [feedbackType, setFeedbackType] = useState('recommendation');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/feedback/submit', { userId, feedbackType, message });
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Feedback Type:
                <select value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
                    <option value="recommendation">Recommendation</option>
                    <option value="general">General</option>
                </select>
            </label>
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
