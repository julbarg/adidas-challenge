import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.adidas.com/api/'
});

export default instance;