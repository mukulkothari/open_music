import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProfileWrapper = styled.div`
    margin: 20px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`;

const ProfileItem = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #6200ea;
    border-radius: 5px;
`;

const SaveButton = styled.button`
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

const UserProfile = ({ userId }) => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        preferredGenres: [],
    });

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setProfile(response.data);
        };

        fetchProfile();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = async () => {
        await axios.put(`/api/users/${userId}`, profile);
        alert('Profile updated successfully');
    };

    return (
        <ProfileWrapper>
            <h2>User Profile</h2>
            <ProfileItem>
                <Label>Name</Label>
                <Input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                />
            </ProfileItem>
            <ProfileItem>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                />
            </ProfileItem>
            <SaveButton onClick={handleSave}>Save Changes</SaveButton>
        </ProfileWrapper>
    );
};

export default UserProfile;
