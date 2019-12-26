<!-- 盘口 -->
<template>
  <div class="pankou">
    <Headers />
    <!-- <div class="header">
            <div class="logo">
                <img src="@/images/logo.png" alt="">
            </div>
            <div class="wenzi">
                <p class="p1">看比特</p>
                <img src="@/images/search.png" alt="">
                <p class="p2">www.canbite.cn</p>
            </div>
    </div>-->
    <div class="xuanze">
      <div class="huo" v-for="item in arr" :key="item.id">
        <p :class="{'cur':item.xuan==now}" @click="dianji(item.xuan)">{{item.xuan}}</p>
      </div>
      <!-- <div class="huoer">
              现货
      </div> -->
      <!-- <div class="huo1">
              <p class="xianjia">现价<span></span></p>
              <p class="jidu">okex<span></span></p>
      </div> -->
      <!-- <div class="huo1" >
        <div class="xianjia" :style="{color:zhun == 1 ? '#507cc1' : '#000'}" @click="zhunzhuan(1)">
          全网
          <span :style="{background:zhun == 1 ? '#507cc1' : '#FFF'}"></span>
        </div>
        <div class="xianjia" :style="{color:zhun == 2 ? '#507cc1' : '#000'}" @click="zhunzhuan(2)">
          okex
          <span :style="{background:zhun == 2 ? '#507cc1' : '#FFF'}"></span>
        </div>
        <div class="xianjia" :style="{color:zhun == 3 ? '#507cc1' : '#000'}" @click="zhunzhuan(3)">
          huobi
          <span :style="{background:zhun == 3 ? '#507cc1' : '#FFF'}"></span>
        </div>
      </div> -->
    </div>
    <div v-if="now == '现货' ? true : false">
      <div class="center" v-if="zongLeft != null">
        <div v-if="(Object.keys(zongLeft)).indexOf('BTC-USDT') >= 0">
          <div class="left">
            <div class="top">
              <p>{{payType}}深度{{house[huobiindex][1]}}</p>
            </div>
            <div class="middle1">
              <div class="p2" @click="qiehuan">切换</div>
              <div class="p3">价格</div>
              <div class="p4">数量</div>
              <div>
                <div class="zhanshi1" v-for="item in zongLeft[payType].ask">
                  <div class="yi" :style="{'width':item[1]+'%','background':'#f5d7d9'}"></div>
                  <p class="p5">
                    <!-- <img src="@/images/usdts/logo/1.png" alt /> -->
                    <!-- okex -->
                    <img src="@/images/usdts/logo/1.png" alt="" v-show="item[2]==house[OKEXindex][1]">
                    <!-- BItmex -->
                    <img src="@/images/usdts/logo/6.png" alt="" v-show="item[2]==house[BitMEXindex][1]">
                    <!-- Bitfinex -->
                    <img src="@/images/usdts/logo/7.png" alt="" v-show="item[2]==house[Bitfinexindex][1]">
                    <!-- binance -->
                    <img src="@/images/usdts/logo/5.png" alt="" v-show="item[2]==house[Binanceindex][1]">
                    <!-- huobi -->
                    <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[2]==house[huobiindex][1]">
                  </p>
                  <p class="p6">{{item[0]}}</p>
                  <p class="p7">{{item[1]}}</p>
                </div>
                <div class="maimai">
                  <p class="p8">
                    卖
                    <span class="en">{{AsknumberBTC}}%</span>
                  </p>
                  <p class="p9">
                    <span>{{BidnumberBTC}}%</span> 买
                  </p>
                </div>
                <div class="zhanshi2" v-for="item in zongLeft[payType].bid">
                  <div class="yi" :style="{'width':item[1]+'%','background':'#d6e3f9'}"></div>
                  <p class="p5">
                    <span>
                      <!-- <img src="@/images/usdts/logo/1.png" alt /> -->
                      <!-- okex -->
                      <img src="@/images/usdts/logo/1.png" alt="" v-show="item[2]==house[OKEXindex][1]">
                      <!-- BItmex -->
                      <img src="@/images/usdts/logo/6.png" alt="" v-show="item[2]==house[BitMEXindex][1]">
                      <!-- Bitfinex -->
                      <img src="@/images/usdts/logo/7.png" alt="" v-show="item[2]==house[Bitfinexindex][1]">
                      <!-- binance -->
                      <img src="@/images/usdts/logo/5.png" alt="" v-show="item[2]==house[Binanceindex][1]">
                      <!-- huobi -->
                      <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[2]==house[huobiindex][1]">
                    </span>
                  </p>
                  <p class="p6">{{item[0]}}</p>
                  <p class="p7">{{item[1]}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="biaoti">
              <p class="p2">成交大单</p>
              <p class="p3"></p>
              <P class="p4">买</P>
              <p class="p5"></p>
              <P class="p6">卖</P>
            </div>
            <div class="biaoti1">
              <p class="p5">时间</p>
              <p class="p6">平台</p>
              <p class="p7">价格</p>
              <p class="p8">数量</p>
            </div>
            <div class="shuzhi" v-for="item in zongRight[payType]">
              <p
                class="p9"
                :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}"
              >{{item[0].slice(14,19)}}</p>
              <p class="p10">
                <!-- <img src="@/images/usdts/logo/1.png" alt v-show="item[4]==1" />
                <img src="@/images/usdts/logo/6.png" alt v-show="item[4]==2" />
                <img src="@/images/usdts/logo/Huobi.png" alt v-show="item[4]==3" /> -->
                <!-- okex -->
                <img src="@/images/usdts/logo/1.png" alt="" v-show="item[4]==house[OKEXindex][1]">
                <!-- BItmex -->
                <img src="@/images/usdts/logo/6.png" alt="" v-show="item[4]==house[BitMEXindex][1]">
                <!-- Bitfinex -->
                <img src="@/images/usdts/logo/7.png" alt="" v-show="item[4]==house[Bitfinexindex][1]">
                <!-- binance -->
                <img src="@/images/usdts/logo/5.png" alt="" v-show="item[4]==house[Binanceindex][1]">
                <!-- huobi -->
                <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[4]==house[huobiindex][1]">
              </p>
              <p class="p11" :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}">{{item[1]}}</p>
              <p class="p12" :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}">{{item[2]}}</p>
            </div>
          </div>
        </div>
        <div v-else class="jiazaizhong">
          <div class="jiazaizhong_cn">正在获取最新数据...</div>
        </div>
      </div>
      <div v-else class="jiazaizhong">
        <div class="jiazaizhong_cn">正在获取最新数据...</div>
      </div>
    </div>
    <div v-if="now == '合约' ? true : false">
      <div class="center" v-if="zongLeft1 != null">
        <div v-if="(Object.keys(zongLeft1)).indexOf('BTC-USD') >= 0">
          <!-- 合约的内容1 -->
          <div class="left">
            <div class="top">
              <p>{{contractPayType}}深度</p>
            </div>
            <div class="middle1">
              <div class="p2" @click="contractQiehuan">切换</div>
              <div class="p3">价格</div>
              <div class="p4">数量</div>
              <div>
                <div class="zhanshi1" v-for="item in zongLeft1[contractPayType].ask">
                  <div class="yi" :style="{'width':item[1]+'%','background':'#f5d7d9'}"></div>
                  <p class="p5">
                    <!-- <img src="@/images/usdts/logo/1.png" alt v-show="item[2]==1" />
                    <img src="@/images/usdts/logo/6.png" alt v-show="item[2]==2" />
                    <img src="@/images/usdts/logo/Huobi.png" alt v-show="item[2]==3" /> -->
                    <!-- okex -->
                    <img src="@/images/usdts/logo/1.png" alt="" v-show="item[2]==house[OKEXindex][1]">
                    <!-- BItmex -->
                    <img src="@/images/usdts/logo/6.png" alt="" v-show="item[2]==house[BitMEXindex][1]">
                    <!-- Bitfinex -->
                    <img src="@/images/usdts/logo/7.png" alt="" v-show="item[2]==house[Bitfinexindex][1]">
                    <!-- binance -->
                    <img src="@/images/usdts/logo/5.png" alt="" v-show="item[2]==house[Binanceindex][1]">
                    <!-- huobi -->
                    <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[2]==house[huobiindex][1]">
                    <span>{{dangqianjiduheyongyu[item[4]].slice(0,1)}}</span>
                  </p>
                  <p class="p6">{{item[0]}}</p>
                  <p class="p7">{{item[1]}}</p>
                </div>
                <div class="maimai">
                  <p class="p8">
                    卖
                    <span class="en">{{AsknumberBTC1}}%</span>
                  </p>
                  <p class="p9">
                    <span>{{BidnumberBTC1}}%</span> 买
                  </p>
                </div>
                <div class="zhanshi2" v-for="item in zongLeft1[contractPayType].bid">
                  <div class="yi" :style="{'width':item[1]+'%','background':'#d6e3f9'}"></div>
                  <p class="p5">
                    <span>
                      <!-- <img src="@/images/usdts/logo/1.png" alt v-show="item[2]==1" />
                      <img src="@/images/usdts/logo/6.png" alt v-show="item[2]==2" />
                      <img src="@/images/usdts/logo/Huobi.png" alt v-show="item[2]==3" /> -->
                      <!-- okex -->
                      <img src="@/images/usdts/logo/1.png" alt="" v-show="item[2]==house[OKEXindex][1]">
                      <!-- BItmex -->
                      <img src="@/images/usdts/logo/6.png" alt="" v-show="item[2]==house[BitMEXindex][1]">
                      <!-- Bitfinex -->
                      <img src="@/images/usdts/logo/7.png" alt="" v-show="item[2]==house[Bitfinexindex][1]">
                      <!-- binance -->
                      <img src="@/images/usdts/logo/5.png" alt="" v-show="item[2]==house[Binanceindex][1]">
                      <!-- huobi -->
                      <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[2]==house[huobiindex][1]">
                      {{dangqianjiduheyongyu[item[4]].slice(0,1)}}
                    </span>
                  </p>
                  <p class="p6">{{item[0]}}</p>
                  <p class="p7">{{item[1]}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="right">
            <div class="biaoti">
              <p class="p2">成交大单</p>
              <p class="p3"></p>
              <P class="p4">买</P>
              <p class="p5"></p>
              <P class="p6">卖</P>
            </div>
            <div class="biaoti1">
              <p class="p5">时间</p>
              <p class="p6">平台</p>
              <p class="p7">价格</p>
              <p class="p8">数量</p>
            </div>
            <div class="shuzhi" v-for="item in zongRight1[contractPayType]">
              <p
                class="p9"
                :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}"
              >{{item[0].slice(14,19)}}</p>
              <p class="p10">
                <!-- <img src="@/images/usdts/logo/1.png" alt v-show="item[5]==1" />
                <img src="@/images/usdts/logo/6.png" alt v-show="item[5]==2" />
                <img src="@/images/usdts/logo/Huobi.png" alt v-show="item[5]==3" /> -->

                <!-- okex -->
                <img src="@/images/usdts/logo/1.png" alt="" v-show="item[5]==house[OKEXindex][1]">
                <!-- BItmex -->
                <img src="@/images/usdts/logo/6.png" alt="" v-show="item[5]==house[BitMEXindex][1]">
                <!-- Bitfinex -->
                <img src="@/images/usdts/logo/7.png" alt="" v-show="item[5]==house[Bitfinexindex][1]">
                <!-- binance -->
                <img src="@/images/usdts/logo/5.png" alt="" v-show="item[5]==house[Binanceindex][1]">
                <!-- huobi -->
                <img src="@/images/usdts/logo/Huobi.png" alt="" v-show="item[5]==house[huobiindex][1]">
                <span>{{dangqianjiduheyongyu[item[4]].slice(0,1)}}</span>
              </p>
              <p
                class="p11"
                :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}"
              >{{parseInt(Number(item[1]))}}</p>
              <p class="p12" :style="{'color':item[3] == 2 ?'#F85F56':'#52D091'}">{{item[2]}}</p>
            </div>
          </div>
        </div>
        <div v-else class="jiazaizhong">
          <div class="jiazaizhong_cn">正在获取最新数据...</div>
        </div>
      </div>
      <div v-else class="jiazaizhong">
        <div class="jiazaizhong_cn">正在获取最新数据...</div>
      </div>
    </div>

    <!-- 现货切换币种 -->
    <div class="choose" v-show="radShow">
      <h2>你想去哪个币种撒钱？</h2>
      <div
        class="input-radio"
        v-for="(item,index) in radios"
        :key="item.id"
        @click="check(item.label[0])"
      >{{item.value[0]}}</div>
    </div>
    <!-- 合约切换币种 -->
    <div class="choose" v-show="contractRadShow">
      <h2>你想去哪个币种撒钱？</h2>
      <div
        class="input-radio"
        v-for="(item,index) in contract"
        :key="item.id"
        @click="contractCheck(item.label[0])"
      >{{item.value[0]}}</div>
    </div>
    <Footer />
    <div class="bas"></div>
  </div>
</template>
<script>
import rem from "@/components/js/rem.js";
import Headers from "@/components/headers/index.vue";
import Footer from "@/components/footer2/index.vue";
import pako from "pako";
import axios from "axios";

export default {
  name: "pankou",
  data() {
    return {
      rem,
      //现货合约下的三个选中状态
      zhun:1,
      //各种logo
      house: [],
      //现货挂单的头部文件
      radios: [],
      radShow: false,
      payType: "BTC-USDT",
      //合约挂单的头部文件
      contract: [],
      contractRadShow: false,
      contractPayType: "BTC-USD",
      futures_cat: [],
      dangqianjiduheyongyu: [],
      // path:"ws://192.168.199.203:8866/ws/market/",
      path: "ws://api.canbite.cn/ws/market/",

      //现货  合约
      arr: [{ id: 1, xuan: "现货" }, { id: 2, xuan: "合约" }],
      now: "现货",

      Binanceindex: "",
      Bitfinexindex: "",
      BitMEXindex: "",
      huobiindex: "",
      OKEXindex: ""
    };
  },
  components: {
    Headers,
    Footer
  },
  created() {},
  mounted() {
    axios.get("http://api.canbite.cn/api/market/info").then(res => {
      //   console.log(res.data.data)
      for (let i = 0; i < res.data.data.pg_head.length; i++) {
        // console.log(res)
        let asp,
          asd = [];
        asp = {
          label: res.data.data.pg_head[i],
          value: res.data.data.pg_head[i],
          isChecked: true
        };
        asd = {
          label: res.data.data.pgf_head[i],
          value: res.data.data.pgf_head[i],
          isChecked: true
        };
        this.radios.push(asp);
        this.contract.push(asd);
      }
      this.dangqianjiduheyongyu = res.data.data.futures_cat;
      this.house = res.data.data.house;
      let kong = [];
      for (let j = 0; j < this.house.length; j++) {
        if (kong.indexOf(this.house[j][0]) == -1) {
          kong.push(this.house[j][0]);
        }
      }
      // console.log(kong)
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
    });
  },
  methods: {
    //现货合约下的三个选中状态
    zhunzhuan(index){
      this.zhun = index
    },
    //现货
    check(index) {
      this.payType = index;
      this.radShow = false;
    },
    //合约
    contractCheck(index) {
      this.contractPayType = index;
      this.contractRadShow = false;
    },
    dianji(i) {
      this.now = i;
      if (i == "现货") {
        this.$store.commit("sendtype", "PG");
      } else if (i == "合约") {
        this.$store.commit("sendtype", "PGF");
      }
      //   this.$store.commit('sendtype',i)
    },
    //现货切换
    qiehuan() {
      this.radShow = true;
    },
    //合约切换
    contractQiehuan() {
      this.contractRadShow = true;
    }
  },
  //计算
  computed: {
    //右侧数据
    zongRight() {
      //   console.log(this.$store.state.received_msgst)
      return this.$store.state.received_msgst;
    },
    //左侧数据
    zongLeft() {
      // console.log(this.$store.state.received_msgsd)
      return this.$store.state.received_msgsd;
    },
    //计算百分比
    //BTC
    AsknumberBTC() {
      if (
        this.$store.state.received_msgsd == "" ||
        this.$store.state.received_msgsd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["BTC-USDT"].ask.length;
          i++
        ) {
          top =
            top + this.$store.state.received_msgsd["BTC-USDT"].ask[i][1] * 1;
        }
        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["BTC-USDT"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgsd["BTC-USDT"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (top / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    BidnumberBTC() {
      if (
        this.$store.state.received_msgsd == "" ||
        this.$store.state.received_msgsd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;

        for (
          let i = 0;
          i < this.$store.state.received_msgsd["BTC-USDT"].ask.length;
          i++
        ) {
          top =
            top + this.$store.state.received_msgsd["BTC-USDT"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["BTC-USDT"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgsd["BTC-USDT"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (bottom / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    //ETH
    AsknumberETH() {
      if (
        this.$store.state.received_msgsd == "" ||
        this.$store.state.received_msgsd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["ETH-USDT"].ask.length;
          i++
        ) {
          top =
            top + this.$store.state.received_msgsd["ETH-USDT"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["ETH-USDT"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgsd["ETH-USDT"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (top / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    BidnumberETH() {
      if (
        this.$store.state.received_msgsd == "" ||
        this.$store.state.received_msgsd == undefined
      ) {
        return 0;
      } else {
        let top = 0;

        for (
          let i = 0;
          i < this.$store.state.received_msgsd["ETH-USDT"].ask.length;
          i++
        ) {
          top =
            top + this.$store.state.received_msgsd["ETH-USDT"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgsd["ETH-USDT"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgsd["ETH-USDT"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (bottom / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },

    // 分割线合约
    zongRight1() {
      //   console.log(this.$store.state.received_msgst)
      return this.$store.state.received_msgft;
    },
    //左侧数据
    zongLeft1() {
      //   console.log(this.$store.state.received_msgsd)
      return this.$store.state.received_msgfd;
    },
    //计算百分比
    //BTC
    AsknumberBTC1() {
      if (
        this.$store.state.received_msgfd == "" ||
        this.$store.state.received_msgfd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["BTC-USD"].ask.length;
          i++
        ) {
          top = top + this.$store.state.received_msgfd["BTC-USD"].ask[i][1] * 1;
        }
        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["BTC-USD"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgfd["BTC-USD"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (top / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    BidnumberBTC1() {
      if (
        this.$store.state.received_msgfd == "" ||
        this.$store.state.received_msgfd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;

        for (
          let i = 0;
          i < this.$store.state.received_msgfd["BTC-USD"].ask.length;
          i++
        ) {
          top = top + this.$store.state.received_msgfd["BTC-USD"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["BTC-USD"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgfd["BTC-USD"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (bottom / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    //ETH
    AsknumberETH1() {
      if (
        this.$store.state.received_msgfd == "" ||
        this.$store.state.received_msgfd == "undefined"
      ) {
        return 0;
      } else {
        let top = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["ETH-USD"].ask.length;
          i++
        ) {
          top = top + this.$store.state.received_msgfd["ETH-USD"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["ETH-USD"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgfd["ETH-USD"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (top / o) * 100;
        let py = per.toFixed();
        return py;
      }
    },
    BidnumberETH1() {
      if (
        this.$store.state.received_msgfd == "" ||
        this.$store.state.received_msgfd == undefined
      ) {
        return 0;
      } else {
        let top = 0;

        for (
          let i = 0;
          i < this.$store.state.received_msgfd["ETH-USD"].ask.length;
          i++
        ) {
          top = top + this.$store.state.received_msgfd["ETH-USD"].ask[i][1] * 1;
        }

        let bottom = 0;
        for (
          let i = 0;
          i < this.$store.state.received_msgfd["ETH-USD"].bid.length;
          i++
        ) {
          bottom =
            bottom + this.$store.state.received_msgfd["ETH-USD"].bid[i][1] * 1;
        }
        let o = top + bottom;
        let per = (bottom / o) * 100;
        let py = per.toFixed();
        return py;
      }
    }
  },
  activated() {
    this.now = "现货";
  }
};
</script>
<style scoped>
.pankou {
  width: 100%;
  /* height: 28rem; */
  /* overflow: hidden; */
  color: #afb2c5;
  /* background: #FFFFFF; */
  position: relative;
}
.pankou .header {
  width: 100%;
}
.pankou .header .logo {
  width: 26%;
  float: left;
}
.pankou .header .logo img {
  width: 1.1rem;
  float: right;
  position: relative;
  top: 0.05rem;
}
.pankou .header .wenzi {
  float: left;
}
.pankou .header .wenzi .p1 {
  width: 1.8rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.5rem;
  float: left;
  margin-left: 0.5rem;
}
.pankou .header .wenzi img {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  top: 0.4rem;
  float: left;
  margin-right: 0.2rem;
}
.pankou .header .wenzi .p2 {
  height: 1.2rem;
  line-height: 1.13rem;
  font-size: 0.5rem;
  float: left;
}
.pankou .xuanze {
  width: 100%;
  height: 3rem;
  margin-top: 2.5rem;
  background: #fff;
}
.pankou .xuanze .huo {
  width: 50%;
  height: 1.2rem;
  float: left;
}
.pankou .xuanze .huo p {
  height: 1.2rem;
  width: 40%;
  text-align: center;
  line-height: 1.2rem;
  border: 1px solid #507cc1;
  color: #507cc1;
}
.pankou .xuanze .huo p.cur {
  background: #507cc1;
  color: #ffffff;
}
.pankou .xuanze .huo:nth-child(1) p {
  float: right;
  border-right: none;
}
.pankou .xuanze .huo1 {
  width: 100%;
  height: 2rem;
  float: left;
  color: #000;
}
.pankou .xuanze .huo1 .xianjia {
  height: 1.8rem;
  text-align: center;
  line-height: 2rem;
  display: inline-block;
  width:33.3%;
  position:relative;
}
.pankou .xuanze .huo1 .xianjia span {
  position: absolute;
  width:1rem;
  height:2px;
  bottom:0.1rem;
  left:50%;
  margin-left:-0.5rem;
  background:#FFF;
}
/* .pankou .xuanze .huo1 .jidu {
  height: 2rem;
  width: 40%;
  text-align: center;
  line-height: 2rem;
  float: left;
  margin-right: 10%;
  position: relative;
}
.pankou .xuanze .huo1 .jidu span {
  width: 1rem;
  height: 0.02rem;
  background: #507cc1;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -0.5rem;
} */
/* 左边 */
.pankou .center {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
  height: 27rem;
  overflow: hidden;
  background: #f7f7f7;
}
.pankou .center .left {
  width: 49%;
  /* overflow: hidden; */
  float: left;
  box-sizing: border-box;
  margin-right: 2%;
  border-radius: 5px;
}
.pankou .center .left .top {
  width: 90%;
  height: 1.2rem;
  background: #ffffff;
  padding: 0 0.4rem;
  text-align: center;
  border-bottom: 1px solid #507cc1;
  color: #507cc1;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.pankou .center .left .top p {
  width: 100%;
  float: left;
  line-height: 1.2rem;
}
.pankou .center .left .middle1 {
  width: 100%;
  background: #ffffff;
  color: #507cc1;
  border-radius: 0 0 5px 5px;
}
.pankou .center .left .middle1 p {
  float: left;
  line-height: 0.8rem;
  color: #32374b;
}
.pankou .center .left .middle1 .p2 {
  width: 33.333333%;
  height: 1rem;
  text-align: center;
  float: left;
  text-decoration: underline;
  line-height: 1rem;
}
.pankou .center .left .middle1 .p3 {
  width: 33.333333%;
  height: 1rem;
  text-align: center;
  float: left;
  line-height: 1rem;
}
.pankou .center .left .middle1 .p4 {
  width: 33.333333%;
  height: 1rem;
  display: inline-block;
  text-align: center;
  float: left;
  line-height: 1rem;
}
.zhanshi1 {
  width: 100%;
  height: 1rem;
  color: #333333;
  font-size: 0.6rem;
}
.zhanshi1 .yi {
  max-width: 100%;
  height: 0.9rem;
  position: relative;
  top: 1rem;
}
.zhanshi1 p {
  width: 33.333%;
  height: 1rem;
  float: left;
  text-align: center;
  color: black;
  position: relative;
  top: 0.1rem;
}
.zhanshi1 .p5 img {
  width: 0.6rem;
  position: relative;
  top: 0.05rem;
}

.pankou .center .left .middle1 .maimai {
  width: 100%;
  height: 0.9rem;
  overflow: hidden;
  background: #eaf5ff;
}
.pankou .center .left .middle1 .maimai p {
  background: none;
  font-size: 0.4rem;
  color: #81a1d2;
}
.pankou .center .left .middle1 .maimai .p8 {
  width: 35%;
  padding-left: 0.5rem;
  box-sizing: border-box;
  margin-right: 30%;
}
.pankou .center .left .middle1 .maimai .p8 span {
  font-size: 0.5rem;
}
.pankou .center .left .middle1 .maimai .p9 {
  width: 35%;
  text-align: right;
  padding-right: 0.5rem;
  box-sizing: border-box;
}
.pankou .center .left .middle1 .maimai .p9 span {
  font-size: 0.5rem;
}
.zhanshi2 {
  width: 100%;
  height: 1rem;
  color: #333333;
}
.zhanshi2 .yi {
  max-width: 100%;
  height: 0.9rem;
  position: relative;
  top: 0.1rem;
}
.zhanshi2 p {
  width: 33.333%;
  height: 1rem;
  float: left;
  text-align: center;
  color: black;
  position: relative;
  top: -0.8rem;
}
.zhanshi2 .p5 img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
/* 右边 */
.pankou .center .right {
  width: 49%;
  float: left;
  background: #ffffff;
  border-radius: 5px;
}
.pankou .center .right .biaoti {
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  color: #507cc1;
}
.pankou .center .right .biaoti p {
  float: left;
}
.pankou .center .right .biaoti .p2 {
  width: 35%;
  text-align: center;
  margin-left: 17.5%;
}
.pankou .center .right .biaoti .p3 {
  width: 0.3rem;
  height: 0.3rem;
  background: #52d091;
  border-radius: 50%;
  position: relative;
  top: 0.5rem;
}
.pankou .center .right .biaoti .p4 {
  width: 10%;
  text-align: center;
}
.pankou .center .right .biaoti .p5 {
  width: 0.3rem;
  height: 0.3rem;
  background: #f85f56;
  border-radius: 50%;
  position: relative;
  top: 0.5rem;
}
.pankou .center .right .biaoti .p6 {
  width: 10%;
  text-align: center;
}

.pankou .center .right .biaoti1 {
  width: 100%;
  height: 1rem;
  color: #507cc1;
}
.pankou .center .right .biaoti1 .p5 {
  width: 25%;
  float: left;
  text-align: center;
  line-height: 1rem;
}
.pankou .center .right .biaoti1 .p6 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .biaoti1 .p7 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .biaoti1 .p8 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .shuzhi {
  width: 100%;
  height: 1rem;
  position: relative;
}

.pankou .center .right .shuzhi .p9 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: right;
}
.pankou .center .right .shuzhi .p10 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .shuzhi .p10 img {
  width: 0.6rem;
  position: relative;
  top: 0.12rem;
}
.pankou .center .right .shuzhi .p11 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .shuzhi .p12 {
  width: 25%;
  float: left;
  line-height: 1rem;
  text-align: center;
}
.pankou .center .right .shuzhi .one {
  width: 100%;
  height: 100%;
  background: #240d29;
  position: absolute;
  z-index: 0;
}
.pankou .center .right .shuzhi p {
  position: relative;
  z-index: 1;
}
.pankou .center .right .genghuan {
  width: 100%;
  height: 5rem;
}
.pankou .center .right .genghuan .p13 {
  width: 100%;
  height: 1rem;
  text-align: center;
  background: #161729;
  line-height: 1rem;
  color: #5a5b6d;
}
.pankou .center .right .genghuan .bi {
  width: 50%;
  height: 2rem;
  float: left;
  text-align: center;
  line-height: 1rem;
}
.pankou .center .right .genghuan .bi .p14 {
  font-size: 0.6rem;
}
.pankou .center .right .genghuan .bi .p15 {
  font-size: 0.5rem;
}
.pankou .center .left .middle1 .everyqen {
  width: 20%;
  float: left;
  position: relative;
  z-index: 1;
}
.pankou .center .left .middle1 .everyqen img {
  width: 0.6rem;
  position: relative;
  top: 0.07rem;
  left: 0.5rem;
}
.pankou .center .left .middle1 .everyq {
  width: 20%;
  float: left;
  text-align: center;
  position: relative;
}
.pankou .center .left .middle1 .everyq .everyqTwo {
  height: 0.74rem;
  line-height: 0.74rem;
  position: relative;
  z-index: 1;
}
.pankou .center .left .middle1 .everyw {
  width: 60%;
  float: left;
  text-align: center;
  box-sizing: border-box;
}
.pankou .center .left .middle1 .everyw .twos {
  height: 0.74rem;
  line-height: 0.74rem;
  position: relative;
  z-index: 1;
}
.everyw {
  position: relative;
}
.Ctop {
  position: relative;
}
.Ctop_one {
  display: inline-block;
  width: 20%;
  position: relative;
  z-index: 2;
}
.Ctop_one_img {
  width: 0.5rem;
  height: 0.5rem;
  padding-left: 0.5rem;
}
.Ctop_one_img img {
  width: 100%;
  height: 100%;
}
.Ctop_two {
  display: inline-block;
  width: 40%;
  text-align: center;
  position: relative;
  z-index: 2;
}
.Ctop_three {
  display: inline-block;
  width: 40%;
  text-align: center;
  position: relative;
  z-index: 2;
}
.Ctop_four {
  position: absolute;
  background: #111f2a;
  height: 0.74rem;
  top: 0px;
  z-index: 1;
}
.Ctop_five {
  position: absolute;
  background: #240d29;
  height: 0.74rem;
  top: 0px;
  z-index: 1;
}
.dianTop {
  position: relative;
}
.dianOne {
  width: 0.4rem;
  height: 0.4rem;
  background: rgb(116, 59, 68);
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
}
.dianTopq {
  position: relative;
}
.dianTwo {
  width: 0.4rem;
  height: 0.4rem;
  background: rgb(70, 129, 109);
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
}

/* 合约 */
.Fund {
  position: relative;
}
.Fund_one {
  display: inline-block;
  width: 20%;
  position: relative;
  z-index: 2;
}
.Fund_six {
  display: inline-block;
  width: 10%;
  z-index: 2;
  text-align: center;
}
.Fund_one_img {
  width: 0.5rem;
  height: 0.5rem;
  padding-left: 0.5rem;
}
.Fund_one_img img {
  width: 100%;
  height: 100%;
}
.Fund_two {
  display: inline-block;
  width: 35%;
  text-align: center;
  position: relative;
  z-index: 2;
}
.Fund_three {
  display: inline-block;
  width: 35%;
  text-align: center;
  position: relative;
  z-index: 2;
}
.Fund_four {
  position: absolute;
  background: #111f2a;
  height: 0.74rem;
  top: 0px;
  z-index: 1;
}
.Fund_five {
  position: absolute;
  background: #240d29;
  height: 0.74rem;
  top: 0px;
  z-index: 1;
}
.choose {
  padding-top: 3rem;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9;
  color: #fff;
}
.choose h2 {
  text-align: center;
}
.input-radio {
  display: inline-block;
  width: 25%;
  text-align: center;
  margin-top: 1rem;
}
.huoer {
  float: left;
  width: 20%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border: 1px solid #507cc1;
  background: #507cc1;
  color: #fff;
  margin-left: 40%;
}

.jiazaizhong {
  height: 60vh;
  line-height: 60vh;
  position: relative;
  background: #fff;
  text-align: center;
  margin: 0.4rem 0.4rem;
}
.jiazaizhong_cn {
}
.bas {
  background: #f7f7f7;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: -1;
}
</style>