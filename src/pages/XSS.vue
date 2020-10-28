<template>
  <div class="XSS">
     <div class="xss-info">
      <h2> 反射型攻击：</h2>
      <a href="http://localhost:3000/xss/badUrl">恶意链接</a>
    </div>
    <div class="xss-info">
      <h2> 存储型攻击：</h2>
      <span>评论：</span>
      <input v-model="value"/>
      <button @click="commit">submit</button>
      <div class="info">
        评论提交结果查看：<p v-html="commitV"> </p>
      </div>
      <!-- 
        提交评论型攻击：
        <img src="asd" onerror="alert('存储型攻击')"/> -->
    </div>
     <div class="xss-info">
      <h2> dom攻击：</h2>
        <span onclick="alert(window.document.cookie)">click me!</span>
    </div>

    <!-- <div class="info">示例：</div>
    <button @click="cancelOrder">取消订单</button> -->
     <!-- https://ocenter.xueersi.com/MyOrderData/ajaxCancelOrder -->
      <!-- orderNum: 201028005640001662109925 -->

    <div class="xss-info">
      <h2> xss 防攻击</h2>
      <span onclick="alert(window.document.cookie)">http only</span>
      <div class="info">
        <span >展示检查：</span>
        <!-- <div class="info">
          评论提交结果查看：<p v-html="$xss(commitV)"> </p>
        </div> -->
      </div>

      <div class="info">
        <span >提交检查：</span>
        <div class="info">
         提交评论：<input v-model="commitCheck"/>
          <!-- <img src="asd" onerror="alert('存储型攻击')"/> -->
         <p>{{commitCheckInfo}}</p>
        </div>
      </div>
      
    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import api from "@/api"
import xss from 'xss' // xss防御
export default {
  name:'XSS',
  data(){
    return {
      value:'',
      valueCheck:'',
      commitV:'',
      commitCheck:''
    }
  },
  computed:{
    commitCheckInfo(){
      return xss(this.commitCheck)
    }

  },
  mounted () {
    // 存储型攻击
    this.getCommit()
  //  xss攻击防御
  if(Vue){
     Object.defineProperty(Vue.prototype, '$xss', {
      value: xss
    })

  }
   
  },
  methods: {
    async commit(){
      const res = await api.commit({data: this.value})
      console.log(res)
    },
   async getCommit(){
    const {data} = await api.getCommit()
    this.commitV = data.data
    }
  }
}
</script>
<style lang="less">
.XSS{
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  text-align: center;
  padding-bottom: 10%;
  input{
    border:1px solid #333;
  }
  .xss-info{
    h2{
       color: green;
       font-size: 30px;
       text-align: center;
       margin-bottom: 1%;
       padding-top:2%;
    }
  }
  .info{
    margin:20px;
  }
}



</style>