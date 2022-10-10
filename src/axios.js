import axios from 'axios';

const instance = axios.create({
    baseURL: 'gs://clone-bb199.appspot.com' // THE API (cloud function) URL
});

export default instance;