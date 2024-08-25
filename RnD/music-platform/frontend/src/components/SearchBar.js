import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const SearchInput = styled.input`
    width: 80%;
    padding: 10px;
    border: 1px solid #6200ea;
    border-radius: 5px;
    font-size: 16px;
`;

const SearchResults = styled.div`
    margin: 10px 0;
`;

const ResultItem = styled.div`
    padding: 10px;
    background: #f5f5f5;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #e3f2fd;
    }
`;

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length > 2) {
            const response = await axios.get(`/api/search?query=${e.target.value}`);
            setResults(response.data);
        } else {
            setResults([]);
        }
    };

    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="Search for songs, artists, albums..."
                value={query}
                onChange={handleSearch}
            />
            <SearchResults>
                {results.map((result) => (
                    <ResultItem key={result.id}>
                        {result.name} by {result.artist}
                    </ResultItem>
                ))}
            </SearchResults>
        </SearchWrapper>
    );
};

export default SearchBar;
