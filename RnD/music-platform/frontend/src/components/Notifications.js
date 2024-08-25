import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const NotificationWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 300px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
`;

const NotificationItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    background: ${({ read }) => (read ? '#f5f5f5' : '#e3f2fd')};
`;

const Notifications = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await axios.get(`/api/notifications/user/${userId}`);
            setNotifications(response.data);
        };

        fetchNotifications();
    }, [userId]);

    return (
        <NotificationWrapper>
            <h2>Notifications</h2>
            {notifications.map(notification => (
                <NotificationItem key={notification._id} read={notification.read}>
                    {notification.message}
                </NotificationItem>
            ))}
        </NotificationWrapper>
    );
};

export default Notifications;
