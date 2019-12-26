<template>
  <div>
    <div class="box2">
      <div class="daohang">
        <div
          class="nav"
          v-for="item in pl_head"
          @click="changejiaoyisuo(item.bizhong)"
          :class="{'cur':item.bizhong==first}"
        >
          {{item.bizhong}}
          <div class="nav_bottom"></div>
        </div>
      </div>
      <!-- 爆仓数据-->
      <div v-show="first=='OKEx'">
        <div class="blasting">
          <!-- 头部  -->
          <div class="blasting_head">
            <!-- <div class="blasting_head_one"></div> -->
            <div class="blasting_head_two">爆仓数据</div>
            <div class="blasting_head_six">
              <div class="blasting_head_three">
                <div class="blasting_head_three_dianone"></div>
                <div class="blasting_head_three_name">多头</div>
              </div>
              <div class="blasting_head_four">
                <div class="blasting_head_four_dianone"></div>
                <div class="blasting_head_four_name">空头</div>
              </div>
              <!-- <div class="blasting_head_five">
                <div class="blasting_head_five_dianone"></div>
                <div class="blasting_head_five_name">总和</div>
              </div>-->
            </div>
          </div>
          <!-- 多头 -->
          <div class="more">
            <div class="more_ju">
              <div class="moreColor"></div>
              <div class="moreColor_name">多头</div>
            </div>
            
            <div class="more_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">BTC</div> -->
                </li>
              </ul>
            </div>
          </div>
          <!-- 空头 -->
          <div class="few">
            <div class="more_ju">
              <div class="fewColor"></div>
              <div class="fewColor_name">空头</div>
            </div>
            <div class="few_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">{{item[0]}}</div> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="baocang_title">爆仓人数</div>
        <div v-if="zong2">
          <div class="wrap4" :style="{'height':(2*5+2)+'rem'}">
            <div class="zhongjian">
              <div
                class="every"
                v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                :key="item[1]"
              >
                <p class="one">
                  {{item[1]}}小时总爆仓金额
                  <span>{{item[2]}}</span>USDT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="first=='全网'">
        <div class="blasting">
          <!-- 头部  -->
          <div class="blasting_head">
            <!-- <div class="blasting_head_one"></div> -->
            <div class="blasting_head_two">爆仓数据</div>
            <div class="blasting_head_six">
              <div class="blasting_head_three">
                <div class="blasting_head_three_dianone"></div>
                <div class="blasting_head_three_name">多头</div>
              </div>
              <div class="blasting_head_four">
                <div class="blasting_head_four_dianone"></div>
                <div class="blasting_head_four_name">空头</div>
              </div>
              <!-- <div class="blasting_head_five">
                <div class="blasting_head_five_dianone"></div>
                <div class="blasting_head_five_name">总和</div>
              </div> -->
            </div>
          </div>
          <!-- 多头 -->
          <div class="more">
            <div class="more_ju">
              <div class="moreColor"></div>
              <div class="moreColor_name">多头</div>
            </div>
            <div class="more_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">BTC</div> -->
                </li>
              </ul>
            </div>
          </div>
          <!-- 少头 -->
          <div class="few">
            <div class="more_ju">
              <div class="fewColor"></div>
              <div class="fewColor_name">空头</div>
            </div>
            <div class="few_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">{{item[0]}}</div> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="baocang_title">爆仓人数</div>
        <div v-if="zong2">
          <div class="wrap4" :style="{'height':(2*5+2)+'rem'}">
            <div class="zhongjian">
              <div
                class="every"
                v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                :key="item[1]"
              >
                <p class="one">
                  {{item[1]}}小时总爆仓金额
                  <span>{{item[2]}}</span>USDT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 爆仓数据Huobi-->
      <div v-if="zong2 != null">
      <div v-show="first=='Huobi'">
        <div class="blasting">
          <!-- 头部  -->
          <div class="blasting_head">
            <!-- <div class="blasting_head_one"></div> -->
            <div class="blasting_head_two">爆仓数据</div>
            <div class="blasting_head_six">
              <div class="blasting_head_three">
                <div class="blasting_head_three_dianone"></div>
                <div class="blasting_head_three_name">多头</div>
              </div>
              <div class="blasting_head_four">
                <div class="blasting_head_four_dianone"></div>
                <div class="blasting_head_four_name">空头</div>
              </div>
              <!-- <div class="blasting_head_five">
                <div class="blasting_head_five_dianone"></div>
                <div class="blasting_head_five_name">总和</div>
              </div>-->
            </div>
          </div>
          <!-- 多头 -->
          <div class="more">
            <div class="more_ju">
              <div class="moreColor"></div>
              <div class="moreColor_name">多头</div>
            </div>
            
            <div class="more_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">BTC</div> -->
                </li>
              </ul>
            </div>
          </div>
          <!-- 空头 -->
          <div class="few">
            <div class="more_ju">
              <div class="fewColor"></div>
              <div class="fewColor_name">空头</div>
            </div>
            <div class="few_content">
              <ul>
                <li
                  v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                  :key="item[1]"
                >
                  <div>{{item[1]==null?0:item[1]}}小时</div>
                  <div class="li_name">${{item[4]==null?0:item[4]}}</div>
                  <!-- <div class="li_zhong">{{item[0]}}</div> -->
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="baocang_title">爆仓人数</div>
        <div v-if="zong2">
          <div class="wrap4" :style="{'height':(2*5+2)+'rem'}">
            <div class="zhongjian">
              <div
                class="every"
                v-for="item in zong2.filter(item=>item[0]==categoryIndex).sort((a,b)=>a[1]-b[1])"
                :key="item[1]"
              >
                <p class="one">
                  {{item[1]}}小时总爆仓金额
                  <span>{{item[2]}}</span>USDT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import rem from "@/components/js/rem.js";
import axios from "axios";
//loading图
import Loading from "@/components/loading/index.vue";
export default {
  name: "usdt",
  data() {
    return {
      rem,
      arr: [
        { id: "1", e: "当周" },
        { id: "2", e: "次周" },
        { id: "3", e: "季度" },
        { id: "4", e: "永续" }
      ],
      arr2: [[80, 19, 1, 4], [80, 19, 1, 3], [80, 19, 1, 2]],
      arr1: [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }],
      arr3: [
        { id: "1", number: 1, jiaoyisuo: "Okex" },
        { id: "2", number: 6, jiaoyisuo: "BItmex" },
        { id: "3", number: 7, jiaoyisuo: "Bitfinex" },
        { id: "4", number: 5, jiaoyisuo: "Binance" }
      ],
      pl_head: [
        { id: 1, bizhong: "全网" },
        { id: 2, bizhong: "OKEx" },
        { id: 4, bizhong: "Huobi" }
      ],
      getpl_head: [],
      first: "OKEx",
      coverage_re: false,

      house: [],
      Binanceindex: "",
      Bitfinexindex: "",
      BitMEXindex: "",
      huobiindex: "",
      OKEXindex: "",
      quanwang: "",
      ok: "",
      huobi: ""
    };
  },
  components: {
    Loading
  },
  created() {
    // axios.get("http://api.canbite.cn/api/market/info")
    axios({
      url:this.FACTURL + '/api/market/info',
      method:'get'
    })
    .then(res => {
      this.house = res.data.data.house;
      // console.log(this.house )
      this.getpl_head = res.data.data.pl_head;
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
      let kong1 = [];
      for (let i = 0; i < this.getpl_head.length; i++) {
        if (kong1.indexOf(this.getpl_head[i][0]) == -1) {
          kong1.push(this.getpl_head[i][0]);
        }
      }
      if (kong1.indexOf("全网") != -1) {
        this.quanwang = kong1.indexOf("全网");
      }
      if (kong1.indexOf("OKEX") != -1) {
        this.ok = kong1.indexOf("OKEX");
      }
      if (kong1.indexOf("huobi") != -1) {
        this.huobi = kong1.indexOf("huobi");
      }
    });
  },
  methods: {
    coverage_img() {
      this.coverage_re = true;
    },
    coverage_img_id() {
      this.coverage_re = false;
    },
    changejiaoyisuo(i) {
      this.first = i;
      if (i == "OKEx") {
        this.$store.commit("sendtype", "PL_" + this.getpl_head[this.ok][1]);
      } else if (i == "全网") {
        this.$store.commit(
          "sendtype",
          "PL_" + this.getpl_head[this.quanwang][1]
        );
      } else if (i == "Huobi") {
        this.$store.commit("sendtype", "PL_" + this.getpl_head[this.huobi][1]);
      }
    }
  },
  computed: {
    zong2() {
      return this.$store.state.received_msg2;
    },
    categoryIndex() {
      // console.log(this.$store.state.categoryIndex)
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
* {
  margin: 0;
  padding: 0;
}

.box2 {
  height: 28.4rem;
  background: #fff;
}

.wrap2 {
  position: relative;
  width: 100%;
  /* height: 50rem; */
  margin-top: 1.8rem;
  left: 0rem;
  padding: 0 0.2rem;
  background: #fff;
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
  background: #fff;
}
.wrap2 .tiao2 {
  position: absolute;
  top: 4.7rem;
  left: 0.4rem;
  width: 92.3%;
  height: 1.4rem;
  background: #fff;
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

.blasting {
  margin: 0.5rem 0.43rem;
}
.blasting_head {
  height: 1.5rem;
  line-height: 1.5rem;
}
.blasting_head_one {
  display: inline-block;
  background: #507cc1;
  width: 0.15rem;
  height: 0.7rem;
  vertical-align: middle;
}
.blasting_head_two {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  color:#3e4661;
}
.blasting_head_six {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.15rem;
  float: right;
}
.blasting_head_three {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.15rem;
}
.blasting_head_three_dianone {
  display: inline-block;
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #52d091;
  margin: 0 0.2rem;
}
.blasting_head_three_name {
  display: inline-block;
  vertical-align: middle;
  height: 1.5rem;
}
.blasting_head_four {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.15rem;
}
.blasting_head_four_dianone {
  display: inline-block;
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #f85f56;
  margin: 0 0.2rem;
}
.blasting_head_four_name {
  display: inline-block;
  vertical-align: middle;
  height: 1.5rem;
}
.blasting_head_five {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.15rem;
}
.blasting_head_five_dianone {
  display: inline-block;
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: #507cc1;
  margin: 0 0.2rem;
}
.blasting_head_five_name {
  display: inline-block;
  vertical-align: middle;
  height: 1.5rem;
}
.more {
  margin-top: 0.5rem;
}
.more .more_ju{
  height:1rem;
  line-height: 1rem;
}
.more .more_ju .moreColor {
  width: 1.8rem;
  height: 0.2rem;
  border-radius: 0.2rem;
  background: #52d091;
  display: inline-block;
  vertical-align:middle;
}
.more .more_ju .moreColor_name{
  display: inline-block;
  color:#3E4661;
  font-size:0.65rem;
  font-weight: 600;
  margin-left:0.5rem;
  vertical-align:middle;
}
.more .more_content {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
}
.more .more_content ul {
  width: auto;
  overflow-x: auto;
  white-space: nowrap;
}
.more .more_content ul li {
  display: inline-block;
  width: 3.6rem;
  height: 3.2rem;
  margin-right: 0.2rem;
  /* background:#EDF3FE; */
  background: url("../../../images/baocang.png");
  background-size: 100% 100%;
  text-align: center;
  padding: 0.2rem 0rem;
  line-height: 1rem;
}
.more .more_content ul li div {
  line-height: 1.5rem;
  font-size: 0.7rem;
}
.more .more_content li .li_name {
  font-size: 0.7rem;
  color: #507cc1;
}
.more .more_content li .li_zhong {
  color: #6f6f6f;
}
/* .few .moreColor{
  color:#F85F56;
} */
.few {
  margin-top: 0.5rem;
}



.few .more_ju{
  height:1rem;
  line-height: 1rem;
}
.few .more_ju .fewColor {
  width: 1.8rem;
  height: 0.2rem;
  border-radius: 0.2rem;
  background: #f85f56;
  display: inline-block;
  vertical-align:middle;
}
.few .more_ju .fewColor_name{
  display: inline-block;
  color:#3E4661;
  font-size:0.65rem;
  font-weight: 600;
  margin-left:0.5rem;
  vertical-align:middle;
}


.few .few_content {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
}
.few .few_content ul {
  width: auto;
  overflow-x: auto;
  white-space: nowrap;
}
.few .few_content li {
  display: inline-block;
  width: 3.6rem;
  height: 3.2rem;
  margin-right: 0.2rem;
  /* background:#EDF3FE; */
  background: url("../../../images/baocang.png");
  background-size: 100% 100%;
  text-align: center;
  padding: 0.2rem 0rem;
  line-height: 1rem;
}
.few .few_content li div {
  line-height: 1.5rem;
  font-size: 0.7rem;
}
.few .few_content li .li_name {
  font-size: 0.7rem;
  color: #507cc1;
}
.few .few_content li .li_zhong {
  color: #6f6f6f;
}

.baocang_title {
  margin: 0 0.45rem;
  color: #3e4661;
  height: 1.8rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #dad9d9;
  font-size: 0.9rem;
  font-weight: 600;
}
.wrap4 {
  width: 100%;
  height: 14rem;
  position: relative;
  padding: 0 0.43rem;
  box-sizing: border-box;
  background: #fff;
}
.daohang {
  width: 100%;
  height: 1.5rem;
  color: #97a6b3;
  background: #ffffff;
  top: 0.5rem;
  display: flex;
  border-bottom: 1px solid #dad9d9;
}
.daohang .nav {
  width: 33.3333%;
  height: 1.5rem;
  line-height: 1.5rem;
  float: left;
  text-align: center;
  font-size: 0.58rem;
  letter-spacing: 0.01rem;
  box-sizing: border-box;
  position: relative;
}
.daohang .nav.cur .nav_bottom {
  position: absolute;
  width: 1rem;
  border: 1px solid #507cc1;
  bottom: 0px;
  left: 50%;
  margin-left: -0.5rem;
}
.daohang .nav.cur {
  color: #507cc1;
}
.daohang .nav img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
  left: -0.1rem;
}
.wrap4 .zhongjian {
  width: 100%;
  border-radius: 10px;
  position: relative;
  top: 0.5rem;
  background: #ffffff;
}
.wrap4 .every {
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
  /* border: 1px solid #507cc1; */
  margin: 0.2rem 0rem;
  border-radius: 0.2rem;
}
/* .wrap4 .every:nth-child(even){
  background: #F8FCFD;
} */
.wrap4 .every .one {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  padding-left: 1rem;
  font-size: 0.6rem;
  letter-spacing: 0.01rem;
}
.wrap4 .every .one span {
  color: #507cc1;
  font-size: 0.6rem;
}
.fanren {
  /* width: 100%; */
  /* height: 4rem; */
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