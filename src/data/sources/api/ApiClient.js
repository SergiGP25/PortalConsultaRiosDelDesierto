import axios from 'axios';

// You can change this base URL to your actual API endpoint
const API_BASE_URL = 'http://localhost'; // Updated to user's port

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
