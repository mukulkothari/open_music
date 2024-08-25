import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CreatePlaylistWrapper = styled.div`
    margin: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #6200ea;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const CreateButton = styled.button`
    background: #6200ea;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: #4b00b5;
    }
`;

const CreatePlaylist = ({ userId, onPlaylistCreated }) => {
    const [playlistName, setPlaylistName] = useState('');

    const handleCreate = async () => {
        const newPlaylist = { name: playlistName, userId };
        const response = await axios.post('/api/playlists', newPlaylist);
        onPlaylistCreated(response.data);
        setPlaylistName('');
    };

    return (
        <CreatePlaylistWrapper>
            <h2>Create New Playlist</h2>
            <Input
                type="text"
                placeholder="Playlist Name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
            />
            <CreateButton onClick={handleCreate}>Create Playlist</CreateButton>
        </CreatePlaylistWrapper>
    );
};

export default CreatePlaylist;
