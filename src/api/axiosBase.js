import axios from "axios"
axios.defaults.baseURL = 'http://10.90.72.59:8080'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if(response.status===200){
        return response.data
    }
    return response
  }, function (error) {
    return Promise.reject(error);
  });
export default axios
