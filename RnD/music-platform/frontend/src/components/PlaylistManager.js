import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaylistWrapper = styled.div`
    margin: 20px;
`;

const PlaylistItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #f5f5f5;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const PlayButton = styled.button`
    background: #4caf50;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #45a049;
    }
`;

const PlaylistManager = ({ userId }) => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            const response = await axios.get(`/api/playlists/user/${userId}`);
            setPlaylists(response.data);
        };

        fetchPlaylists();
    }, [userId]);

    return (
        <PlaylistWrapper>
            <h2>Your Playlists</h2>
            {playlists.map(playlist => (
                <PlaylistItem key={playlist._id}>
                    <span>{playlist.name}</span>
                    <PlayButton>Play</PlayButton>
                </PlaylistItem>
            ))}
        </PlaylistWrapper>
    );
};

export default PlaylistManager;
