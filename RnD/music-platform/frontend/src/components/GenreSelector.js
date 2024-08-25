import React from 'react';
import styled from 'styled-components';

const GenreSelectorWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
`;

const GenreButton = styled.button`
    background: ${({ selected }) => (selected ? '#03a9f4' : '#f5f5f5')};
    color: ${({ selected }) => (selected ? '#fff' : '#03a9f4')};
    padding: 10px 20px;
    border: 1px solid #03a9f4;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    transition: all 0.3s ease;

    &:hover {
        background: #03a9f4;
        color: #fff;
    }
`;

const genres = ['Pop', 'Rock', 'Classical', 'Jazz', 'Bollywood'];

const GenreSelector = ({ selectedGenres, onSelectGenre }) => {
    const handleGenreClick = genre => {
        onSelectGenre(
            selectedGenres.includes(genre)
                ? selectedGenres.filter(g => g !== genre)
                : [...selectedGenres, genre]
        );
    };

    return (
        <GenreSelectorWrapper>
            {genres.map(genre => (
                <GenreButton
                    key={genre}
                    selected={selectedGenres.includes(genre)}
                    onClick={() => handleGenreClick(genre)}
                >
                    {genre}
                </GenreButton>
            ))}
        </GenreSelectorWrapper>
    );
};

export default GenreSelector;
