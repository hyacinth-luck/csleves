<template>
  <div id="UserReply">
      <p class="UserReply-name">用户9127634823</p>
      <div class="UserReply-content clearfix">
           <div class="UserReply-header-img"></div>
           <div class="UserReply-text">
               <div class="UserReply-text-info">lalal！</div>
            </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'UserReply'
}
</script>

<style scoped lang="less">
#UserReply{
    padding-right:30px;
    margin-bottom:40px;
    .UserReply-name{
        margin-right: 60px;
        margin-bottom: 10px;
        color:#A1A6AF;
        text-align: right;
    }
    .UserReply-content{
        .UserReply-header-img{
            width:40px;
            height: 40px;
            border-radius: 4px;
            background:url('https://res11.xesimg.com/x5mall/img/login-tips_new.png') no-repeat center;
            background-size: cover;
            float:right;
        }
        .UserReply-text{
            float: right;
            max-width: 80%;
            position: relative;
            box-sizing: border-box;
            min-height: 42px;
            line-height: 1.4;
            font-size: 13px;
            color: #252525;
            letter-spacing: 0;
            background-color: #f3f3f3;
            padding:10px;
            margin-right:20px;
            border-radius: 3px;
            &::before{
                position: absolute;
                width:0;
                height: 0;
                display: block;
                content: '';
                border:10px solid #f3f3f3;
                border-top-color: transparent;
                border-right-color: transparent;
                border-bottom-color: transparent;
                right:-19px;
                top:5px;
            }

        }

    }

}

</style>
