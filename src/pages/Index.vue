/* eslint-disable vue/no-dupe-keys */
<template>
  <div id="indexPage">
    <div class="cs-box">
      <div class="cs-header">
        <div class="cs-header-img"></div>
        <div class="cs-header-name">学而思网校客服</div>
      </div>
      <div class="cs-content clearfix">
        <div class="cs-window">
          <div class="cs-window-visible" ref="wrapperBox">
            <van-loading class="loading-box" v-if="loading" type="spinner" color="#1989fa" />
            <div class="wrapper" ref="wrapper">
              <div class="cs-window-chat-box clearfix" v-for="(item,index) in  list" :key="index">
                <machine-replay v-if="item.type==='machine'" :data="item"></machine-replay>
                <user-reply v-if="item.type==='user'" :data="item" :userInfo='userInfoData'></user-reply>
              </div>
            </div>
          </div>
          <div  class="cs-window-send-message-box clearfix">
            <div class="cs-window-send-message-input">
              <input v-model="inputValue" type="text" placeholder="请简短描述您的问题" @keyup.enter="sedMessage">
            </div>
            <div class="cs-window-send-message-btn"  @click="sedMessage">发送</div>
          </div>
        </div>
        <div class="cs-user-message">
          <ul class="cs-user-info">
              <li v-for="(student,index) in userInfo" :key="index" class="cs-user-info-box-li"> 
                <span class="cs-user-info-name"> {{student|studentDescFmt}} :</span> 
                <div class="cs-user-info-decs">
                  <span v-if="studentDescComputed(student).length==1">{{ studentDescComputed(student)[0] }}</span>
                  <div v-else class="cs-user-info-decs-box">
                    <span v-for="(desc,i) in studentDescComputed(student)" :key="i">{{desc}}</span>
                  </div>
                </div>
              </li>
          </ul>
          <div class="cs-change-user-btn" >
            <span @click="changeUser">更换测试用户</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import  "@/mockData/index.js"
import { Toast} from 'vant';
import UserReply from "@/components/UserReply"
import MachineReplay from "@/components/MachineReplay"
import api from '@/api'
import { setTimeout } from 'timers';
export default {
  name: 'Index',
  data(){
    return {
      userInfo:null,
      list:[],
      loading:false,
      scroll,
      inputValue:'',
      userInfoData:null
    }
  },
  filters:{
    studentDescFmt(value){
      const arr = value
      return  Object.keys(arr)[0]
    }
  },
  components:{
    UserReply,
    MachineReplay
  },
  created(){
    this.init()
  },
  computed:{
    userInfoMessage(){
      return (list)=>{
        let userI = {
          name:'',
          userId:''
        }
        for (let item of list){
          if(Object.keys(item)[0] === '用户昵称'){
            userI.name = item['用户昵称'][0]
          }
          if(Object.keys(item)[0] === '用户ID'){
            userI.userId = item['用户ID'][0] 
          }
        }
        return userI
      }
    },
    studentDescComputed(){
      return (student)=>{
        const keyInfo = Object.keys(student)[0]
        let info = student[keyInfo]
        return info
      }
    }
  },
  methods:{
    init(){
       this.inputValue = ''
       this.list = []
       let initData = {type:'machine',info:{reply:'您好，智能客服为您服务！',click_info:[]}}
       this.list.push(initData)
       this.getUserMessage()
    },
    async getUserMessage(){
      console.log('更换')
      const {status,data} = await api.changeUser()
      if(status == 1000){
        this.userInfo = data
        this.userInfoData = this.userInfoMessage(data)
      }
    },
    async sedMessage(){
      console.log('键盘')
       if(this.inputValue===''){
         Toast('请填写有效信息！')
         return
       }
        this.list.push({type:'user',info:this.inputValue})
        this.loading = true
        const {status,data} = await api.sendMessage({msg:this.inputValue,click_id:1})
        if(status===1000){
          this.inputValue = ''
          setTimeout(()=>{
              this.loading = false
              this.list.push({type:'machine',info:data})
              this.$nextTick(() => {
                  this.$refs.wrapperBox.scrollTo({'behavior': 'smooth', 'top' : this.$refs.wrapper.clientHeight})
              })
          },200)
        
        }else{
           Toast('出错了请重试哦！')
           this.loading = false
        }
    },
    changeUser(){
      this.init()
    }
  }
}
</script>

<style scoped lang="less">
.loading-box{
  position: absolute;
  top:25%;
  left:30%;
  z-index: 200;
}

#indexPage{
    padding-top: 3%;
    opacity: 1;
    background-color: #2e2f3d;
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 3%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size:20px;
    .cs-box{
      background-color: #fff;
      width:1800px;
      height:1018px;
      min-height: 516px;
      margin:0 auto;
      border-radius: 5px;
        .cs-header{
          width:100%;
          height: 50px;
          background-color: #fafafa;
          overflow: hidden;
          padding-top:10px;
          border-bottom: 1px solid #e7e7e7;
          .cs-header-img{
            margin-left:10px;
            width:40px;
            height: 40px;
            border-radius: 3px;
            background: url('https://res11.xesimg.com/x5mall/img/login-tips_new.png') no-repeat center;
            background-size: cover;
            float: left;
          }
          .cs-header-name{
            float: left;
            line-height: 40px;
            margin-left:20px;
          }
        }
        .cs-content{
          position: relative;
          .cs-window{
            position: absolute;
            left: 0;
            top:0;
            width: 100%;
            height: 1200px;;
            .cs-window-visible{
              width:1200px;
              padding-top: 40px;
              height: 700px;
              overflow: hidden;
              border-bottom: 1px solid #e7e7e7;
              border-right: 1px solid #e7e7e7;
              overflow-y: scroll;
            }
            .cs-window-send-message-box{
              position: relative;
              width:1200px;
              height: 200px;
              padding-top:15px;
              border-right: 1px solid #e7e7e7;
              .cs-window-send-message-input{
                height: 150px;
                input{
                  width:1000px;
                  height: 100%;
                  padding:5px 20px;
                }
              }
              .cs-window-send-message-btn{
                width: 70px;
                height: 30px;
                line-height: 30px;
                color:#343036;
                background-color: #fff;
                border-radius: 3px;
                border:1px solid #e7e7e7;
                text-align: center;
                position: absolute;
                right: 50px;
                bottom: 50px;
                cursor: pointer;
              }

            }
          }
          .cs-user-message{
            position: absolute;
            right: 0;
            top:0;
            width:600px;
            height: 790px;
            .cs-user-info{
                padding-top: 40px;
                width:100%;
                height: 700px;
                border-bottom: 1px solid #e7e7e7;
                overflow-y: scroll;
                  .cs-user-info-box-li{
                    color:#5a606b;
                    margin-left:20px;
                    margin-bottom:20px;
                    line-height: 30px;
                    overflow: hidden;
                    max-width: 85%;
                    .cs-user-info-name{
                      float: left;
                    }
                    .cs-user-info-decs{
                      float: left;
                      color:black;
                      max-width: 80%;
                      .cs-user-info-decs-box{
                        &>span{
                          display:block;
                          margin-bottom: 10px;
                          &:last-child{
                            margin-bottom: 0px;
                          }
                        }

                      }

                    }

                  }
            }
            .cs-change-user-btn{
              width:100%;
              height: 200px;
              &>span{
                  display: inline-block;
                  width: 150px;
                  height: 45px;
                  background: red;
                  border-radius: 3px;
                  line-height: 45px;
                  text-align: center;
                  color: #fff;
                  margin-left: 40%;
                  margin-top: 20%;
                  cursor: pointer;
              }
            }
          }
        }
    }
}

</style>
