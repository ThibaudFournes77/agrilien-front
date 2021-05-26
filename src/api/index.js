import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agrilienback.herokuapp.com',
});

export default api;
