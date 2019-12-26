<template>
  <div>
    <div v-if="zong && zong.length>0 && zong1 && zong1.length>0 && house.length != 0">
      <div class="box1">
        <div class="wrap1">
          <div class="wrap11">
            <div class="shang">
              <div class="wrap1_img">
                <img src="@/images/usdts/usdts10.png" @click="coverage_img" />
              </div>
              <div class="xiantou"></div>
              <div class="biaoti1">多空占比图</div>
            </div>
            <div class="zong" v-if="zong && zong.length>0">
              <div
                class="bi"
                v-for="(item,index) in (zong).filter(item=>item[1]==categoryIndex).sort((a,b)=>a[2]-b[2]).sort((i,j)=>i[0]-j[0])"
              >
                <div class="zi" :style="{'width':parseFloat(item[3])+'%'}">
                  <div class="tutu">
                    <!-- okex -->
                    <img
                      src="@/images/usdts/logo/1.png"
                      alt
                      class="logologo"
                      v-show="item[0]==house[OKEXindex][1]"
                    />
                    <!-- BitMEX -->
                    <img
                      src="@/images/usdts/logo/6.png"
                      alt
                      class="logologo"
                      v-show="item[0]==house[BitMEXindex][1]"
                    />
                    <!-- Bitfinex -->
                    <!-- <img src="@/images/usdts/logo/7.png" alt="" class="logologo" v-show="item[0]==house[Bitfinexindex][1]"> -->
                    <!-- binance -->
                    <!-- <img src="@/images/usdts/logo/5.png" alt="" class="logologo" v-show="item[0]==house[Binanceindex][1]"> -->
                    <!-- huobi -->
                    <img
                      src="@/images/usdts/logo/Huobi.png"
                      alt
                      class="logologo"
                      v-show="item[0]==house[huobiindex][1]"
                    />
                    &nbsp;&nbsp;
                    <span class="time">{{contract_cat[item[2]]}}</span>
                    <span class="duo">多</span>
                    &nbsp;
                    <span class="shushu">{{item[3]}}%</span>
                  </div>
                </div>
                <div class="zi1">
                  <span class="two">
                    {{item[4]}}%
                    <span class="kong">空</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="laqu" v-else>正在获取最新数据的路上...</div> -->
        <div v-if="zong1 && zong1.length>0">
          <div class="wrap3">
            <div class="wrap11">
              <div class="shang">
                <div class="xiantou"></div>
                <div class="biaoti1">全网多空占比图</div>
              </div>
            </div>
            <div class="zong">
              <div
                class="bi"
                v-for="item in zong1.filter(item=>item[2]==categoryIndex)"
                :key="item[3]"
              >
                <div class="zi" :style="{'width':parseFloat(item[0])+'%'}">
                  <div class="tumiss">
                    <!-- okex -->
                    <img
                      src="@/images/usdts/logo/1.png"
                      alt
                      class="logologo"
                      v-show="item[3]==house[OKEXindex][1]"
                    />
                    <!-- BitMEX -->
                    <img
                      src="@/images/usdts/logo/6.png"
                      alt
                      class="logologo"
                      v-show="item[3]==house[BitMEXindex][1]"
                    />
                    <!-- Bitfinex -->
                    <img
                      src="@/images/usdts/logo/7.png"
                      alt
                      class="logologo"
                      v-show="item[3]==house[Bitfinexindex][1]"
                    />
                    <!-- binance -->
                    <img
                      src="@/images/usdts/logo/5.png"
                      alt
                      class="logologo"
                      v-show="item[3]==house[Binanceindex][1]"
                    />
                    <!-- huobi -->
                    <img
                      src="@/images/usdts/logo/Huobi.png"
                      alt
                      class="logologo"
                      v-show="item[3]==house[huobiindex][1]"
                    />
                    &nbsp;&nbsp;
                    <span class="duo">多</span>
                    &nbsp;
                    <span class="shushu">{{item[0]}}%</span>
                  </div>
                </div>
                <div class="zi1">
                  <span class="two">
                    {{item[1]}}%
                    <span class="kong">空</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="laiyuan">
          <div class="number">数据来源</div>
          <div class="lai_img">
            <img class="bisuo" src="@/images/usdts/logo/1.png" />
            <span>Okex</span>
          </div>
          <div class="lai_img">
            <img class="bisuo" src="@/images/usdts/logo/7.png" />
            <span>Bitfinex</span>
          </div>
          <div class="lai_img">
            <img class="bisuo" src="@/images/usdts/logo/6.png" />
            <span>BitMEX</span>
          </div>
          <div class="lai_img">
            <img class="bisuo" src="@/images/usdts/logo/5.png" />
            <span>Binance</span>
          </div>
          <div class="lai_img">
            <img class="bisuo" src="@/images/usdts/logo/Huobi.png" />
            <span>Huobi</span>
          </div>
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
import Loading from "@/components/loading/index.vue";
import axios from "axios";
export default {
  name: "usdt",
  data() {
    return {
      xian: false,
      duo: false,
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
      Binanceindex: "",
      Bitfinexindex: "",
      BitMEXindex: "",
      huobiindex: "",
      OKEXindex: "",
      pl_head: [
        { id: 1, bizhong: "全网" },
        { id: 2, bizhong: "OKEx" },
        { id: 4, bizhong: "Huobi" }
      ],
      first: "OKEx"
    };
  },
  components: {
    Loading
  },
  async created() {
    await this.loaddata();
    // console.log(this.house);
    //  this.loaddata1()
  },
  mounted() {
    // this.initCharts1();
    // this.add1();
  },
  methods: {
    async loaddata() {
      //http://api.canbite.cn/api/market/info
      let res = await axios({
        url:this.FACTURL+'/api/market/info',
        method:'get'
      })
      // let res = await axios.get("http://api.canbite.cn/api/market/info");
      this.house = res.data.data.house;
      // console.log(this.house)
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
      if (kong.indexOf("BitMEX") != -1) {
        this.BitMEXindex = kong.indexOf("BitMEX");
      }
      if (kong.indexOf("huobi") != -1) {
        this.huobiindex = kong.indexOf("huobi");
      }
      if (kong.indexOf("OKEX") != -1) {
        this.OKEXindex = kong.indexOf("OKEX");
      }
    },
    coverage_img() {
      //同步
      this.$store.commit("yingOne", 1);
    },
    // changejiaoyisuo(i,j){
    //   this.daohang=i
    //   this.jiaoyisuo=j
    // },
    // switchtime(v){
    //   if(this.showshow="账户数"){
    //     console.log(1)
    //   }
    // },
    changejiaoyisuo(i) {
      this.first = i;
      if (i == "OKEx") {
        this.$store.commit("sendtype", "PL_1");
      } else if (i == "全网") {
        this.$store.commit("sendtype", "PL_1-3");
      } else if (i == "Huobi") {
        this.$store.commit("sendtype", "PL_3");
      }
    }
  },
  computed: {
    zong() {
      // console.log()
      return this.$store.state.received_msg;
    },
    isLogin() {
      return this.zong ? true : false;
    },
    zong1() {
      return this.$store.state.received_msg1;
    },
    isLogin1() {
      return this.zong1 ? true : false;
    },
    zong2() {
      // console.log(this.$store.state.received_msg2)
      return this.$store.state.received_msg2;
    },
    contract_cat() {
      return this.$store.state.contract_cat;
    },
    categoryIndex() {
      return this.$store.state.categoryIndex;
    }
    // house() {
    //   return this.$store.state.house;
    // },
    // websocketcode(){
    //   return this.$store.state.websocketcode
    // }
  }
};
</script>
<style scoped>
element.style {
  width: 100%;
  /* -webkit-tap-highlight-color: transparent; */
  /* user-select: none; */
  /* position: relative; */
}
* {
  margin: 0;
  padding: 0;
}
.box3 {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.gap {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}
.choose {
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
}
.choose .zhanghushu {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  background: pink;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.choose .chicangliang {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  background: pink;
  border-radius: 5px;
}
.option {
  height: 1.5rem;
  float: left;
  margin-left: 0.5rem;
  background: cyan;
  line-height: 1.5rem;
  margin-bottom: 1rem;
}
.show {
  width: 100%;
  background: pink;
  overflow: hidden;
  margin-top: 2rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-radius: 5px;
}
.show .p1 {
  width: 100%;
  float: left;
  height: 1rem;
  line-height: 1rem;
}
.show .p2 {
  width: 50%;
  float: left;
  height: 1rem;
  line-height: 1rem;
}
.daohang {
  width: 100%;
  height: 1.8rem;
  border-radius: 10px;
  color: #507cc1;
  background: #ffffff;
  display: flex;
  margin-bottom: 1rem;
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
  background: #fff;
  border-radius: 0.2rem;
  /* 高斯模糊 */
  /* filter: blur(0.4px); */
}
.box1 .wrap1 .wrap11 .shang {
  width: 100%;
  height: 2rem;
  position: relative;
  /* border-bottom: 2px solid #edecec; */
}
.box1 .wrap1 .wrap11 .shang .wrap1_img {
  width: 40%;
  height: 100%;
  float: left;
}
.box1 .wrap1 .wrap11 .shang .wrap1_img img {
  width: 15%;
  margin-top: 5%;
  margin-left: 5%;
}
.box1 .wrap1 .wrap11 .shang .xiantou {
  width: 80%;
  height: 0px;
  position: absolute;
  top: 1rem;
  left: 10%;
  color: #6b809f;
  border: 0.5px solid #6b809f;
}
.box1 .wrap1 .wrap11 .shang .biaoti1 {
  text-align: center;
  font-size: 0.7rem;
  color: #1b3b6c;
  width: 6rem;
  height: 2rem;
  line-height: 2rem;
  left: 50%;
  margin-left: -3rem;
  background: #fff;
  position: absolute;
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
  background: #ffe9e9;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.wrap1 .zong .bi .zi {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: #1b3b6c;
  z-index: 9;
  background: #d8f5ea;
  border-radius: 1rem 0 0 1rem;
}
.wrap1 .zong .bi .zi div .time {
  position: absolute;
  left: 1.4rem;
}
.wrap1 .zong .bi .zi div .duo {
  position: relative;
  left: 1rem;
  top: 0.05rem;
  font-size: 0.37rem;
  color: #008344;
}
.wrap1 .zong .bi .zi div .shushu {
  font-size: 0.65rem;
  position: absolute;
  left: 4rem;
  color: #008344;
}
.wrap1 .zong .bi .zi1 {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  position: absolute;
  right: 2rem;
}
.wrap1 .zong .bi .zi1 .two {
  font-size: 0.65rem;
  color: #9d1e10;
}
.wrap1 .zong .bi .zi1 .two .kong {
  font-size: 0.37rem;
  color: #9d1e10;
}

.wrap3 {
  width: 100%;
  border: 2.4px solid #edecec;
  border-radius: 8px;
  margin-top: 1.5rem;
  background: #fff;
  /* 高斯模糊 */
  /* filter: blur(0.4px); */
}
.wrap3 .wrap11 {
  width: 100%;
  height: 100%;
}
.wrap3 .wrap11 .shang {
  width: 100%;
  height: 2rem;
  position: relative;

  /* border-bottom: 2px solid #edecec; */
}
.wrap3 .wrap11 .shang .xiantou {
  width: 80%;
  height: 0px;
  position: absolute;
  top: 1rem;
  left: 10%;
  color: #6b809f;
  border: 0.5px solid #6b809f;
}
.wrap3 .wrap11 .shang .biaoti1 {
  width: 6rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 0.7rem;
  color: #1b3b6c;
  background: #fff;
  position: absolute;
  left: 50%;
  margin-left: -3rem;
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
  background: #ffe9e9;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.wrap3 .zong .bi .zi {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  background: #d8f5ea;
  border-radius: 1rem 0 0 1rem;
}
.wrap3 .zong .bi .zi div .duo {
  position: absolute;
  left: 2.1rem;
  font-size: 0.37rem;
  color: #008344;
}
.tutu{
  padding-left:0.3rem;
}
.logologo {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.wrap3 .zong .bi .zi div .shushu {
  font-size: 0.65rem;
  color: #008344;
  position: absolute;
  left: 2.8rem;
}
.wrap3 .zong .bi .zi .tumiss {
  padding-left: 0.3rem;
}
.wrap3 .zong .bi .zi1 {
  font-size: 0.6rem;
  line-height: 1.3rem;
  color: white;
  z-index: 9;
  position: absolute;
  right: 2rem;
}
.wrap3 .zong .bi .zi1 .two {
  font-size: 0.65rem;
  color: #9d1e10;
}
.wrap3 .zong .bi .zi1 .two .kong {
  font-size: 0.37rem;
  color: #9d1e10;
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
  height: 10rem;
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
  width: 68%;
  height: 7rem;
  left: 50%;
  margin-left: -34%;
  background: #fff;
  top: 10rem;
  z-index: 1001;
  border-radius: 10px;
  letter-spacing: 0.02rem;
  background: url("../../../images/usdts/snap3.png");
  background-size: 100% 100%;
  padding-top: 1rem;
}
.reminder .reminder_top {
  position: relative;
  height: 1.5rem;
}
.reminder .reminder_top .reminder_xian {
  width: 60%;
  height: 0px;
  position: absolute;
  top: 0.6rem;
  left: 20%;
  color: #fe5800;
  border: 0.5px solid #fe5800;
}
.reminder .reminder_top .reminder_title {
  color: #fe5000;
  width: 3rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  background: #fff;
  font-size: 0.65rem;
  position: absolute;
  left: 50%;
  margin-left: -1.5rem;
}
.reminder_content {
  margin-left: 1rem;
  position: relative;
}
.reminder_content_qiouOne {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  background: #fe5000;
  border-radius: 50%;
  left: -0.8rem;
  top: 0.2rem;
}
.reminder_content_qiouTwo {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  background: #fe5000;
  border-radius: 50%;
  left: -0.8rem;
  top: 2.5rem;
}
.reminder_content_qiouThree {
  position: relative;
}
.reminder_content_qiouThree_img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -1.8rem;
  right: 0px;
}
.reminder_content_qiouThree_img img {
  width: 100%;
  height: 100%;
}
.reminder_content p {
  line-height: 0.8rem;
}
/* .coverage {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  top: 0rem;
  left: 0;
} */

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
</style>