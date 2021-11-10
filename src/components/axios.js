import axios from 'axios';

export const instanceUsers = axios.create({
    baseURL: 'https://bookwise-backend.herokuapp.com'
})
