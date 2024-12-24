// src/utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/', // L'URL de ton back-end Express
  timeout: 1000,
});

export default axiosInstance;
