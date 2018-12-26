import axios, {AxiosRequestConfig} from 'axios';

const NAME = 'name';

const service = axios.create({
    baseURL: '/api/',
    timeout: 5000
});

service.interceptors.request.use(
    function(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
        config.headers[NAME] = 'Mainyf';
        return config;
    },
    function(error: number) {
        console.log(error);
        return Promise.reject(error);
    }
);

export default service;

