<!-- one -->
<template>
  <div class="one">
    <Headers />
    <div class="one_six">
      <div class="topThree" @click="fade(value)" v-for="(item,value) in kmb" :key="value">
        <div
          class="topTitle"
          :style="{'line-height':(item.data).length == 1 ? '1.5rem' : '1rem'}"
        >{{item.title}}</div>
        <div
          class="topSize"
          :style="{'line-height':(item.data).length == 1 ? '1.5rem' : '1rem'}"
        >{{item.data[0]}}</div>
        <div
          class="topSize"
          :style="{'line-height':(item.data).length == 1 ? '1.5rem' : '1rem'}"
        >{{item.data[1]}}</div>
      </div>
    </div>
    <div class="one_K">
      <div class="K">
        <div class="chart" ref="chart"></div>
        <div class="p1" @click="oneminute">1m</div>
        <div class="p2" @click="thirtyminute">30m</div>
        <div class="p3" @click="onehour">1h</div>
      </div>
    </div>
    <Footer />
    <div class="first" v-show="ts">
      <!-- 合约数据 -->
      <div class="usdts" v-if="labal == 'price'">
        <Usdts />
      </div>
      <!-- 爆仓 -->
      <div class="usdts Zixun" v-if="labal == 'news'">
        <Zixun ref="child" />
      </div>
      <!-- 资讯 -->
      <div class="usdts" v-if="labal == 'liq'">
        <Bsa />
      </div>
      <!-- 多空人数 -->
      <div class="usdts Zixun" v-if="labal == 'fear_ratio'">
        <Pupil />
      </div>
      <!-- 合约持仓量 -->
      <div class="usdts Zixun" v-if="labal == 'oin'">
        <Oin />
      </div>
      <div class="back" @click="del">关闭</div>
    </div>
  </div>
</template>

<script>
import rem from "@/components/js/rem.js";
import Headers from "@/components/headers/index.vue";
import Footer from "@/components/footer2/index.vue";
import axios from "axios";
//合约数据
import Usdts from "@/components/warehouse/usdts.vue";
//爆仓
import Bsa from "@/components/baocang/bsa.vue";
//资讯
import Zixun from "@/components/zixun/index.vue";
//多空人数
import Pupil from "@/components/pupil/index.vue";
//合约持仓量
import Oin from "@/components/oin/index.vue";
const echarts = require("echarts");
export default {
  name: "one",
  data() {
    return {
      rem,
      //echarts
      categoryData: [],
      values: [],
      categoryData1: [],
      values1: [],
      categoryData2: [],
      values2: [],

      labal: "",
      ts: false,
      kmb: "",
      kmc: {
        price: {
          title: "比特币",
          data: ["$7163.47"],
          sort: 5
        },
        news: {
          title: "资讯风向",
          data: ["看多0人", "看空7人"],
          sort: 4
        },
        fear_ratio: {
          title: "多空人数",
          data: ["多：空=0.92"],
          sort: 79
        },
        liq: {
          title: "爆仓金额",
          data: ["24H $3598万"],
          sort: 1
        }
      }
    };
  },
  components: {
    Headers,
    Footer,
    Usdts,
    Bsa,
    Zixun,
    Pupil,
    Oin
  },
  created() {
    this.adds();
  },
  mounted() {
    this.initCharts();
    this.add();
  },
  methods: {
    adds() {
      //获取上面信息
      axios.get("http://192.168.199.203:6868/api/market/total").then(data => {
        if (data.status == 200) {
          //   let wang = []
          let num = data.data.data;
          //   for (let i in num) {
          //       wang.push(num[i]); //属性
          //   }
          //   wang.sort(function(a,b){
          //       return a.sort - b.sort
          //   })

          this.kmb = num;
          //   console.log(this.kmb.price.data.length)
        }
      });
    },
    //添加动态效果
    del() {
      $(".first").removeClass("animated zoomIn");
      $(".first").addClass("animated zoomOut");
      setTimeout(() => {
        this.ts = false;
      }, 600);
    },
    fade(item) {
      this.labal = item;
      // console.log(item)
      //合约全网
      if (item == "price") {
        this.$store.commit("sendtype", "PH");
        this.$store.commit("ustdsChanges", localStorage.getItem("v"));
      } //爆仓
      else if (item == "liq") {
        this.$store.commit("sendtype", "PL_1");
        this.$store.commit("ustdsChanges", localStorage.getItem("v"));
      } //资讯
      else if (item == "news") {
        this.handleClick();
      } //多空人数
      else if (item == "fear_ratio") {
      } //合约持仓量
      else if (item == "oin") {
      }
      this.ts = true;
      $(".first").removeClass("animated zoomOut");
      $(".first").addClass("animated zoomIn");
    },
    //调用资讯子组件的方法
    handleClick() {
      console.log(this.$refs.child);
      if (this.$refs.child != undefined) {
        this.$refs.child.init();
      }
    },
    //K线图的使用
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      this.myChart = myChart;
      // 绘制图表
      myChart.setOption({
        backgroundColor: "#F7F7F7",
        legend: {
          data: ["1m", "30m", "1h", "MA20", "MA30"],
          inactiveColor: "#777",
          textStyle: {
            color: "red"
          }
        },
        grid: {
          left: "10%",
          right: "15%",
          bottom: "15%"
        },
        tooltip: {
          //提示框组件
          trigger: "axis",
          formatter: function() {
            return "";
          },
          axisPointer: {
            //坐标轴指示器配置项。
            animation: false, // 过渡动画
            type: "cross", // 类型:'line' 直线指示器,'shadow' 阴影指示器,'none' 无指示器,'cross' 十字准星指示器。
            lineStyle: {
              // 线的样式
              color: "#376df4" // 鼠标放到图上会出来一个竖立的坐标线
              // width: 2,
              // opacity: 1
            }
          }
        },
        xAxis: {
          type: "category",
          data: [],
          scale: true,
          boundaryGap: false,
          axisLine: {
            lineStyle: { color: "#8392A5" }
          },
          splitLine: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax",
          splitLine: { show: true }
        },
        yAxis: {
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false },
          position: "right",
          splitLine: { show: true }
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 100
          },
          {
            show: true,
            type: "slider",
            y: "91%",
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            // name: '1m',
            type: "k",
            data: [],
            itemStyle: {
              normal: {
                color: "#FD1050",
                color0: "#0CF49B",
                borderColor: "#FD1050",
                borderColor0: "#0CF49B"
              }
            }
          }
        ]
      });
    },
    add() {
      var lockReconnect = false; //避免ws重复连接
      var ws = null; // 判断当前浏览器是否支持WebSocket
      var wsUrl = "ws://api.canbite.cn/ws/market/";
      createWebSocket(wsUrl); //连接ws
      var self = this;
      function createWebSocket(url) {
        try {
          if ("WebSocket" in window) {
            ws = new WebSocket(url);
          }
          initEventHandle();
        } catch (e) {
          reconnect(url);
        }
      }
      function initEventHandle() {
        ws.onclose = function() {
          reconnect(wsUrl);
        };
        ws.onerror = function() {
          reconnect(wsUrl);
        };
        ws.onopen = function() {
          heartCheck.reset().start(); //心跳检测重置
          if (ws.readyState == WebSocket.OPEN) {
            ws.send("CAN_1_BTC-USDT");
          }

          setInterval(() => {
            if (ws.readyState == WebSocket.OPEN) {
              ws.send("CAN_1_BTC-USDT");
            }
          }, 1000);
        };
        ws.onmessage = function(event) {
          //如果获取到消息，心跳检测重置
          heartCheck.reset().start(); //拿到任何消息都说明当前连接是正常的
          var eventData = event.data;
          handMsg(eventData);
        };
      }
      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function() {
        ws.close();
      };
      function reconnect(url) {
        if (lockReconnect) return;
        lockReconnect = true;
        setTimeout(function() {
          //没连接上会一直重连，设置延迟避免请求过多
          createWebSocket(url);
          lockReconnect = false;
        }, 1000);
      }
      //心跳检测
      var heartCheck = {
        //timeout: 540000,        //9分钟发一次心跳
        //timeout: 3600,        //1分钟发一次心跳
        timeout: 10800, //3分钟发一次心跳
        timeoutObj: null,
        serverTimeoutObj: null,
        reset: function() {
          clearTimeout(this.timeoutObj);
          clearTimeout(this.serverTimeoutObj);
          return this;
        },
        start: function() {
          var self = this;
          this.timeoutObj = setTimeout(function() {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            ws.send("ping");
            // console.log("ping!")
            self.serverTimeoutObj = setTimeout(function() {
              //如果超过一定时间还没重置，说明后端主动断开了
              //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
              ws.close();
            }, self.timeout);
          }, this.timeout);
        }
      };
      //====================================================心跳包重连CODE END=========================================
      //处理消息
      function handMsg(e) {
        //   console.log(JSON.parse(e).data.sc)
        //   console.log(resData[0].splice(0, 1)[0].slice(14,16)=='00')
        //   console.log(JSON.parse(e).data.sc.filter((item)=>item[0].slice(14,16)=='30'))
        let categoryData = [];
        let values = [];
        let categoryData1 = [];
        let values1 = [];
        let categoryData2 = [];
        let values2 = [];
        let resData = JSON.parse(e).data.sc;
        for (let i = 0; i < resData.length; i++) {
          categoryData.push(resData[i].splice(0, 1)[0].slice(11, 16));
          let arr = [];
          values.push([
            ...arr,
            Number(resData[i][0]),
            Number(resData[i][3]),
            Number(resData[i][2]),
            Number(resData[i][1]),
            Number(resData[i][4])
          ]);
        }
        let date = new Date();
        let h = date.getHours(); //获取系统时，
        let m = date.getMinutes(); //分
        let s = date.getSeconds(); //秒
        function buling(n) {
          return n.toString().length == 1 ? "0" + n : n;
        }
        for (let i = 1; i < 100; i++) {
          if ((s + i) % 60 == 0) {
            s = 0;
            categoryData.push(h + ":" + buling(m + 1));
          } else if (m % 60 == 0) {
            m = 0;
            categoryData.push(h + 1 + ":" + buling(m));
          } else {
            categoryData.push(h + ":" + buling(m));
          }
        }
        self.categoryData = categoryData;
        self.values = values;
        let resData2 = JSON.parse(e).data.sc.filter(
          item => item[0].slice(14, 16) == "30"
        );
        for (let j = 0; j < resData2.length; j++) {
          categoryData1.push(resData2[j].splice(0, 1)[0].slice(11, 19));
          let arr = [];
          values1.push([
            ...arr,
            Number(resData2[j][0]),
            Number(resData2[j][3]),
            Number(resData2[j][2]),
            Number(resData2[j][1]),
            Number(resData2[j][4])
          ]);
        }
        self.categoryData1 = categoryData1;
        self.values1 = values1;
        let resData1 = JSON.parse(e).data.sc.filter(
          item => item[0].slice(14, 16) == "00"
        );
        for (let k = 0; k < resData1.length; k++) {
          categoryData2.push(resData1[k].splice(0, 1)[0].slice(11, 19));
          let arr = [];
          values2.push([
            ...arr,
            Number(resData1[k][0]),
            Number(resData1[k][3]),
            Number(resData1[k][2]),
            Number(resData1[k][1]),
            Number(resData1[k][4])
          ]);
        }
        self.categoryData2 = categoryData2;
        self.values2 = values2;
        self.myChart.setOption({
          series: {
            data: values
          },
          xAxis: {
            data: categoryData
          }
        });
      }
    },
    oneminute() {
      this.myChart.setOption({
        series: {
          data: this.values
        },
        xAxis: {
          data: this.categoryData
        }
      });
    },
    thirtyminute() {
      this.myChart.setOption({
        series: {
          data: this.values1
        },
        xAxis: {
          data: this.categoryData1
        }
      });
    },
    onehour() {
      this.myChart.setOption({
        series: {
          data: this.values2
        },
        xAxis: {
          data: this.categoryData2
        }
      });
    }
  }
};
</script>
<style scoped>
.one {
  margin: 0;
  padding: 0;
  font-size: 0.6rem;
  background-color: #f5f5f5;
  min-height: 90vh;
}
.topThree:nth-child(2) {
  margin: 0 2%;
}
.topThree:nth-child(5) {
  margin: 0 2%;
}
.topThree:nth-child(8) {
  margin: 0 2%;
}
.topThree:nth-child(11) {
  margin: 0 2%;
}
.one_six {
  margin: 0 0.4rem;
  padding: 0.4rem 0rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
}
/* .one_six .topBor{
    margin:0 2%;
} */
.one_six .topThree {
  /* display:inline-block; */
  box-sizing: border-box;
  background-color: #fff;
  width: 32%;
  height: 3rem;
  text-align: center;
  border-radius: 0.2rem;
  margin-top: 0.3rem;
}
.topTitle {
  font-weight: 500;
}
.topSize {
  font-size: 0.5rem;
}
.one_K {
  margin: 0 0.4rem;
  padding: 0.4rem 0rem;
}
.one_K .K {
  width: 100%;
  height: 15rem;
  background-color: #fff;
  border-radius: 0.2rem;
}
.first {
  position: fixed;
  width: 100%;
  height: 80vh;
  background: #f5f5f5;
  top: 8vh;
  z-index: 3;
  overflow: hidden;
}
.usdts {
  overflow-y: auto;
  height: 25rem;
}
.Zixun {
}
.back {
  position: fixed;
  width: 2rem;
  height: 2rem;
  z-index: 9;
  display: block;
  background: rgba(137, 207, 240, 0.5);
  line-height: 2rem;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  top: 47%;
}

/* echarts */
.chart {
  width: 100%;
  height: 15rem;
  margin-bottom: 4.1rem;
  border: 2px solid #FFF;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5)
}
.p1 {
  width:1.5rem;
  height: 1rem;
  background: pink;
  bottom: 17rem;
  left: 4rem;
  position: absolute;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
}
.p2 {
  width:1.5rem;
  height: 1rem;
  background: pink;
  bottom: 17rem;
  left: 7rem;
  text-align: center;
  line-height: 1rem;
  position: absolute;
  border-radius: 0.2rem;
}
.p3 {
  width:1.5rem;
  height: 1rem;
  background: pink;
  bottom: 17rem;
  left: 10.1rem;
  position: absolute;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
}
</style>