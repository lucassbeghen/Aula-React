import axios from 'axios';

const apiGithub = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${process.env.REACT_APP_TOKEN_GITHUB}`
    }
})

export default apiGithub;