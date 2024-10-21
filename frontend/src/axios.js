// src/axios.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,  // Timeout in milliseconds
  headers: {
    'Authorization': 'Bearer token'
  }
});

export default axiosInstance;
