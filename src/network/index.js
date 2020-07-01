import axios from "axios"
export default {
   getZoomSinger:()=>axios.post('http://localhost:4000',{
    MeetingNumber:76770727407,
    role:1
   })
}


