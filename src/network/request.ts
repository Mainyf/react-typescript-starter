import axios from 'axios';

const NAME = 'name';

const service = axios.create({
    baseURL: '/api/',
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        config.headers[NAME] = 'Mainyf';
        return config;
    },
    error => {
        // 发送失败
        console.log(error);
        Promise.reject(error);
    }
);

export default service;

