import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const AdminDashboard = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            const response = await axios.get('/api/analytics');
            setAnalyticsData(response.data);
        };

        fetchAnalytics();
    }, []);

    const data = {
        labels: analyticsData.map(item => item.timestamp),
        datasets: [
            {
                label: 'User Interactions',
                data: analyticsData.map(item => item.count),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }
        ]
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Line data={data} />
        </div>
    );
};

export default AdminDashboard;
