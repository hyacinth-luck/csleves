import axios from "axios"
import { Toast } from 'vant';
axios.defaults.baseURL = 'http://10.90.72.59:8080'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if(response.status===200){
        return response.data
    }
    Toast('出错了请重试哦！')
    return response
  }, function (error) {
    console.log('error:',error)
    Toast('出错了请重试哦！')
    return {stat:0,data:'数据出错'};
  });
export default axios
