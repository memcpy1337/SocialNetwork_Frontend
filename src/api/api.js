import * as axios from "axios";

const defaultOptions = {
    baseURL: 'https://localhost:44364/api/',
    allowCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


export const getUserPage = (currentPage = 1, pageSize = 10) => {
    debugger;
    return instance.get('users/GetUserPage/page=' + currentPage + '/count=' + pageSize
    ).then(response => {
        return response.data;
    });
}

export const getMe = () => {
    return new Promise(function (resolve, reject) {
        instance.get('users/GetMe').then(response => {
            if (response.status == 200) {
                resolve(response.data.data);
            } else {
                reject(response.status);
            }
        });
    })
}
export const getUserProfile = (id) => {
    return instance.get('users/GetUserProfile/id=' + id
    ).then(response => {
        debugger;
        return response.data;
    });
}

export const onLogin = (login, password) => {
    return new Promise(function (resolve, reject) {
        axios.get('https://localhost:44364/api/token/Get/usr=' + login + '/pass=' + password,
            {
                withCridentials: true
            }).then(response => {
                if (response.status == 200) {
                    resolve(response.data);
                } else {
                    reject(response.status);
                }
            });
    })
}

