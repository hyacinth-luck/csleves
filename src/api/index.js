import axios from "axios"
export default {
    changeUser:()=>{axios.post('10.90.100.17:8080/hackathon/info')},
    sendMessage:(data)=>{axios.post('10.90.100.17:8080/hackathon/message',data)}
}