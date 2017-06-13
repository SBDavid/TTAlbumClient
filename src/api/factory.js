import axios from 'axios';


var instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 3000,
});

// Add a response interceptor 
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.data && error.response.data.errorcode === 601) {
        // Do something with response error 
        var errorRes = {
            data: {
                document: {
                    title: '服务自定义错误',
                },
                components: 
                [
                    {
                        template: 'Error',
                        id: 1,
                        data: {
                            title: 'Api通信错误',
                            message: error.message,
                            detail: JSON.stringify(error.response.data),
                        }
                    }
                ]
            }
        }
        return Promise.resolve(errorRes);
    } else {
        return Promise.reject(error);
    }
  }
);

export default instance;