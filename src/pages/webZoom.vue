/* eslint-disable vue/no-dupe-keys */
<template>
  <div id="webZoom">
    webZoom
  </div>
</template>

<script>
import { ZoomMtg } from '@zoomus/websdk';
import api from "@/network"
export default {
  name: 'webZoom',
  data(){
    return {
      signature:''
    }
  },
  filters:{
  },
  components:{
  },
  created(){
    console.log('欢迎来到直播间')
    this.getSinger()
  },
  mounted(){
    this.$nextTick(()=>{
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareJssdk();
      this.init()
    })
  },
  computed:{
  },
  methods:{
    async getSinger(){
      const res = await api.getZoomSinger()
      this.signature = res.signature
    },
   init(){
    var apiKey = 'RlhWQWVLS0JYeU92UzJRcEs2WmFaZz09'
    var meetingNumber = 76770727407
    var leaveUrl = 'https://baidu.com:8080/webZoom/'
    var userName = 'webzoom'
    var userEmail = 'dsy_9_9@163.com'
    var passWord = '0e1APZ'
     ZoomMtg.init({
        leaveUrl: leaveUrl,
        isSupportAV: true,
        success: (success) => {
          console.log('zoom init成功',success)
          ZoomMtg.join({
            signatrue: this.signature,
            meetingNumber: meetingNumber,
            userName: userName,
            apiKey: apiKey,
            userEmail: userEmail,
            passWord: passWord,
            success: (success) => {
              console.log('加入直播间成功：',success)
            },
            error: (error) => {
              console.log('加入直播间失败：',error)
            }
          })

        },
        error: (error) => {
          console.log(error)
        }
      })
   }
  }
}
</script>

<style scoped lang="less">
</style>
