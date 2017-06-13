import axios from 'axios';

console.info(process.env.REACT_APP_API_DOMAIN);

var instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 3000,
});

export default instance;