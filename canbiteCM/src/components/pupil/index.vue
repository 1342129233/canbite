<!-- 多空人数 -->
<template>
  <div>
    <div v-if="house">
      <div v-if="duo==true" class="box3">
        <div class="gap">
          <div class="choose">
            <div
              class="zhanghushu"
              @click="zhanghushu"
              :style="{'background':showshow == '账户数' ? '#EDF3FE' : '#FFF'}"
            >
              <div class="zhanghushu_title">
                <div class="zhanghushu_title_xian"></div>
                <div
                  class="zhanghushu_title_name"
                  :style="{'background':showshow == '账户数' ? '#EDF3FE' : '#FFF'}"
                >账户数</div>
              </div>
              <div class="zhanghushu_content">精英帐户多空持仓对比</div>
            </div>
            <div
              class="chicangliang"
              @click="chicangliang"
              :style="{'background':showshow == '持仓量' ? '#EDF3FE' : '#FFF'}"
            >
              <div class="chicangliang_title">
                <div class="chicangliang_title_xian"></div>
                <div
                  class="chicangliang_title_name"
                  :style="{'background':showshow == '持仓量' ? '#EDF3FE' : '#FFF'}"
                >持仓量</div>
              </div>
              <div class="chicangliang_content">精英帐户多空持仓对比</div>
            </div>
          </div>
          <!-- <div class="daohang">
                      <div class="nav" v-for="item in house.sort((a,b)=>a[1]-b[1])" @click="changejiaoyisuo(item[0],item[1])" :class="{'cur':item[0]==daohang}">
                        {{item[0]}}
                      </div>
          </div>-->
          <!-- v-for="item in duodata" @click="switchtime(item.value)" -->
          <!-- {{item.value}} -->
          <div class="show">
            <div class="p1">
              <div class="p1_time_left">{{time}}</div>
              <div class="p1_time">
                <div class="p1_ag" @click="clickSelect" v-show="!timeser">
                  <div class="p1_ag_name">{{selectValue}}</div>
                  <div class="top">
                    <img src="@/images/top.png" />
                  </div>
                </div>
                <div class="p1_time_tim" v-show="timeser">
                  <ul>
                    <li v-for="(item,index) in selectValue_time" @click="tsoption(index)">
                      <div class="pitem_name">{{item}}</div>
                      <div class="down" v-if="index == 0">
                        <img src="@/images/down.png" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="p2" v-for="i in showdata">
              {{i.name}}:
              <span>{{i.value}}%</span>
            </div>
          </div>
          <div style="width:100%;height:10rem" ref="chart"></div>
        </div>
      </div>
    </div>
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
      showshow: "账户数",
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
            self.time = self.time.slice(0, 10).concat(" ", params[0].axisValue);
            // console.log(params)

            if (self.showshow == "持仓量") {
              let arr = [];
              arr.push(
                { name: "持多", value: params[0].value },
                { name: "持空", value: params[1].value }
              );
              self.showdata = arr;
            } else {
              let arr = [];
              arr.push(
                { name: "持多", value: params[0].value },
                { name: "持空", value: params[1].value },
                { name: "锁仓", value: params[2].value }
              );
              self.showdata = arr;
            }
          }
        },
        legend: {
          data: ["净多仓的", "净空仓的", "锁仓的"]
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
      // param.append('hid',self.jiaoyisuo);
      param.append("cid", 19);
      // this.$axios
      //   .post("http://api.canbite.cn/api/market/futures_elite_accout", param, {
      //     //post请求，在请求时会自动把param拼接再Param后面
      //     // this.$axios.post('http://api.canbite.cn/api/market/futures_elite_accout',param,{//post请求，在请求时会自动把param拼接再Param后面
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
      //     }
      //   })
        this.$axios({
          url: this.FACTURL + "/api/market/futures_elite_accout",
          method: "post",
          data:param,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
          }
        })
        .then(function(response) {
          // console.log(response.data.data)
          let categoryData = [];
          let values = [];
          let values1 = [];
          let values2 = [];
          let values3 = [];
          let resData = response.data.data.fear;
          for (let i = 0; i < resData.length; i++) {
            categoryData.push(resData[i][3].slice(11, 16));
            values.push((resData[i][0] * 100).toFixed(2));
            values1.push((resData[i][1] * 100).toFixed(2));
            values2.push((resData[i][2] * 100).toFixed(2));
          }
          self.time = resData[0][3]
            .slice(0, 10)
            .concat(" ", resData[0][3].slice(11, 16));
          values3.push(
            { name: "持多", value: (resData[0][0] * 100).toFixed(2) },
            { name: "持空", value: (resData[0][1] * 100).toFixed(2) },
            { name: "锁仓", value: (resData[0][2] * 100).toFixed(2) }
          );
          self.showdata = values3;
          // console.log(values)
          self.myChart.setOption({
            series: [
              {
                name: "净多仓的",
                type: "line",
                stack: "总量",
                data: values
              },
              {
                name: "净空仓的",
                type: "line",
                stack: "总量",
                data: values1
              },
              {
                name: "锁仓的",
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
    chicangliang() {
      this.myChart.setOption({
        legend: {
          data: ["净多仓的", "净空仓的"]
        }
      });
      this.showshow = "持仓量";
      var self = this;
      let param = new URLSearchParams();
      // param.append('hid',self.jiaoyisuo);
      param.append("cid", 19);
      // this.$axios
      //   .post("http://api.canbite.cn/api/market/futures_elite_pos", param, {
      //     //post请求，在请求时会自动把param拼接再Param后面
      //     // this.$axios.post('http://api.canbite.cn/api/market/futures_elite_accout',param,{//post请求，在请求时会自动把param拼接再Param后面
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
      //     }
      //   })
      this.$axios({
        url: this.FACTURL + "/api/market/futures_elite_pos",
        method: "post",
        data:param,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
        }
      })
        .then(function(response) {
          // console.log(response)
          let categoryData = [];
          let values = [];
          let values1 = [];
          let values3 = [];
          let resData = response.data.data.fepr;
          for (let i = 0; i < resData.length; i++) {
            categoryData.push(resData[i][2].slice(11, 16));
            values.push((resData[i][0] * 100).toFixed(2));
            values1.push((resData[i][1] * 100).toFixed(2));
          }
          self.time = resData[0][2]
            .slice(0, 10)
            .concat(" ", resData[0][2].slice(11, 16));
          values3.push(
            { name: "持多", value: (resData[0][0] * 100).toFixed(2) },
            { name: "持空", value: (resData[0][1] * 100).toFixed(2) }
          );
          self.showdata = values3;
          // console.log(values)
          self.myChart.setOption({
            series: [
              {
                name: "净多仓的",
                type: "line",
                stack: "总量",
                data: values
              },
              {
                name: "净空仓的",
                type: "line",
                stack: "总量",
                data: values1
              }
            ],
            xAxis: {
              data: categoryData
            }
          });
        });
    },
    zhanghushu() {
      this.showshow = "账户数";
      var self = this;
      let param = new URLSearchParams();
      param.append("hid", self.jiaoyisuo);
      param.append("cid", 19);
      this.$axios
        // .post("http://api.canbite.cn/api/market/futures_elite_accout", param, {
        //   //post请求，在请求时会自动把param拼接再Param后面
        //   // this.$axios.post('http://api.canbite.cn/api/market/futures_elite_accout',param,{//post请求，在请求时会自动把param拼接再Param后面
        //   headers: {
        //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
        //   }
        // })
        this.$axios({
          url: this.FACTURL + "/api/market/futures_elite_accout",
          method: "post",
          data:param,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //必须要加头
          }
        })
        .then(function(response) {
          // console.log(response.data.data)
          let categoryData = [];
          let values = [];
          let values1 = [];
          let values2 = [];
          let values3 = [];
          let resData = response.data.data.fear;
          for (let i = 0; i < resData.length; i++) {
            categoryData.push(resData[i][3].slice(11, 16));
            values.push((resData[i][0] * 100).toFixed(2));
            values1.push((resData[i][1] * 100).toFixed(2));
            values2.push((resData[i][2] * 100).toFixed(2));
          }
          self.time = resData[0][3]
            .slice(0, 10)
            .concat(" ", resData[0][3].slice(11, 16));
          values3.push(
            { name: "持多", value: (resData[0][0] * 100).toFixed(2) },
            { name: "持空", value: (resData[0][1] * 100).toFixed(2) },
            { name: "锁仓", value: (resData[0][2] * 100).toFixed(2) }
          );
          self.showdata = values3;
          // console.log(values)
          self.myChart.setOption({
            series: [
              {
                name: "净多仓的",
                type: "line",
                stack: "总量",
                data: values
              },
              {
                name: "净空仓的",
                type: "line",
                stack: "总量",
                data: values1
              },
              {
                name: "锁仓的",
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
      axios({
        url: this.FACTURL + "/api/market/info",
        method: "get"
      })
        // axios.get("http://api.canbite.cn/api/market/info")
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
ul,
li {
  list-style: none;
}
.box3 {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  /* position: fixed; */
  /* top: 0;
  left: 0;
  z-index: 2; */
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
  display: flex;
}
.choose .zhanghushu {
  width: 48%;
  text-align: center;
  line-height: 1rem;
  border-radius: 5px;
  margin-right: 2%;
  box-sizing: border-box;
  border: 1px solid #507cc1;
  height: 3rem;
  background: #fff;
}
.choose .zhanghushu .zhanghushu_title {
  position: relative;
  height: 1.5rem;
  clear: both;
}
.choose .zhanghushu .zhanghushu_title .zhanghushu_title_xian {
  position: absolute;
  width: 70%;
  height: 0px;
  top: 0.75rem;
  left: 15%;
  color: #6b809f;
  border: 0.5px solid #6b809f;
}
.choose .zhanghushu .zhanghushu_title .zhanghushu_title_name {
  text-align: center;
  font-size: 0.7rem;
  color: #1b3b6c;
  width: 3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  left: 50%;
  margin-left: -1.5rem;
  background: #fff;
  position: absolute;
}
.zhanghushu_content {
  height: 1.3rem;
  line-height: 1.3rem;
  color: #1b3b6c;
}
.choose .chicangliang {
  width: 48%;
  text-align: center;
  line-height: 1rem;
  border-radius: 5px;
  margin-left: 2%;
  box-sizing: border-box;
  border: 1px solid #507cc1;
  height: 3rem;
  background: #fff;
}
.choose .chicangliang .chicangliang_title {
  position: relative;
  height: 1.5rem;
  clear: both;
}
.choose .chicangliang .chicangliang_title .chicangliang_title_xian {
  position: absolute;
  width: 70%;
  height: 0px;
  top: 0.75rem;
  left: 15%;
  color: #6b809f;
  border: 0.5px solid #6b809f;
}
.choose .chicangliang .chicangliang_title .chicangliang_title_name {
  text-align: center;
  font-size: 0.7rem;
  color: #1b3b6c;
  width: 3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  left: 50%;
  margin-left: -1.5rem;
  background: #fff;
  position: absolute;
}
.chicangliang_content {
  height: 1.3rem;
  line-height: 1.3rem;
  color: #1b3b6c;
}
.option {
  width: 100%;
  margin-top: 1rem;
}
.option div {
  display: inline-block;
  width: 2.5rem;
  height: 1rem;
  line-height: 1rem;
  color: #507cc1;
  border: 1px solid #507cc1;
  border-radius: 0.2rem;
  text-align: center;
  margin-right: 0.5rem;
  background: #fff;
}
.option .active {
  border: 1px solid #c6dcff;
  background: #c6dcff;
  color: #1b3b6c;
}
.show {
  width: 100%;
  background: #fff;
  margin-top: 1rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  height: 4rem;
}
.show .p1 {
  width: 100%;
  float: left;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #1b3b6c;
}
.show .p1 .p1_time_left {
  display: inline-block;
  width: 50%;
}
.show .p1 .p1_time {
  display: inline-block;
  width: 50%;
}
.show .p1 .p1_time {
  position: relative;
}
.show .p1 .p1_time .p1_ag {
  position: absolute;
  top: -0.75rem;
  right: 0rem;
  width: 3.1rem;
  border: 1px solid #507cc1;
  border-radius: 0.2rem;
  overflow: hidden;
  height: 1rem;
  line-height: 1rem;
}
.show .p1 .p1_time .p1_ag div {
  display: inline-block;
}
.show .p1 .p1_time .p1_ag .p1_ag_name {
  width: 2.2rem;
  text-align: center;
}
.show .p1 .p1_time_tim {
  position: absolute;
  top: -0.75rem;
  right: 0rem;
  width: 3.1rem;
}
.p1_time_tim ul {
  border: 1px solid #507cc1;
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
  width: 33%;
  float: left;
  height: 1rem;
  line-height: 1rem;
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

.top {
  width: 0.8rem;
  height: 0.53em;
}
.top img {
  width: 100%;
  height: 100%;
}
.pitem_name {
  display: inline-block;
  width: 2.2rem;
  text-align: center;
}
.down {
  display: inline-block;
  width: 0.8rem;
  height: 0.53em;
}
.down img {
  width: 100%;
  height: 100%;
}
</style>