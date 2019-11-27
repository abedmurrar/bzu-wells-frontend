import axios from 'axios';

export default axios.create({
    baseURL: process.REACT_APP_BASE_URL,
});
