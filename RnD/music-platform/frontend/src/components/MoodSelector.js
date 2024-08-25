import React from 'react';
import styled from 'styled-components';

const MoodSelectorWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

const MoodButton = styled.button`
    background: ${({ selected }) => (selected ? '#6200ea' : '#f5f5f5')};
    color: ${({ selected }) => (selected ? '#fff' : '#6200ea')};
    padding: 10px 20px;
    border: 1px solid #6200ea;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #6200ea;
        color: #fff;
    }
`;

const moods = ['Happy', 'Sad', 'Energetic', 'Relaxed'];

const MoodSelector = ({ selectedMood, onSelectMood }) => {
    return (
        <MoodSelectorWrapper>
            {moods.map(mood => (
                <MoodButton
                    key={mood}
                    selected={selectedMood === mood}
                    onClick={() => onSelectMood(mood)}
                >
                    {mood}
                </MoodButton>
            ))}
        </MoodSelectorWrapper>
    );
};

export default MoodSelector;
