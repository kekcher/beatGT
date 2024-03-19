import axios from "axios";

const BeatGTApi = axios.create({
    baseURL: '',//Здесь путь до бэка, 
    headers: {
        'Content-Type': 'application/json',
    }
});

//Интерцепторы
BeatGTApi.interceptors.request.use(
    (config) => {
        // Получаем JWT
        const token = localStorage.getItem('jwtToken'); //Получение токена из loacalStorage;
        if (token) {
            // Если JWT существует, добавляем его в заголовки запроса
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

BeatGTApi.interceptors.response.use(res => {
    if (res.status === 401) {
        localStorage.clear();
        window.location.pathname = '/home';
        return Promise.reject(res);
    }
    const newToken = res.headers['x-auth-token']; // Если пришёл, новый токен
    if (newToken) {
        // Если новый JWT пришел в ответе, сохраняем его в localStorage
        localStorage.setItem('jwtToken', newToken);
    }
    return Promise.resolve(res.data || res);
},
    (error) => {
        localStorage.clear();
        window.location.pathname = '/home';
        return Promise.reject(error);
    }
);