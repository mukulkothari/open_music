import axios from 'axios';

const submitPreferences = async (mood, genre) => {
    try {
        const response = await axios.post('/api/preferences', { mood, genre });
        console.log(response.data);
    } catch (error) {
        console.error('There was an error submitting preferences!', error);
    }
};

export default submitPreferences;
