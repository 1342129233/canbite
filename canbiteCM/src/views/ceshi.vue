<!-- 测试 -->
<template>
  <div class="warehouse">
    <!-- <Headers />
    <div class="body">
      <Usdts />
    </div>
    <Footer /> -->
    <div class="mask" v-show="mask">
      <div class="mask_text">请点击右上角使用浏览器 (苹果用户务必使用safari打开) 打开下载或者直接访问www.blaotie.com</div>
    </div>
    
    <div class="WeChat">
      <div class="kan" v-show="!mask">请在此页面操作，客服微信 canbite</div>
      <div class="WeChat_header">
        <div class="WeChat_header_left">
          <img src="@/images/apple_two.png">
        </div>
        <div class="WeChat_header_right">
          <img src="@/images/apple_one.png">
        </div>
      </div>
      <!-- 切换图层 -->
      <div>
          <div class="WeChat_body">
            <div class="WeChat_body_one">看比特</div>
            <div class="WeChat_body_two">业界唯一毫秒级行情及最凶猛的币圈数据</div>
          </div>
          <div class="WeChat_bottom">
            <button class="WeChat_bottom_one" @click="downApp">
              安卓用户
            </button>
            <button class="WeChat_bottom_two" @click="kanbite">
              IOS用户
            </button>
          </div>
          <div class="WeChat_text">
            创始人写给各位朋友的一封信
          </div>
      </div>
      
      <!-- 苹果导流图层 -->
      <div class="supernatant" v-show="ios">
          <div class="supernatant_img">
            <img src="@/images/apple_three.png">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '@/components/headers/index.vue'
import Footer from '@/components/footer/index.vue'
import Usdts from '@/components/warehouse/usdts.vue'

import axios from 'axios'
export default {
  name:'warehouse',
  data(){
    return{
      // huobi:'',
      // contract_cat:''
      name,
      mask:false,
      isping:0,
      ios:false
    }
  },
  components: {
    Usdts,
    Footer,
    Headers
  },
  created(){
    
  },
  methods: {
    // initWebSocket(){  //初始化websocket
    //   const wsuri = "ws://http://192.168.0.187:8000/apidata/contdata/";
    //   this.websock = new WebSocket(wsuri);
    //   this.websock.onmessage = this.websocketonmessage;
    //   this.websock.onopen = this.websocketonopen;
    //   this.websock.onerror = this.websocketonerror;
    //   this.websock.onclose = this.websocketclose;
    // },
    // websocketonmessage(e){ //数据接收
    //   this.redata = JSON.parse(e.data);
    //   console.log('数据接收');
    // },
    // websocketonopen(){ //连接建立之后执行send方法发送数据
    //   let actions = {"test":"12345"};
    //   this.websocketsend(JSON.stringify(actions));
    //   console.log('发送数据');
    // },
    // websocketonerror(){//连接建立失败重连
    //   this.initWebSocket();
    //   console.log('连接建立失败重连');
    // },
    // websocketclose(e){  //关闭
    //   console.log('断开连接',e);
    // },
    // websocketsend(Data){//数据发送
    //   this.websock.send(Data);
    //   console.log('数据发送');
    // },

    downApp(){
      let u = navigator.userAgent, app = navigator.appVersion;
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let urls = 'http://www.canbite.cn/canbite.apk'
      if (isAndroid) {
          window.location.href = urls;
      }
      if (isIOS) {
          // alert("苹果机！")
          this.isping = 1;
      }
    },
    //ios
    kanbite(){
      this.ios = true
    }
  },
  mounted(){
    // this.initWebSocket();
    //调用
    // console.log(typeof(this.warehouseImg))
    let ua = navigator.userAgent;
    let isWeixin = !!/MicroMessenger/i.test(ua);
    if(isWeixin){
      this.mask = true;
      this.$router.push({path: '/ceshi'});
    }

    let u = navigator.userAgent, app = navigator.appVersion;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        // alert("安卓机！")
        this.isping = 0;
    }
    if (isIOS) {
        // alert("苹果机！")
        this.isping = 1;
    }
    
    //ios存的地址
    window.history.pushState({},0,'http://localhost:8080/#/warehouse');
  },
  beforeRouteEnter (to, from, next) {
    //改变数值true 或false
    
    next()
  },
}
</script>
<style scoped>
.warehouse{
  
}
.body{
  margin:0px 0px 0px 0px;
  overflow: hidden;
}
.kan{
  margin-top:1rem;
  color:#000;
  text-align: center;
}
.mask{
  position:fixed;
  width:100%;
  height:100%;
  background-color: rgba(181,181,181,0.7);
  z-index:9999;
  top:0rem;
}
.mask .mask_text{
  text-align: center;
  color:#000;
  font-size:0.8rem;
  margin-top:5rem;
  font-weight: 800;
}
.WeChat{
  position:fixed;
  width:100%;
  height:100%;
  background:#efefef;
  z-index:1000;
  top:0rem;
}
.WeChat_header{
  display:flex;
  margin-top:1rem;
}
.WeChat_header_left{
  width:35%;
  margin-left: 10%;
  height:12rem;
}
.WeChat_header_right{
  width:35%;
  margin-left: 10%;
  height:12rem;
}
.WeChat_header_left img{
  width:100%;
  height:100%;
}
.WeChat_header_right img{
  width:100%;
  height:100%;
}
.WeChat_body{
  margin-top:3rem;
  text-align: center;
  
}
.WeChat_body_one{
  font-size:1.2rem;
  letter-spacing:1rem;
}
.WeChat_body_two{
  margin-top:1rem;
}
.WeChat_bottom{
  margin-top:1.5rem;
  text-align: center;
}
.WeChat_bottom button{
  width:3rem;
  height:1rem;
  line-height: 1rem;
  background:#FFF;
  border: 1px solid #F5F5F5;;
}
button{
  outline:none;
}
.WeChat_bottom_one{
  margin-right:1rem;
}
.WeChat_bottom_two{
  margin-left:1rem;
}
.WeChat_text{
  color:salmon;
  text-align: center;
  margin-top:1.5rem;
}
/* 浮层 */
.supernatant{
  height:45%;
  width:100%;
  position:fixed;
  bottom:5%;
  background: #FFF;
}
.supernatant_img{
  width:100%;
  height:100%;
}
.supernatant_img img{
  width:100%;
  height:100%;
}
</style>