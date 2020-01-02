
import http from "./axiosBase.js"
export default {
    changeUser:(data)=>http.post('/hackathon/info',data),
    sendMessage:(data)=>http.post('/hackathon/message',data)
}