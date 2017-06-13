import axios from 'axios';


var instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 3000,
});

// Add a response interceptor 
instance.interceptors.response.use(function (response) {
    // Do something with response data 
    return response;
  }, function (error) {
    // Do something with response error 
    var errorRes = {
        data: {
            document: {
                title: '出错了',
            },
            components: 
            [
                {
                    template: 'Error',
                    id: 1,
                    data: {
                        title: 'Api通信错误',
                        message: error.message,
                        detail: error.stack,
                    }
                }
            ]
        }
    }
    console.info(errorRes);
    return Promise.resolve(errorRes);
  }
);

export default instance;