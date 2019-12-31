<template>
  <div id="MachineReplay">
      <p class="MachineReplay-name">学而思智能客服</p>
      <div class="MachineReplay-content clearfix">
           <div class="MachineReplay-header-img"></div>
           <div class="MachineReplay-text">
               <div class="MachineReplay-text-info">您好，智能客服为您服务！</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MachineReplay'
}
</script>

<style scoped lang="less">
#MachineReplay{
    padding-left:30px;
    margin-bottom:40px;
   
    .MachineReplay-name{
        margin-left: 60px;
        margin-bottom: 10px;
        color:#A1A6AF;
    }
    .MachineReplay-content{
        overflow: hidden;
        padding-right: 100px;
        .MachineReplay-header-img{
            width:40px;
            height: 40px;
            border-radius: 4px;
            background:url('https://res11.xesimg.com/x5mall/img/login-tips_new.png') no-repeat center;
            background-size: cover;
            float:left;
        }
        .MachineReplay-text{
            float: left;
            max-width: 90%;
            position: relative;
            box-sizing: border-box;
            min-height: 42px;
            line-height: 1.4;
            font-size: 13px;
            color: #252525;
            letter-spacing: 0;
            background-color: #f3f3f3;
            padding:10px;
            margin-left:20px;
            border-radius: 3px;
            &::before{
                position: absolute;
                width:0;
                height: 0;
                display: block;
                content: '';
                border:10px solid #f3f3f3;
                border-top-color: transparent;
                border-left-color: transparent;
                border-bottom-color: transparent;
                left:-20px;
                top:5px;
            }
        }
    }
}
</style>
