import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import pako from 'pako'

Vue.use(Vuex)

export default new Vuex.Store({
  // 基本数据 
  state: {
    tabbar:JSON.parse(sessionStorage.getItem("tabbar")) || [
        {
            title:"爆仓",
            link:"warehouse",
            active:true,
            pictureOne:require('@/images/footer/icon1.1.png'),
            pictureTwo:require('@/images/footer/icon1.2.png'),
            switch:'/warehouse'
        },
        {
            title:"大额",
            link:"information",
            active:false,
            pictureOne:require('@/images/icon3.2.png'),
            pictureTwo:require('@/images/icon3.1.png'),
            switch:'/information'
        },
        // {
        //     title:"行情",
        //     link:"hangqing",
        //     active:false,
        //     pictureOne:require('@/images/footer/icon2.2.png'),
        //     pictureTwo:require('@/images/footer/icon2.1.png'),
        //     switch:'/hangqing'
        // },
        // {
        //     title:"收益",
        //     link:"calculator",
        //     active:false,
        //     pictureOne:require('@/images/footer/icon3.2.png'),
        //     pictureTwo:require('@/images/footer/icon3.1.png'),
        //     switch:'/calculator'
        // },
        {
            title:"工具",
            link:"my",
            active:false,
            pictureOne:require('@/images/footer/icon4.2.png'),
            pictureTwo:require('@/images/footer/icon4.1.png'),
            switch:'/my'
        },
        // {
        //     title:"持仓",
        //     link:"cost",
        //     active:false,
        //     pictureOne:require('@/images/footer/icon2.2.png'),
        //     pictureTwo:require('@/images/footer/icon2.1.png'),
        //     switch:'/cost'
        // },
        // {
        //     title:"市场",
        //     link:"market",
        //     active:false,
        //     pictureOne:require('@/images/footer/icon3.2.png'),
        //     pictureTwo:require('@/images/footer/icon3.1.png'),
        //     switch:'/market'
        // },
        // {
        //     title:"我的",
        //     link:"my",
        //     active:false,
        //     pictureOne:require('@/images/footer/icon4.2.png'),
        //     pictureTwo:require('@/images/footer/icon4.1.png'),
        //     switch:'/my'
        // },
    ],
    //背景灰色全
    ying:2,
    //断线从连
    lockReconnect: false,
    headname:[],
    contract_cat:[],
    categoryIndex:localStorage.getItem('v'),
    pl_head:'',
    diyige:'',
    websock:null,
    received_msg:'',
    received_msg1:null,
    received_msg2:null,
    received_msgst:null,
    received_msgsd:null,
    received_msgft:null,
    received_msgfd:null,
    //当st或者sd为空的时候
    cont_data:[],
    cont_data_all:[],
    cont_loss:[],
    datast:[],
    datasd:[],
    datafd:[],
    dataft:[],




    MyMonitoring:false,
    MyCalculator:false,
    Mygame:false,
    // ws的请求
    Sender:"",
    //websocket状态码
    websocketcode:0,
    // 用来判断图片得显示
    house:[],
    ceshi:0,
    //登录注册
    //状态
    loginT: sessionStorage.getItem('loginT') || 0,
    loginName: sessionStorage.getItem('userName') || '星期一哥哥',

    //my页面的矿机
    Mymill:false,

    //大额
    information:false,
  },
  // 提交更改数据的方法，同步！
  mutations: {
    //全局阴影
    yingOne(state,index){
      state.ying = index
    },
    //改变登录状态值
    dengluTstate(state){
      state.loginT = 1
    },
    //名字
    dengluUsername(state,userName){
      state.loginName = userName
    },
    //首页数据
    increment(state,{headname}){
      state.headname = headname.cur
      state.house = headname.house
      state.contract_cat = headname.futures_cat      
      state.pl_head=headname.pl_head
    },
    staff_updatewebsocket(state, websock){
      state.websock = websock
    },
    //多空
    getShuju(state,{received_msg}){
      state.received_msg = received_msg
    },
    //全网
    getShuju1(state,{received_msg}){
      state.received_msg1 = received_msg
    },
    //爆仓
    baocang(state,{received_msg}){
      state.received_msg2 = received_msg
      // console.log(state.received_msg2 )
    },
    getShuju3(state,{received_msg}){
      state.received_msgst = received_msg
    },
    getShuju4(state,{received_msg}){
      state.received_msgsd = received_msg
    },
    getShuju5(state,{received_msg}){
      state.received_msgft = received_msg
    },
    getShuju6(state,{received_msg}){
      state.received_msgfd = received_msg
    },
    //ustds改变
    ustdsChanges(state,index){
      state.categoryIndex = index
    },
    //my的Calculator页面(计算器)
    Calculatorer(state){
      state.MyCalculator = true
    },
    MyCalculator_guan(state){  //false
      state.MyCalculator = false
    },
    //my页面的矿机隐藏显示
    Mymill_show(state){
      state.Mymill = true
    },
    
    Mymill_hide(state){
      state.Mymill = false
    },
    //my页面的大额隐藏显示
    information_show(state){
      state.information = true
    },
    information_hide(state){
      state.information = false
    },
    //my页面的游戏
    Game(state){
      state.Mygame = true
    },
    sendtype(state,i){
      state.Sender = i
    },
    
    
    changeWebsocketCode(state,zhi){
      state.websocketcode=zhi
    },
    //改变切换图片的值
    picture_tabbar(state,path){
      for(let i = 0; i < state.tabbar.length; i++){
        if(state.tabbar[i].switch == path){
          state.tabbar[i].active = true;
        }else{
          state.tabbar[i].active = false;
        }
      }
    },
     //短线从连
    
  },
  // 像一个装饰器，包裹mutations，使之可以异步。
  actions: {
    loaddata(context){
      // axios.get('http://192.168.199.203:6868/api/market/info')
      axios.get('http://api.canbite.cn/api/market/info')
      .then((data)=>{
        // console.log(data)
          let first = data.data
          context.commit('increment',{'headname': first.data})
          // console.log(first.data)
      })
    },
    //WebSocket操作
    staff_websocket(context){
      var lockReconnect = false;  //避免ws重复连接
      var ws = null;          // 判断当前浏览器是否支持WebSocket
      // var wsUrl = "ws://192.168.199.203:8005/ws/market/";
      var wsUrl = "ws://api.canbite.cn/ws/market/";
      createWebSocket(wsUrl);   //连接ws
      var self=this

      function createWebSocket(url) {
          try {
              if ('WebSocket' in window) {
                  ws = new WebSocket(url);
              } 
              initEventHandle();
          } catch (e) {
              reconnect(url);
          }
      }

      function initEventHandle() {
          ws.onclose = function () {
              reconnect(wsUrl);
          };
          ws.onerror = function () {
              reconnect(wsUrl);
          };
          ws.onopen = function () {
              heartCheck.reset().start();      //心跳检测重置
              if(ws.readyState == WebSocket.OPEN){
                        ws.send(self.state.Sender);
                    }
      setInterval(()=>{
          if(ws.readyState == WebSocket.OPEN){
              ws.send(self.state.Sender);
          }
        },1000);
          };
          ws.onmessage = function (event) {    //如果获取到消息，心跳检测重置
              heartCheck.reset().start();      //拿到任何消息都说明当前连接是正常的
              var eventData = event.data;
              handMsg(eventData);
          };
      }
      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function () {
          ws.close();
      }
      function reconnect(url) {
          if (lockReconnect) return;
          lockReconnect = true;
          setTimeout(function () {     //没连接上会一直重连，设置延迟避免请求过多
              createWebSocket(url);
              lockReconnect = false;
          }, 1000);
      }
      //心跳检测
      var heartCheck = {
          //timeout: 540000,        //9分钟发一次心跳
          //timeout: 3600,        //1分钟发一次心跳
          timeout: 10800,        //3分钟发一次心跳
          timeoutObj: null,
          serverTimeoutObj: null,
          reset: function () {
              clearTimeout(this.timeoutObj);
              clearTimeout(this.serverTimeoutObj);
              return this;
          },
          start: function () {
              var self = this;
              this.timeoutObj = setTimeout(function () {
                  //这里发送一个心跳，后端收到后，返回一个心跳消息，
                  //onmessage拿到返回的心跳就说明连接正常
                  ws.send("ping");
                  // console.log("ping!")
                  self.serverTimeoutObj = setTimeout(function () {
                      //如果超过一定时间还没重置，说明后端主动断开了
                      //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
                      ws.close();     
                  },self.timeout)
              },this.timeout)
          }
      }
      //====================================================心跳包重连CODE END=========================================
      //处理消息
      function handMsg(e) {
        // console.log(JSON.parse(e))
        // console.log(self.state.Sender)
          // context.commit('baocang',{'received_msg':JSON.parse(e).data.cont_loss})
          if(JSON.parse(e).data.cont_loss == null){
            context.commit('baocang',{'received_msg':JSON.parse(e).data.cont_loss})

          }else{
            context.commit('baocang',{'received_msg':JSON.parse(e).data.cont_loss})
            self.state.cont_loss = JSON.parse(e).data.cont_loss
          }


          if(JSON.parse(e).data.cont_data == undefined){
            context.commit('getShuju',{'received_msg':self.state.cont_data})
            context.commit('getShuju1',{'received_msg':self.state.cont_data_all})
            // context.commit('getShuju2',{'received_msg':self.state.cont_loss})
          }else{
            context.commit('getShuju',{'received_msg':JSON.parse(e).data.cont_data})
            localStorage.setItem('v',JSON.parse(e).data.cont_data.sort((a,b)=>a[1]-b[1])[0][1])
            context.commit('getShuju1',{'received_msg':JSON.parse(e).data.cont_data_all})
            // context.commit('getShuju2',{'received_msg':JSON.parse(e).data.cont_loss})
            self.state.cont_data = JSON.parse(e).data.cont_data
            self.state.cont_data_all = JSON.parse(e).data.cont_data_all
            // self.state.cont_loss = JSON.parse(e).data.cont_loss
          }
          

          if(JSON.parse(e).data.sd == undefined||JSON.parse(e).data.sd['BTC-USDT']==undefined){
              context.commit('getShuju3',{'received_msg':self.state.datast})
              context.commit('getShuju4',{'received_msg':self.state.datasd})
            }else{
              context.commit('getShuju3',{'received_msg':JSON.parse(e).data.st})
              context.commit('getShuju4',{'received_msg':JSON.parse(e).data.sd})
              self.state.datasd = JSON.parse(e).data.sd
              self.state.datast = JSON.parse(e).data.st
            }
            if(JSON.parse(e).data.fd==undefined||JSON.parse(e).data.fd['BTC-USD']==undefined){
              context.commit('getShuju5',{'received_msg':self.state.dataft})
              context.commit('getShuju6',{'received_msg':self.state.datafd })
            }else{
              context.commit('getShuju5',{'received_msg':JSON.parse(e).data.ft})
              context.commit('getShuju6',{'received_msg':JSON.parse(e).data.fd})
              self.state.datafd = JSON.parse(e).data.fd
              self.state.dataft = JSON.parse(e).data.ft
            }
          // console.log(JSON.parse(e).data.sd)
      }

    },
    
  },

  getters:{
    //收益计算器
    MyCalculators(state){
      return state.MyCalculator;
    },
    //首页头部切换
    // usdtscurrencys(state){
    //   return state.categoryIndex;
    // },
    //MymillGetters矿机
    Mymills(state){
      return state.Mymill;
    },
    
    //大额交易
    informations(state){
      return state.information;
    }
  },
  
  
  //在页面刷新时将vuex里的信息保存到sessionStorage里
  
})
