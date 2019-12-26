<!-- 我的 -->
<template>
  <div class="my">
      <div class="background1">
        <img class="tiao1" src="@/images/my/background1.png" alt />
      </div>
      <div class="background2">
        <img class="tiao1" src="@/images/my/background2.png" alt />
      </div>
      
      <!-- 登录注册使用的（我的头部）
      <div class="head">
        <div class="head_portrait">
          <img class="tiao1" src="@/images/my/img11.png" alt />
        </div>
        <div class="head_message" @click="log" v-if="loginT == 0">
          <div class="head_name">欢迎使用注册平台</div>
          <div class="head_name_phone">昵称/注册手机号</div>
        </div>
        <div class="head_message" v-else>
          <div class="head_name">{{loginName}}</div>
          <div class="head_name_phone">您还没有个人简介哦！</div>
        </div>
        <div class="user_setting" @click="identity">
          账号设置 >
        </div>
      </div> -->
      <div class="content">
        <!-- <div class="content_dis">
            <div class="my_img"><img class="tiao1" src="@/images/my/img1.png" alt /></div>
            <div>我的消息</div>
        </div>
        <div class="content_dis">
            <div class="my_img"><img class="tiao1" src="@/images/my/img3.png" alt /></div>
            <div @click="cost()">持仓成本</div>
        </div>
        <div class="content_dis">
            <div class="my_img"><img class="tiao1" src="@/images/my/img10.png" alt /></div>
            <div>交易信息</div>
        </div> -->
        <div class="content_dis" @click="calculator()">
            <div class="my_img"><img class="tiao1" src="@/images/my/img2.png" alt /></div>
            <div>收益计算器</div>
        </div>
        <div class="content_dis" @click="Mymill_one">
            <div class="my_img"><img class="tiao1" src="@/images/my/img4.png" alt /></div>
            <div>矿机</div>
        </div>
        <div class="content_dis" @click="shau">
            <div class="my_img"><img class="tiao1" src="@/images/my/img3.png" alt /></div>
            <div>大额</div>
        </div>
        <!-- <div class="content_dis">
            <div class="my_img"><img class="tiao1" src="@/images/my/img4.png" alt /></div>
            <div @click="game()">小游戏</div>
        </div> -->
        <!-- <div class="content_dis">
            <div class="my_img"><img class="tiao1" src="@/images/my/img5.png" alt /></div>
            <div>设置</div>
        </div> -->
        <!-- <div class="content_dis" @click="ceshi">
            <div class="my_img"><img class="tiao1" src="@/images/my/img5.png" alt /></div>
            <div>小悬浮框(测试悬浮框)</div>
        </div> -->
        <!-- <div class="content_dis" @click="bizhong">
            <div class="my_img"><img class="tiao1" src="@/images/my/img5.png" alt /></div>
            <div>小悬浮框(测试悬浮框)</div>
        </div> -->
      </div>
      <!-- 小游戏 -->
      <!-- <div v-show="Mygame" class="game_yes">
        <div class="game">
            <Game />
        </div>
      </div> -->
      <!-- <div v-show="Mygame" class="game_yes">
        <div class="game">
            <zhengshi />
        </div>
      </div> -->

      <!-- 计算器弹框 -->
      <div class="calculator_yes" v-show="MyCalculator">
        <div class="calculator">
             <Calculator />
        </div>
      </div>
      <!-- 矿机弹框 -->
      <div class="mill" v-show="Mymill">
        <div class="mill_cos">
          <Mill />
        </div>
      </div>
      <!-- 大额交易 -->
      <div class="information" v-show="Informations">
        <div class="information_cos">
          <Information />
        </div>
      </div>
      <!-- 选择币种的弹框 -->
      <div class="currency" v-show="biAn">
        <div class="currency_nei">
          <div class="currency_title">
            请选择您要查看的币种
          </div>
          <div class="currency_set">
            <div>
              <input type="checkbox" :checked="currencydata.length===currencyOptions.length && currencyOptions.length" @click="checkedAll">
              <label>全选</label>
            </div>
            <div class="currency_chenkbox" v-for="(item,index) in currencydata" :key="item.index">
              <input type="checkbox" :name="item" :checked="currencyOptions.indexOf(item)>=0" @click="checkedOne(item)">
              <label>{{item}}</label>
            </div>
          </div>
          <div class="currency_small" v-show="currencysmall">*至少选择一个币种</div>
          <div class="currency_cancel" @click="bizhongguan">
            取消
          </div>
          <div class="currency_confirm" @click="ceshi">
            确定
          </div>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
//大额监控
import Monitoring from '@/components/my/monitoring/monitoring.vue'
//计算器
import Calculator from '@/components/my/monitoring/calculator.vue'
//游戏
import Game from '@/components/my/monitoring/game.vue'
// import zhengshi from '@/components/my/monitoring/zhengshi.vue'
//矿机
import Mill from '@/components/my/monitoring/mill.vue'
//大额交易消息
import Information from '@/components/my/monitoring/information.vue'

import axios from 'axios'
export default {
  name:'my',
  data () {
    return {
      rem,
      Mygame:true,
      butt: false,
      beng:'',
      //是否显示币种悬浮框
      biAn:false,
      // 初始化全选按钮, 默认不选
      isCheckedAll: false,
      //币种
      currencydata:['BTC-USDT','ETH-USDT','LTC-USDT','EOS-USDT'],
      //选中的币种
      currencyOptions:['BTC-USDT'],
      //最小选择一个币种
      currencysmall:false
    };
  },
  components: {
      Monitoring,
      Calculator,
      Game,
      // zhengshi,
      Mill,
      //大额交易消息
      Information
  },
  create(){
    
  },
  methods:{
      //全选币种
      checkedAll(e){
          this.isCheckedAll = e.target.checked;
          if (this.isCheckedAll) {//全选时
              this.currencyOptions = []
              this.currencydata.forEach(item => {
                this.currencyOptions.push(item)
              })
          }else{
            this.currencyOptions = []
          }
      },
      //选中的币种
      checkedOne(itemId){
        let idIndex = this.currencyOptions.indexOf(itemId)
        if(idIndex >= 0){//包含
          this.currencyOptions.splice(idIndex,1)
        }else{//不包含
          this.currencyOptions.push(itemId)
        }

        // console.log(this.currencyOptions)
      },
      //币种悬浮框
      bizhong(){
        this.biAn = true
      },
      bizhongguan(){
        this.biAn = false
        this.currencyOptions = ['BTC-USDT']
      },
      //大额交易跳转
      shau(){
        // this.$router.push({name:'BTC'});
        this.$store.commit('information_show');
      },
      

      //注册跳转
      log(){
        this.$router.push({path:'/my/login'});
      },
      //持仓成本
      cost(){
        this.$router.push({path: '/cost'});
      },
      //计算器
      calculator(){
        this.$store.commit('Calculatorer');
      },
      // 跳转游戏
      game(){
        this.Mygame=true
      },
      //跳转账号设置
      identity(){
        this.$router.push({path: '/my/identity'});
      },
      //测试
      ceshi(){
        if((this.currencyOptions).length >=1){
            this.$router.push({path: '/xuanfu',query:{xuanfu:this.currencyOptions}});
            localStorage.setItem('currencyOptionsItem',this.currencyOptions)
        }else{
            this.currencysmall = true
        }
        
      },
      //矿机点击显示
      Mymill_one(){
        this.$store.commit('Mymill_show');
      },
  },
  computed:{
      //收益计算器(用于show和hide判断)
      MyCalculator() {
        return this.$store.getters.MyCalculators;
      },
      //注册
      loginT() {
        return this.$store.state.loginT;
      },
      loginName(){
        return this.$store.state.loginName;
      },
      //矿机(用于show和hide判断)
      Mymill() {
        return this.$store.getters.Mymills;
      },
      Informations(){
        return this.$store.getters.informations;
      }
  },
  mounted(){
    
    
  },
  
  
}

</script>
<style scoped>
.my{
    margin:0px;
    padding:0px;
    font-size:0.6rem;
    position:relative;
    width:100%;
}
.background1{
  width:100%;
  height:7rem;
  position:fixed;
  z-index:2;
}
.background1 img{
  width:100%;
  height:100%;
}
.background2{
  width:100%;
  height:100%;
  position:fixed;
  z-index:1;
}
.background2 img{
  width:100%;
  height:100%;
}
.head{
  display:flex;
  height:3rem;
  padding: 0rem 0.5rem;
  z-index:9;
  position:absolute;
  position:relative;
}
.head_portrait{
  width:2rem;
  height:2rem;
  margin-top:0.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.head_portrait img{
  width:100%;
  height:100%;
}
.head_message{
  margin-top:0.75rem;
  margin-left:0.5rem;
}
.head_name{
  font-weight:800;
}
.head_name_phone{
  font-size:0.5rem;
}
.user_setting{
  width:3rem;
  height:1rem;
  line-height: 1rem;
  top:1rem;
  right:0rem;
  position:absolute;
  font-size:0.5rem;
}
.content{
  position:absolute;
  z-index: 9;
  background-color:#FFF;
  width:94%;
  margin-left:3%;
  border-radius: 0.5rem;
  margin-top:1rem;
}
.content_dis{
  display: flex;
  height:2rem;
  line-height: 2rem;
  border-bottom: 1px solid #F7F7F7;
  padding-left:0.5rem;
}
.my_img{
  margin-top:0.3rem;
  width:1rem;
  height:1rem;
  margin-right:0.5rem;
}
.my_img img{
  width:100%;
  height:100%;
}


/* 大额交易 */
.monitoring_yes{
    position:fixed;
    top:3rem;
    z-index:999;
    background-color:#fff;
    /* height:21rem; */
    width:100%;
}
.monitoring{
    width:99%;
    margin:0 auto; 
}

/* 计算器 */
.calculator_yes{
  width:100%;
  position:fixed;
  z-index:999;
  /* top:3.5rem; */
  background-color:#F5F5F5;
  height:16rem;
  font-size:0.55rem;
}
.calculator{
  margin: 0 0rem;
}
/* 小游戏 */
.game_yes{
    position:fixed;
    top:3rem;
    z-index:999;
    background-color:#fff;
    /* height:21rem; */
    width:100%;
    height: 100%;
}
.game_yes .game{
    width:99%;
    margin:0 auto; 
}

/* 矿机 */
.mill{
  width:100%;
  position:fixed;
  z-index:999;
  background-color:#FFF;
  height:16rem;
  font-size:0.55rem;
  height: 100%;
}
.mill_cos{
  width:100%;
  margin:0 auto;
}
/* 大额交易 */
.information{
  width:100%;
  position:fixed;
  z-index:999;
  background-color:#FFF;
  height:16rem;
  font-size:0.55rem;
  height: 100%;
}
.information_cos{
  width:100%;
  margin:0 auto;
}
/* 选择悬浮框的 */
.currency{
  position:fixed;
  width:80%;
  left:10%;
  top:40%;
  height:40%;
  background:#fff;
  z-index:9;
  border-radius: 5px;
}
.currency_nei{
  position: relative;
  height:100%;
  width:100%;
}
.currency_title{
  text-align: center;
  padding-top:1.2rem;
}
.currency_set{
  margin:1rem;
  height:3rem;
}
.currency_chenkbox{
  display:inline-block;
  margin:0.1rem 0.5rem;
}
.currency_cancel{
  background:green;
  color:#FFF;
  height:1.5rem;
  width:50%;
  bottom:0px;
  position:absolute;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 0px 0px 0px 5px;
  letter-spacing:1rem;
  text-indent: 1rem;
}
.currency_confirm{
  background:red;
  color:#FFF;
  height:1.5rem;
  width:50%;
  left:50%;
  bottom:0px;
  position:absolute;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 0px 0px 5px 0px;
  letter-spacing:1rem;
  text-indent: 1rem;
}
.currency_small{
  color:red;
  margin: 0 1rem;
}
</style>