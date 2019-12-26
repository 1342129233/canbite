<!-- 大额监控 -->
<template>
  <div class="information" style="background:#FFF;">
    <ul class="tab-head">
        <li 
          :class="{active:informationsIndex==item.cur_id}"
          class="tab-head-item" 
          v-for="(item) in informations" 
          :key="item.cur_id"
          @click="chenges(item.cur_id)" 
        >
        <!-- {{item.cur_name}} -->
          <router-link :to="{name:item.cur_name}">{{item.cur_name}}</router-link>
        </li>
    </ul>
    <div class="content_dang">

    </div>
    <div class="content">
        <div class="header">
            <div v-for="item in headerName" class="header_small" @click="doer(item)">
                {{item}}
                <div :class="{header_small_dev:discon == item}"></div>
            </div>
        </div>
    </div>


    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from "better-scroll"

import rem from '@/components/js/rem.js';
export default {
  name:'information', 
  created(){
      this.$store.dispatch('loaddata');
  },
  data () {
    return {
      rem,
      discon:'大额转账',
      headerName:['大额转账'],
      //大额交易数据
      //头
      informations:[],
      //默认是第一个BTC
      informationsIndex: 1
    };
  },

//   components: {},

  // computed:{

  // },

//   mounted: {},

  methods: {
    chenges(index){ // 这里我们传入一个当前值点击事件
      this.informationsIndex = index
      
    },
    doer(index){
        this.discon = index;
    },
  },
  mounted(){
    //传递头部
    axios.get('http://api.canbite.cn/api/market/adr_tran')
    .then((res)=>{
        this.informations = res.data.data.cur;
    })
  }
}

</script>
<style scoped>
*{
    padding:0rem;
    margin:0rem;
}
ul li{
    margin:0px;
    margin:0px;
    list-style-type: none;
}
.information{
    background:#FFF;
}
a{
  text-decoration:none;
}
.tab-head{
  list-style-type: none;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-flex-wrap:nowrap;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  -ms-flex-pack:justify;
  justify-content:space-between;
  background:#FBFBFB;
  padding:0;
  top:2rem;;
  overflow:auto;
  position:fixed;
  z-index: 999;
  height:1.1rem;
  width:100%;
}
.tab-head-item{
  -webkit-box-flex:1;
  -webkit-flex:1 0 auto;
  -ms-flex:1 0 auto;
  flex:1 0 auto;
  color:#000;
  margin:0 0.5rem;
  height:0.8rem;
  font-size:0.55rem
}
/* .active {
  position:relative;
  z-index:2;
  border-bottom: 1px solid #507CC1;
} */
.content_dang{
  background: #FFF;
  height:2.8rem;
  top:3rem;
  position: fixed;;
  z-index:8;
  width:100%;
}
.content{
    position:fixed;
    width:100%;
    top:3.5rem;
    background: #FFF;
    z-index:9;
}
.header{
    font-size:0.6rem;
    font-weight: 800;
    display:flex;
    box-shadow: 0px 0px 20px #507CC1;
}
.header_small{
    width:33.3%;
    text-align: center;
    position:relative;
    height:1.5rem;
    line-height: 1.5rem;
}
.header_small_dev{
    position:absolute;
    top:1.4rem;
    width: 0.8rem;
    border:1px solid blue;
    left:50%;
    margin-left:-0.4rem;
}
.contlist{  
    /* position:relative;
    z-index: 2; */
    height:19rem;
    overflow: hidden;
    margin:6rem 1rem 3rem 1rem ; 
}

.contlist_li{
    padding:0.5rem 0 0.5rem 0.5rem;
    border-left:1px solid #F7F7F7;
    position:relative;
}
.contlist_li .contlist_dian{
    position:absolute;
    left:-0.2rem;
    top:0.8rem;
    width: 0.4rem;
    height: 0.4rem;
    background:green;
    border-radius: 50%;
}
.contlist_li div{
    height:1rem;
    line-height: 1rem;
    overflow: hidden;
}
</style>