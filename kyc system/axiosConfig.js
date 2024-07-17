import axios from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
  
  baseURL:'http://192.168.29.5:8000/api/v1' ,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;
