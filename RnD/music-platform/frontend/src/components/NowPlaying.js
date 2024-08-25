import React, { useState } from 'react';
import styled from 'styled-components';

const NowPlayingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #6200ea;
    color: #fff;
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

const SongInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
`;

const ControlButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        color: #ffeb3b;
    }
`;

const VolumeControl = styled.input`
    margin-left: 20px;
`;

const NowPlaying = ({ song }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(50);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <NowPlayingWrapper>
            <SongInfo>
                <strong>{song.title}</strong>
                <small>{song.artist}</small>
            </SongInfo>
            <Controls>
                <ControlButton onClick={handlePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </ControlButton>
                <ControlButton>⏮</ControlButton>
                <ControlButton>⏭</ControlButton>
                <VolumeControl
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                />
            </Controls>
        </NowPlayingWrapper>
    );
};

export default NowPlaying;
