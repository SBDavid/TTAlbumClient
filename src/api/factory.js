import axios from 'axios';


var instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 3000,
});

// Add a response interceptor 
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.info(error)
    if (error.message === "Network Error" || error.response.status === 404) {
        // Do something with response error 
        var errorRes = {
            data: {
                repository:{
                    head: {
                        title: '网络错误',
                    },
                    body: {
                        node:[
                            {
                                templateId: 'Error',
                                sort: 1,
                                data: {
                                    title: 'Api无法通信',
                                    message: error.message,
                                    detail: JSON.stringify(error.stack),
                                }
                            }
                        ]
                    },
                },
            }
        }
        return Promise.resolve(errorRes);
    } else {
        return Promise.reject(error);
    }
  }
);

export default instance;