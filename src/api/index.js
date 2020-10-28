
import http from "./axiosBase.js"
export default {
    changeUser:(data)=>http.post('/hackathon/info',data),
    sendMessage:(data)=>http.post('/hackathon/message',data),
    commit:(data)=>http.post('http://localhost:3000/xss/save',data),
    getCommit:()=>http.get('http://localhost:3000/xss/getCommit'),
    cancelOrder:(data)=>http.post('https://ocenter.xueersi.com/MyOrderData/ajaxCancelOrder',data),
    login:(data)=>http.post('http://localhost:3000/xss/login',data),
}