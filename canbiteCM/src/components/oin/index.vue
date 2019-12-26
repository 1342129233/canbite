<template>
  <div>
    <div v-if="house">
      <div v-if="duo==true" class="box3">
        <div class="gap">
          <div class="choose">
            <p class="zhanghushu">持仓量</p>
            <div class="choose_left"></div>
            <div class="choose_right"></div>
          </div>
          <div class="show">
            <div class="p1">
              <div class="p1_time_left">{{time}}</div>
              <div class="p1_time">
                <div class="p1_ag" @click="clickSelect" v-show="!timeser">
                  <div class="p1_ag_name">{{selectValue}}</div>
                  <div class="top">
                    <img src="@/images/top.png">
                  </div>
                </div>
                <div class="p1_time_tim" v-show="timeser">
                  <ul>
                    <li v-for="(item,index) in selectValue_time" @click="tsoption(index)">
                      <div class="pitem_name">{{item}}</div>
                      <div class="down" v-if="index == 0">
                        <img src="@/images/down.png">
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="p2" v-for="i in showdata">
              {{i.name}}:
              <span>{{i.value}}</span>
            </div>
          </div>
          <div style="width:100%;height:10rem" ref="chart"></div>
        </div>
      </div>
    </div>
    <!-- <div v-else>
          正在加载
    </div>-->
    <div v-else class="loading">
      <Loading />
    </div>
  </div>
</template>

<script>
const echarts = require("echarts");
import rem from "@/components/js/rem.js";
import axios from "axios";
//loading图
import Loading from "@/components/loading/index.vue";

export default {
  name: "usdt",
  data() {
    return {
      duo: true,
      duo: true,
      //时间
      selectValue: "10分钟",
      selectValue_time: ["10分钟", "20分钟", "45分钟"],
      timeser: false,
      duodata: [
        { value: "5分" },
        { value: "15分" },
        { value: "30分" },
        { value: "1时" },
        { value: "4时" },
        { value: "1天" }
      ],
      showdata: "",
      time: "",
      showshow: "",
      daohang: "BitMEX",
      jiaoyisuo: 2,
      house: [],
      choosetime: "",
      Binanceindex: "",
      Bitfinexindex: "",
      BitMEXindex: "",
      huobiindex: "",
      OKEXindex: "",
      //切换时间
      optionxuan: 1
    };
  },
  components: {
    Loading
  },
  created() {
    this.loaddata();
    //  this.loaddata1()
  },
  mounted() {
    this.initCharts();
    this.add();
    // this.initCharts1();
    // this.add1();
  },
  methods: {
    //切换时间
    clickSelect() {
      this.timeser = true;
    },
    tsoption(index) {
      this.selectValue = this.selectValue_time[index];
      this.timeser = false;
    },

    dd() {
      this.duo = true;
    },
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      this.myChart = myChart;
      var self = this;
      // 绘制图表
      myChart.setOption({
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            // console.log()
            let aa = "";
            let aa1 = "";
            let aa2 = "";
            let aa3 = "";
            if (params[0].value.toString().length > 8) {
              aa = params[0].value / 100000000 + "亿";
            } else if (params[0].value.toString().length > 7) {
              aa = params[0].value / 10000000 + "千万";
            } else if (params[0].value.toString().length > 6) {
              aa = params[0].value / 10000 + "万";
            }
            if (params[1].value.toString().length > 8) {
              aa1 = params[1].value / 100000000 + "亿";
            } else if (params[1].value.toString().length > 7) {
              aa1 = params[1].value / 10000000 + "千万";
            } else if (params[1].value.toString().length > 6) {
              aa1 = params[1].value / 10000 + "万";
            }
            if (params[2].value.toString().length > 8) {
              aa2 = params[2].value / 100000000 + "亿";
            } else if (params[2].value.toString().length > 7) {
              aa2 = params[2].value / 10000000 + "千万";
            } else if (params[2].value.toString().length > 6) {
              aa2 = params[2].value / 10000 + "万";
            }
            if (
              (params[0].value + params[1].value + params[2].value).toString()
                .length > 8
            ) {
              aa3 =
                (params[0].value + params[1].value + params[2].value) /
                  100000000 +
                "亿";
            } else if (
              (params[0].value + params[1].value + params[2].value).toString()
                .length > 7
            ) {
              aa3 =
                (params[0].value + params[1].value + params[2].value) /
                  10000000 +
                "千万";
            } else if (
              (params[0].value + params[1].value + params[2].value).toString()
                .length > 6
            ) {
              aa3 =
                (params[0].value + params[1].value + params[2].value) / 10000 +
                "万";
            }
            self.time = self.time.slice(0, 10).concat(" ", params[0].axisValue);
            let arr = [];
            arr.push(
              { name: "周", value: aa },
              { name: "次周", value: aa1 },
              { name: "季度", value: aa2 },
              { name: "总", value: aa3 }
            );
            self.showdata = arr;
          }
        },
        legend: {
          data: ["周", "次周", "季度"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          // 控制整体
          // show:false
          // 取消网格线
          splitLine: {
            show: false
          },
          // 取消坐标值
          // axisLabel: {
          //   show: false
          // },
          // 控制坐标轴刻度线
          axisTick: {
            show: false
          },
          // 控制坐标轴
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          // 控制整体
          // show:false
          // 取消网格线
          splitLine: {
            show: false
          },
          // 取消坐标值
          // axisLabel: {
          //   show: false
          // },
          // 控制坐标轴刻度线
          axisTick: {
            show: false
          },
          // 控制坐标轴
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "净多仓的账户比列",
            type: "line",
            stack: "总量",
            data: []
          },
          {
            name: "净空仓的账户比例",
            type: "line",
            stack: "总量",
            data: []
          },
          {
            name: "锁仓的账户比例",
            type: "line",
            stack: "总量",
            data: []
          }
        ]
      });
    },
    add() {
      var self = this;

      let param = new URLSearchParams();
      param.append("hid", 5);
      param.append("cid", 19);
      // this.$axios
      //   .post("http://api.canbite.cn/api/market/futures_open_interest", param, {
      //     //post请求，在请求时会自动把param拼接再Param后面
      //     // this.$axios.post('http://api.canbite.cn/api/market/futures_elite_accout',param,{//post请求，在请求时会自动把param拼接再Param后面
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
      //     }
      //   })
      this.$axios({
          url: this.FACTURL + "/api/market/futures_open_interest",
          method: "post",
          data:param,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
          }
      })
        .then(function(response) {
          // console.log(response.data.data);
          let categoryData = [];
          let values = [];
          let values1 = [];
          let values2 = [];
          let values3 = [];
          let a = "";
          let a1 = "";
          let a2 = "";
          let a3 = "";
          let resData = response.data.data.fois["1_BTC191227"];
          for (let i = 0; i < resData.length; i++) {
            categoryData.push(resData[i][1].slice(11, 16));
            values.push(resData[i][0]);
          }
          let resData1 = response.data.data.fois["2_BTC200103"];
          for (let i = 0; i < resData1.length; i++) {
            values1.push(resData1[i][0]);
          }
          let resData2 = response.data.data.fois["3_BTC200327"];
          for (let i = 0; i < resData2.length; i++) {
            values2.push(resData2[i][0]);
          }
          self.time = resData[0][1]
            .slice(0, 10)
            .concat(" ", resData[0][1].slice(11, 16));
          // console.log( resData[0][0].toString().length)
          if (resData[0][0].toString().length > 8) {
            a = resData[0][0] / 100000000 + "亿";
          } else if (resData[0][0].toString().length > 7) {
            a = resData[0][0] / 10000000 + "千万";
          } else if (resData[0][0].toString().length > 6) {
            a = resData[0][0] / 10000 + "万";
          }
          if (resData1[0][0].toString().length > 8) {
            a1 = resData1[0][0] / 100000000 + "亿";
          } else if (resData1[0][0].toString().length > 7) {
            a1 = resData1[0][0] / 10000000 + "千万";
          } else if (resData1[0][0].toString().length > 6) {
            a1 = resData1[0][0] / 10000 + "万";
          }
          if (resData2[0][0].toString().length > 8) {
            a2 = resData2[0][0] / 100000000 + "亿";
          } else if (resData2[0][0].toString().length > 7) {
            a2 = resData2[0][0] / 10000000 + "千万";
          } else if (resData2[0][0].toString().length > 6) {
            a2 = resData2[0][0] / 10000 + "万";
          }
          if (
            (resData[0][0] + resData1[0][0] + resData2[0][0]).toString()
              .length > 8
          ) {
            a3 =
              (resData[0][0] + resData1[0][0] + resData2[0][0]) / 100000000 +
              "亿";
          } else if (
            (resData[0][0] + resData1[0][0] + resData2[0][0]).toString()
              .length > 7
          ) {
            a3 =
              (resData[0][0] + resData1[0][0] + resData2[0][0]) / 10000000 +
              "千万";
          } else if (
            (resData[0][0] + resData1[0][0] + resData2[0][0]).toString()
              .length > 6
          ) {
            a3 =
              (resData[0][0] + resData1[0][0] + resData2[0][0]) / 10000 + "万";
          }
          values3.push(
            { name: "周", value: a },
            { name: "次周", value: a1 },
            { name: "季度", value: a2 },
            { name: "总", value: a3 }
          );
          self.showdata = values3;
          // console.log(values)
          self.myChart.setOption({
            series: [
              {
                name: "周",
                type: "line",
                stack: "总量",
                data: values
              },
              {
                name: "次周",
                type: "line",
                stack: "总量",
                data: values1
              },
              {
                name: "季度",
                type: "line",
                stack: "总量",
                data: values2
              }
            ],
            xAxis: {
              data: categoryData
            }
          });
        });
    },
    loaddata() {
      // axios.get("http://api.canbite.cn/api/market/info")
      this.$axios({
          url: this.FACTURL + "/api/market/info",
          method: "get",
      })
      .then(res => {
        this.house = res.data.data.house;
        let kong = [];
        for (let j = 0; j < this.house.length; j++) {
          if (kong.indexOf(this.house[j][0]) == -1) {
            kong.push(this.house[j][0]);
          }
        }
        if (kong.indexOf("Binance") != -1) {
          this.Binanceindex = kong.indexOf("Binance");
        }
        if (kong.indexOf("Bitfinex") != -1) {
          this.Bitfinexindex = kong.indexOf("Bitfinex");
        }
        if (kong.indexOf("BitMex") != -1) {
          this.BitMEXindex = kong.indexOf("BitMex");
        }
        if (kong.indexOf("Huobi") != -1) {
          this.huobiindex = kong.indexOf("Huobi");
        }
        if (kong.indexOf("OKEX") != -1) {
          this.OKEXindex = kong.indexOf("OKEX");
        }
      });
    },

    changejiaoyisuo(i, j) {
      this.daohang = i;
      this.jiaoyisuo = j;
    },
    switchtime(v) {
      this.choosetime = v;
      if ((this.showshow = "账户数")) {
        if (this.choosetime == "5分") {
          console.log(1);
        }
      }
    }
  },
  computed: {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box3 {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.gap {
  width: 100%;
  height: 25rem;
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
}
.choose {
  width: 100%;
  margin-bottom: 0.5rem;
  height: 1.5rem;
  position:relative;
}
.choose .zhanghushu {
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  background: #fff;
  color: #507cc1;
  border: 1px solid #507cc1;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 600;
}
.choose .choose_left{
  position:absolute;
  height:1px;
  background-image: linear-gradient(to right, #FFF , #507CC1);
  width:20%;
  left:20%;
  top:0.75rem;
}
.choose .choose_right{
  position:absolute;
  height:1px;
  background-image: linear-gradient(to right, #507CC1 , #FFF);
  width:20%;
  right:20%;
  top:0.75rem;
}
.choose .chicangliang {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  background: rgba(199, 237, 204);
  border-radius: 5px;
}
.show {
  width: 100%;
  background: #fff;
  overflow: hidden;
  margin-top: 1rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}
.show .p1 {
  width: 100%;
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
  color:#1B3B6C;
}
.show .p1 .p1_time_left{
  display:inline-block;
  width:50%;
}
.show .p1 .p1_time{
  display:inline-block;
  width:50%;
}
.show .p1 .p1_time{
  position:relative;
}
.show .p1 .p1_time .p1_ag{
  position:absolute;
  top:-0.75rem;
  right:0rem;
  width:3.1rem;
  border:1px solid #507CC1;
  border-radius: 0.2rem;
  overflow: hidden;
  height: 1rem;
  line-height: 1rem;
}
.show .p1 .p1_time .p1_ag div{
  display:inline-block;
}
.show .p1 .p1_time .p1_ag .p1_ag_name{
  width:2.2rem;
  text-align: center;
}
.show .p1 .p1_time_tim{
  position:absolute;
  top:-0.75rem;
  right:0rem;
  width:3.1rem;
}
.p1_time_tim ul{
  border:1px solid #507CC1;
  border-radius: 0.2rem;
  overflow: hidden;
}
.p1_time_tim ul li {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f7f7f7;
  height: 1rem;
  line-height: 1rem;
}
.show .p2 {
  width: 50%;
  float: left;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #1b3b6c;
}
.p2:nth-child(2) span {
  color: #507cc1;
}
.p2:nth-child(3) span {
  color: #f85f56;
}
.p2:nth-child(4) span {
  color: #1f3e6e;
}
.p2:nth-child(5) span {
  color: rgba(199, 237, 204);
}
.daohang {
  width: 100%;
  height: 1.8rem;
  border-radius: 10px;
  color: #507cc1;
  background: #ffffff;
  display: flex;
  margin-bottom: 0.5rem;
}
.daohang .nav {
  width: 33.3333%;
  height: 1.8rem;
  line-height: 1.8rem;
  float: left;
  text-align: center;
  font-size: 0.58rem;
  letter-spacing: 0.01rem;
  border-right: 2px solid #507cc1;
  box-sizing: border-box;
}
.daohang .nav:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.daohang .nav:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-right: none;
}
.daohang .nav.cur {
  background: #507cc1;
  color: #f7f7f7;
}

.box1 {
  height: 31.5rem;
  padding: 0 0.5rem;
}
.box1 .wrap1 {
  width: 100%;
  position: relative;
  top: 1.2rem;
  left: 0;
  border: 2.4px solid #edecec;
  border-radius: 8px;
}
.box1 .wrap1 .wrap11 {
  width: 100%;
  height: 100%;
}
.box1 .wrap1 .wrap11 .shang {
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid #edecec;
}
.box1 .wrap1 .wrap11 .shang .wrap1_img {
  width: 30%;
  height: 100%;
  float: left;
}
.box1 .wrap1 .wrap11 .shang .wrap1_img img {
  width: 15%;
  margin-top: 15%;
  margin-left: 60%;
}
.box1 .wrap1 .wrap11 .shang .biaoti1 {
  text-align: center;
  font-size: 0.7rem;
  color: #000000;
  width: 40%;
  height: 2rem;
  float: left;
  line-height: 2rem;
}
.zong {
  width: 100%;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
}
.wrap1 .zong .bi {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  box-sizing: border-box;
  background: #ff8686;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}
.wrap1 .zong .bi .zi {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  background: #26d17f;
  border-radius: 1rem 0 0 1rem;
  padding-left: 1rem;
}
.wrap1 .zong .bi .zi .duo {
  position: relative;
  left: 0.2rem;
  font-size: 0.37rem;
}
.wrap1 .zong .bi .zi .shushu {
  font-size: 0.65rem;
}
.wrap1 .zong .bi .zi1 {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  position: absolute;
  right: 3rem;
}
.wrap1 .zong .bi .zi1 .two {
  font-size: 0.65rem;
}
.wrap1 .zong .bi .zi1 .two .kong {
  font-size: 0.37rem;
}

.wrap3 {
  width: 100%;
  border: 2.4px solid #edecec;
  border-radius: 8px;
  margin-top: 1.5rem;
}
.wrap3 .wrap11 {
  width: 100%;
  height: 100%;
}
.wrap3 .wrap11 .shang {
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid #edecec;
}
.wrap3 .wrap11 .shang .biaoti1 {
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
}

.wrap3 .zong {
  width: 100%;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
}
.wrap3 .zong .bi {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  display: flex;
  box-sizing: border-box;
  background: #ff8686;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
}
.wrap3 .zong .bi .zi {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  background: #26d17f;
  border-radius: 1rem 0 0 1rem;
  padding-left: 1rem;
}
.wrap3 .zong .bi .zi .duo {
  position: relative;
  left: 0.2rem;
  font-size: 0.37rem;
}
.logologo {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.wrap3 .zong .bi .zi .shushu {
  font-size: 0.65rem;
}
.wrap3 .zong .bi .zi1 {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  position: absolute;
  right: 3rem;
}
.wrap3 .zong .bi .zi1 .two {
  font-size: 0.65rem;
}
.wrap3 .zong .bi .zi1 .two .kong {
  font-size: 0.37rem;
}

.box2 {
  height: 28.4rem;
}

.wrap2 {
  position: relative;
  width: 100%;
  height: 50rem;
  /* margin-top: 1.8rem; */
  left: 0rem;
  padding: 0 0.2rem;
  background: #f7f7f7;
}
.wrap2 .biaoti2 {
  position: absolute;
  top: 0.5rem;
  width: 10rem;
  height: 1.5rem;
  left: 34%;
  margin-left: -2.5rem;
  text-align: center;
  font-size: 0.7rem;
  color: #000000;
}
.wrap2 .beijing {
  width: 97%;
  height: 8rem;
  overflow: hidden;
}
.wrap2 .fen {
  position: absolute;
  top: 2rem;
  left: -0.1rem;
  width: 100%;
}
.wrap2 .bao {
  width: 94%;
  min-height: 2.5rem;
  position: absolute;
  top: 1.7rem;
  left: 0.3rem;
  text-align: center;
  overflow: hidden;
}
.wrap2 .bao .every {
  width: 33.3%;
  height: 2.5rem;
  font-size: 0.5rem;
  float: left;
  color: #818181;
}
.wrap2 .bao .every p {
  position: relative;
  top: 0.2rem;
  color: #8d1414;
  font-size: 0.6rem;
}
.wrap2 .bao .kuang {
  width: 100%;
  height: 4.4rem;
  position: absolute;
  left: -0.1rem;
  top: 0rem;
}
.wrap2 .bao .xian1 {
  position: absolute;
  text-align: center;
  left: 4.9rem;
  top: -0.1rem;
  width: 0.4rem;
  height: 2.4rem;
}
.wrap2 .bao .xian2 {
  width: 0.4rem;
  height: 2.4rem;
  position: absolute;
  left: 10rem;
  top: -0.1rem;
}
.wrap2 .bao .xian3 {
  width: 0.4rem;
  height: 2.4rem;
  position: absolute;
  left: 4.9rem;
  top: 2rem;
}
.wrap2 .bao .xian4 {
  width: 0.4rem;
  height: 2.4rem;
  position: absolute;
  left: 10rem;
  top: 2rem;
}
.wrap2 .tiao1 {
  position: absolute;
  top: 2rem;
  left: 0.4rem;
  width: 92.3%;
  height: 1.4rem;
  background: #f7f7f7;
}
.wrap2 .tiao2 {
  position: absolute;
  top: 4.7rem;
  left: 0.4rem;
  width: 92.3%;
  height: 1.4rem;
  background: #f7f7f7;
}
.wrap2 .d1 {
  position: absolute;
  width: 2.6rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 0.5rem;
  top: 2.1rem;
  left: 0.5rem;
  text-align: center;
}
.wrap2 .d2 {
  position: absolute;
  width: 2.6rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 0.5rem;
  top: 3.4rem;
  left: 0.5rem;
  text-align: center;
}
.wrap2 .d3 {
  position: absolute;
  width: 2.6rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 0.5rem;
  top: 4.8rem;
  left: 0.5rem;
  text-align: center;
}
.wrap2 .d4 {
  position: absolute;
  width: 2.6rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 0.5rem;
  top: 6.1rem;
  left: 0.5rem;
  text-align: center;
}
.wrap2 .title {
  width: 13rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 0.6rem;
}
.wrap2 .title .shang1 {
  position: absolute;
  top: 0.1rem;
  left: 0.5rem;
  width: 13rem;
  height: 1.25rem;
  display: flex;
  color: #979797;
  font-size: 0.5rem;
}
.wrap2 .title .shang1 p {
  width: 2.6rem;
  flex: 1;
  text-align: center;
  line-height: 1.4rem;
}
.wrap2 .title .shang2 {
  position: absolute;
  top: 1.18rem;
  left: 0.5rem;
  width: 13rem;
  height: 1.2rem;
  display: flex;
  color: #8d1414;
}
.wrap2 .title .shang2 p {
  width: 2.6rem;
  flex: 1;
  text-align: center;
  line-height: 1.8rem;
}
.wrap2 .title .shang3 {
  position: absolute;
  top: 2.58rem;
  left: 0.5rem;
  width: 13rem;
  height: 1.4rem;
  display: flex;
  color: #979797;
  line-height: 1.4rem;
  font-size: 0.5rem;
}
.wrap2 .title .shang3 p {
  width: 2.6rem;
  flex: 1;
  text-align: center;
  line-height: 1.8rem;
}
.wrap2 .title .shang4 {
  position: absolute;
  top: 3.84rem;
  left: 0.5rem;
  width: 13rem;
  height: 1.2rem;
  color: #8d1414;
  display: flex;
}
.wrap2 .title .shang4 p {
  width: 2.6rem;
  flex: 1;
  text-align: center;
  line-height: 2rem;
}

.laiyuan {
  font-size: 0.5rem;
  width: 100%;
  height: 5rem;

  padding: 1rem 2rem 0rem 2rem;
  box-sizing: border-box;
}
.number {
  color: #a9a9a9;
  font-size: 0.5rem;
  width: 20%;
  height: 5rem;
  float: left;
  line-height: 2rem;
  margin-right: 0.5rem;
}
.lai_img {
  width: 30%;
  height: 2rem;
  float: left;
  line-height: 2rem;
}
.lai_img img {
  width: 0.8rem;
  position: relative;
  top: 0.2rem;
  margin-right: 0.2rem;
}

/* 提示 */
.reminder {
  position: fixed;
  padding: 0.5rem;
  width: 10rem;
  left: 50%;
  margin-left: -5rem;
  background: #fff;
  top: 10rem;
  z-index: 1001;
  text-align: center;
  border-radius: 10px;
  letter-spacing: 0.02rem;
}
.coverage {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  top: 0rem;
  left: 0;
}

.wrap4 {
  width: 100%;
  height: 14rem;
  position: relative;
  top: 0.8rem;
  padding: 0 0.43rem;
  box-sizing: border-box;
  background: #f7f7f7;
}
.wrap4 .daohang {
  width: 100%;
  height: 1.8rem;
  border-radius: 10px;
  color: #507cc1;
  background: #ffffff;
  position: relative;
  top: 0.5rem;
  display: flex;
}
.wrap4 .daohang .nav {
  width: 33.3333%;
  height: 1.8rem;
  line-height: 1.8rem;
  float: left;
  text-align: center;
  font-size: 0.58rem;
  letter-spacing: 0.01rem;
  border-right: 2px solid #507cc1;
  box-sizing: border-box;
}
.wrap4 .daohang .nav:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.wrap4 .daohang .nav:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-right: none;
}
.wrap4 .daohang .nav.cur {
  background: #507cc1;
  color: #f7f7f7;
}
.wrap4 .daohang .nav img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
  left: -0.1rem;
}
.wrap4 .zhongjian {
  width: 100%;
  border-radius: 10px;
  position: relative;
  top: 1rem;
  background: #ffffff;
}
.wrap4 .every {
  width: 100%;
  height: 2rem;
  /* overflow: hidden; */
}
.wrap4 .every:nth-child(even) {
  background: #f8fcfd;
}
.wrap4 .every .one {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding-left: 1rem;
  font-size: 0.6rem;
  letter-spacing: 0.01rem;
}
.wrap4 .every .one span {
  color: #507cc1;
  font-size: 0.6rem;
}
.fanren {
  width: 100%;
  height: 4rem;
}
.laqu {
  width: 100%;
  height: 60vh;
  line-height: 60vh;
  text-align: center;
  color: #afb2c5;
}

/* loading */
.loading {
  position: fixed;
  top: 40%;
  margin-top: -50px;
  width: 100px;
  left: 50%;
  margin-left: -60px;
  height: 120px;
}



.top{
  width:0.8rem;
  height:0.53em;
}
.top img{
  width:100%;
  height:100%;
}
.pitem_name{
  display:inline-block;
  width:2.2rem;
  text-align: center;
}
.down{
  display:inline-block;
  width:0.8rem;
  height:0.53em;
}
.down img{
  width:100%;
  height:100%;
}
</style>