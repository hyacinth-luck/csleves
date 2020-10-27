<template>
  <div class="CSRF">
     <div class="csrf-info">
      <h2 class="info">CSRF攻击：</h2>
      <button @click="cancelOrder">取消订单</button>
      <!-- https://ocenter.xueersi.com/MyOrderData/ajaxCancelOrder -->
      <!-- orderNum: 201028005640001662109925 -->
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
      commitCheck:''
    }
  },
  mounted () {
   
  },
  methods: {
     async cancelOrder () {
    await api.cancelOrder({orderNum:'201028015125001650449925'})
    }
  }
}
</script>
<style lang="less">
.CSRF{
  width: 100%;
  height: 100vh;
  background-color: #fff;
  text-align: center;
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