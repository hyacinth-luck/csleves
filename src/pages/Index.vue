<template>
  <div id="indexPage">
    <div class="cs-box">
      <div class="cs-header">
        <div class="cs-header-img"></div>
        <div class="cs-header-name">学而思网校客服</div>
      </div>
      <div class="cs-content clearfix">
        <div class="cs-window">
          <div class="cs-window-visible">
            <machine-replay></machine-replay>
            <user-reply></user-reply>
          </div>
          <div  class="cs-window-send-message-box">
            <!-- <div class="cs-window-send-message-emoji"></div> -->
            <div class="cs-window-send-message-input">
              <pre contenteditable="true" name="send-box"></pre>
            </div>
            <div class="cs-window-send-message-btn" @click="sedMessage">发送</div>
          </div>
        </div>
        <div class="cs-user-message">
          <div class="cs-user-info"></div>
          <div class="cs-change-user-btn"></div>
          <div class="cs-change-eva-example-btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserReply from "@/components/UserReply"
import MachineReplay from "@/components/MachineReplay"
export default {
  name: 'Index',
  components:{
    UserReply,
    MachineReplay
  },
  methods:{
    sedMessage(){
      
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
    .cs-box{
      background-color: #fff;
      width:1130px;
      height: 900px;
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
            .cs-window-visible{
              width:800px;
              padding-top: 40px;
              height: 682px;
              overflow-x: hidden;
              overflow-y:scroll;
              border-bottom: 1px solid #e7e7e7;
              border-right: 1px solid #e7e7e7;
            }
            .cs-window-send-message-box{
              position: relative;
              width:800px;
              height: 110px;
              .cs-window-send-message-emoji{
                width:100%;
                height: 32px;

              }
              .cs-window-send-message-input{
                width:100%;
                height: 56px;
                pre{
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
                right: 5px;
                bottom: 10px;
                cursor: pointer;
              }

            }
          }
          .cs-user-message{
            position: absolute;
            right: 0;
            top:0;
            width:330px;
            height: 990px;
          }
        }
    }
}

</style>
