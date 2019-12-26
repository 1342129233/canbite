<template>
  <div class="market">
    <!-- 头部 -->
    <div class="content">
      <ul class="tab-head">
          <li
            :class="{'tab-head-item':true,'cur':item==tou}" 
            v-for="(item) in arr" 
            :key="item"
            @click="tou=item" 
          >{{item}}
            <!-- 点击切换 -->
            <div :class="{'active':item==tou}"></div>
          </li>
      </ul>
    </div>
  <!-- 导航条 -->
    <div class="nav">
      <p>币种</p>
      <p>价格</p>
      <p>涨跌幅</p>
    </div>
    <!-- 自选层 -->
     <div class="zixuan" v-if="tou=='自选'" key="1">
      <div v-for="i in number" :key="i" 
        class="underlinezhi"
      >
        <div class="show" >
         <p>
            USDT 
            <br/>
            <span :style="{'color':'#939393'}">
              {{Tether.slice(0,10)}}
              <span v-if="Tether.split('').length>=10">
                ...
              </span>
            </span>
          </p>
          <p>
            7440.61
            <br/>
            <span :style="{'color':'#939393'}">
              ￥510.48
            </span>
          </p>
          <!-- 长度大于十位的后面用省略号进行显示 -->
          <!-- <p :style="{'color':a.split('').splice(0,1)=='+'?'blue':'red'}">
            1.0000
            <br/>
            <span :class="{'cur':a.split('').splice(0,1)=='+','spe':a.split('').splice(0,1)=='-'}">
              {{a}}
            </span>
          </p>-->
          <p> 
            <img class="zhang" src="@/images/zhang.png" alt="">
            <span>+0.04%</span>
          </p>
        </div>
      </div> 
      <!-- <div class="add">
        <div @click="register()">点击登录,我要自定义添加</div>
      </div> -->
    </div>
    
    <!-- 市值层 -->
    <div v-if="tou=='市值'" key="2" class="zixuan">
      市值
    </div>
    <!-- 市场层 -->
    <div v-if="tou=='市场'" key="3" class="zixuan">
      市场
    </div>
    <!-- 热搜层 -->
    <div v-if="tou=='热搜'" key="4" class="zixuan">
      热搜
    </div>
    <!-- 行情层 -->
    <div v-if="tou=='行情'" key="5" class="zixuan">
      行情
    </div>
    <!-- 资金层 -->
    <div v-if="tou=='资金'" key="5" class="zixuan">
      资金
    </div>
    <!-- 板块层 -->
    <div v-if="tou=='板块'" key="5" class="zixuan">
      板块
    </div>
    <!-- 交易所层 -->
    <div v-if="tou=='交易所'" key="5" class="zixuan">
      交易所
    </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
export default {
  name:'market',
  data(){
    return {
      rem,
      tou:'自选',
      arr:['自选','市值','市场','热搜','行情','资金','板块','交易所'],
      a:'+0.04%',
      Tether:'Tether',
      number:6,
    }
  },
  methods:{
    
  },
}
</script>
<style scoped>
.market{
  padding: 0rem;
}
.market .content{
  top:2rem;
  width: 100%;
  height: 1rem;
  padding-top:0.5rem;
  position: fixed;
  background:  white;
  z-index: 2;
}
.market .content .tab-head{
  list-style: none;
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
  padding:0;
  margin:-.6rem 0;
  overflow:auto;
  position:fixed;
  height:1.6rem;
  width:100%;
}
.market .content .tab-head .tab-head-item{
  -webkit-box-flex:1;
  -webkit-flex:1 0 auto;
  -ms-flex:1 0 auto;
  flex:1 0 auto;
  color:#000;
  padding:0 .4rem;
  height:1.5rem;
  line-height: 1.5rem;
  font-size:0.57rem;
  position: relative;
  text-align: center;
}
.market .content .tab-head .tab-head-item.cur{
  color: #4D7DBF;
}
.market .content .tab-head .tab-head-item.cur .active {
  width: .7rem;
  height: .05rem;
  background: #4D7DBF;
  position: absolute;
  top: 1.3rem;
  left: .6rem;
}
.market .content .tab-head .tab-head-item:last-child .active {
  width: .7rem;
  height: .03rem;
  background: #4D7DBF;
  position: absolute;
  top: 1.3rem;
  left: .9rem;
}
 .market .nav{
  width: 100%;
  height: 1.4rem;
  display: flex;
  font-size: .45rem;
  margin-top: 2rem;
  background: #F7F7F7;
  position: fixed;
  top: 1.4rem;
  border-bottom: 0.05rem solid #DAD8D9;
  z-index: 2;
}
.market .nav p{
  flex: 1;
  height: 1.4rem;
  line-height: 1.4rem;
  margin: 0;
  color: #919EAE;
}
.market .nav p:nth-child(1){
  margin-left: .38rem;
}
.market .nav p:nth-child(2){
  margin-left: 4.8rem;
}
.market .nav p:nth-child(3){
  margin-left: 4rem;
}
.market .zixuan{
  width: 100%;
  height: 15rem;
  margin-top:4.8rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}
.market .zixuan .underlinezhi{
  width: 100%;
  overflow: hidden;
  border-bottom: 0.05rem solid #DAD8D9;
}
.market .zixuan .underlinezhi:last-child{
  border-bottom: none;
}
.market .zixuan .underlinezhi .show{
  width: 100%;
  height: 3rem;
  float: left;
  display: flex;
}
.market .zixuan .underlinezhi .show p{
  flex: 1;
  font-size: .6rem;
  text-align: center;
  position: relative;
}
.market .zixuan .underlinezhi .show p span{
  font-size: .46rem;
  text-align: left;
  position: relative;
  top: -.15rem;
}
.market .zixuan .underlinezhi .show p:nth-child(1){
  position: relative;
  left: -.3rem;
}
.market .zixuan .underlinezhi .show p:nth-child(1) span{
  position: relative;
  left: -.1rem;
}
.market .zixuan .underlinezhi .show p:nth-child(2){
  margin-left: 3.5rem;
  color: #0FD395;
}
.market .zixuan .underlinezhi .show p:nth-child(2) span{
  position: relative;
  left: -.05rem;
}
.market .zixuan .underlinezhi .show p:nth-child(3){
  margin-left: 3.5rem;
  position: relative;
  top: -.2rem;
}
.market .zixuan .underlinezhi .show p:nth-child(3) .zhang{
  width: 2.2rem;
  position: relative;
  top: .45rem;
}
.market .zixuan .underlinezhi .show p:nth-child(3) span{
  width: 2.2rem;
  position: relative;
  top: -.55rem;
  color: white;
}   
/* .add{
  color: #BCBCBC;
  font-size: 0.6rem;
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  background: white;
} */
</style>