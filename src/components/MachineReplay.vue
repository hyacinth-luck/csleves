<template>
  <div id="MachineReplay">
      <p class="MachineReplay-name">学而思智能客服</p>
      <div class="MachineReplay-content clearfix">
            <div class="MachineReplay-header-img"></div>
            <div class="MachineReplay-text">
               <div class="MachineReplay-text-info">{{data.info.reply}}</div>
            </div>
            <ul class="MachineReplay-table" v-if="data.info.click_info.length>0">
                <li class="MachineReplay-table_item" v-for="(item, index) in data.info.click_info" :key = "index" @click="selectedQ(item)">
                    <span class="MachineReplay-table_item_q">{{qList(item)}}</span>
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  props:{
      data:{
          default:{type:'machine',info:{reply:'您好，智能客服为您服务！',click_info:[]}}
      }
  },
  name: 'MachineReplay',
  computed:{
    qList(){
        return (item)=>{
            console.log('item:',item)
          return this.$parent.studentDescComputed(item)
        }
    }
  },
  methods:{
      async selectedQ(item){
          const msg =this.$parent.studentDescComputed(item)
          const keyMsg = Object.keys(item)[0]
          const {status,data} = await api.sendMessage({msg:msg,click_id:keyMsg})
          if(status===1000){
          this.$parent.list.push({type:'machine',info:data})
          this.$nextTick(() => {
              this.$parent.$refs.wrapperBox.scrollTo({'behavior': 'smooth', 'top' : this.$parent.$refs.wrapper.clientHeight})
          })
        }
          

      }
  }
}
</script>

<style scoped lang="less">
#MachineReplay{
    font-size:20px;
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
            max-width: 90%;
            display: inline-block;
            position: relative;
            box-sizing: border-box;
            min-height: 42px;
            line-height: 1.4;
            font-size: 13px;
            color: #252525;
            letter-spacing: 0;
            background-color: #f3f3f3;
            padding:10px;
            margin-left:14px;
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
        .MachineReplay-table{
            max-width: 85%;
            margin-left:42px;
            border:1px solid #F2F2F2;
            padding:10px 15px;
            border-radius: 5px;
            margin-top:15px;
            .MachineReplay-table_item{
                color: #5A606B;
                padding:10px 0;
                min-height: 50px;
                line-height: 30px;
                border-bottom: 1px solid #F2F2F2;
                font-size: 18px;
                cursor: pointer;
                &:last-child{
                    border-bottom:none;
                }
                span{
                    position: relative;
                    width:95%;
                    display: inline-block;
                    &::before{
                        position:absolute;
                        content: '';
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border-right: 1px solid #A1A6AF;
                        border-bottom: 1px solid #A1A6AF;
                        margin-left: 8px;
                        transform: rotate(-45deg);
                        position: absolute;
                        right: -20px;
                        top: 50%;
                    }
                }
            }

        }
    }
}
</style>
