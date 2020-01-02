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
            <div class="wrapper" ref="wrapper">
              <div class="cs-window-chat-box clearfix" v-for="(item,index) in  list" :key="index">
                <machine-replay v-if="item.type==='machine'" :data="item"></machine-replay>
                <user-reply v-if="item.type==='user'" :data="item" :userInfo='userInfoData'></user-reply>
              </div>
            </div>
          </div>
          <div  class="cs-window-send-message-box clearfix">
            <div class="cs-window-send-message-input">
              <input v-model="inputValue" type="text" placeholder="请简短描述您的问题">
            </div>
            <div class="cs-window-send-message-btn" @click="sedMessage">发送</div>
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
import UserReply from "@/components/UserReply"
import MachineReplay from "@/components/MachineReplay"
import api from '@/api'
export default {
  name: 'Index',
  data(){
    return {
      userInfo:null,
      list:[],
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
      const {status,data} = await api.changeUser()
      if(status == 1000){
        this.userInfo = data
        this.userInfoData = this.userInfoMessage(data)
      }
    },
    async sedMessage(){
        this.list.push({type:'user',info:this.inputValue})
        this.inputValue = ''
        const {status,data} = await api.sendMessage({msg:this.inputValue,click_id:1})
        if(status===1000){
          this.list.push({type:'machine',info:data})
          this.$nextTick(() => {
              this.$refs.wrapperBox.scrollTo({'behavior': 'smooth', 'top' : this.$refs.wrapper.clientHeight})
          })
        }
    },
    changeUser(){
      this.init()
    }
  }
}
</script>

<style scoped lang="less">

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
      height:1318px;
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
              height: 900px;
              overflow: hidden;
              border-bottom: 1px solid #e7e7e7;
              border-right: 1px solid #e7e7e7;
              overflow-y: scroll;
            }
            .cs-window-send-message-box{
              position: relative;
              width:1200px;
              height: 300px;
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
            height: 990px;
            .cs-user-info{
                padding-top: 40px;
                width:100%;
                height: 900px;
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
              height: 300px;
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
                  margin-top: 38%;
                  cursor: pointer;
              }
            }
          }
        }
    }
}

</style>
