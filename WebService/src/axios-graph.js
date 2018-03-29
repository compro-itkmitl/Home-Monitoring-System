import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://compro-home-monitoring.firebaseio.com/'
});

export default instance;