<!-- 计算器(临时弹框) -->
<template>
<div class="calculator">
  <div class="calculator_had">
    <div>收益计算器</div>
    <div class="monitoring_img">
      <!-- 返回 -->
      <img src="@/images/my/returns.png" alt="返回" @click="calculator_guan" />
    </div>
  </div>
  <div class="headers">
    <ul class="tab-head">
      <li
        class="tab-head-item"
        :class="{activeer:item[1] == selectValue}"
        v-for="(item) in currency"
        @click="chenges(item[1])"
      >{{item[1]}}</li>
    </ul>
  </div>
  <body class="body">
    <div class="arena">
      <div class="one" @click="jinchang(1)">
        <div class="xian" :class="topjin == 1 ? 'active' : ''">现货进场</div>
        <div class="xuanzhong" :class="topjin == 1 ? 'actives' : ''"></div>
      </div>
      <div class="zhongxian"></div>
      <div class="two" @click="jinchang(2)">
        <div class="heyue" :class="topjin == 2 ? 'active' : ''">合约进场</div>
        <div class="xuanzhong" :class="topjin == 2 ? 'actives' : ''"></div>
      </div>
    </div>
    <!-- 现货 -->
    <div class="zhenzuo" v-show="enter">
      <div class="zuo_zhong">
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">购买价格 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="$" type="number" pattern="\d*" v-model="buyPrice" />
          </div>
        </div>
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">购买数量 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="枚" type="number" pattern="\d*" v-model="buyNumber" />
          </div>
        </div>
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">实时价格 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="$" type="number" pattern="\d*" v-model="nowPrice" />
          </div>
        </div>
      </div>
      <div class="zuo_bottom">
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">盈利百分比</div>
          <div class="zuo_bottom_one_bottom">{{ bione }}</div>
        </div>
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">当前盈利{{ dangqianbizhong==''? BTC : dangqianbizhong }}</div>
          <div class="zuo_bottom_one_bottom">{{ bithree }}</div>
        </div>
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">当前盈利美元</div>
          <div class="zuo_bottom_one_bottom">{{ bitwo }}</div>
        </div>
      </div>
    </div>

    <!-- 合约 -->
    <div class="zhenzuo" v-show="!enter">
      <div class="zuo_zhong">
        <div class="duokong">
          <div
            class="duokong_duo"
            :class="Ninja == true ? 'activezhong' : ''"
            @click="calculator_open_two"
          >多</div>
          <div
            class="duokong_kong"
            :class="Ninja == true ? '' : 'activezhong'"
            @click="calculator_open_one"
          >空</div>
          <div class="ganggan" @click="gangxia">
            <div class="ganggan_two">杠杆:</div>
            <div class="ganggan_three">{{levelMutiple}}x</div>
            <div class="ganggan_four">
              <img src="@/images/top.png" v-show="!gsxua" />
              <img src="@/images/down.png" v-show="gsxua" />
            </div>
            <div class="gang_xia" v-show="gsxua">
              <ul>
                <li v-for="item in bsbei" @click="beizhong(item)">{{item}}x</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">购买价格 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="$" type="number" pattern="\d*" v-model="buyPrice" />
          </div>
        </div>
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">购买数量 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="枚" type="number" pattern="\d*" v-model="buyNumber" />
          </div>
        </div>
        <div class="zuo_zhong_one">
          <div class="zuo_zhong_one_left">实时价格 &nbsp;:</div>
          <div class="zuo_zhong_one_right">
            <input placeholder="$" type="number" pattern="\d*" v-model="nowPrice" />
          </div>
        </div>
      </div>
      <div class="zuo_bottom">
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">盈利百分比</div>
          <div class="zuo_bottom_one_bottom">{{ bifour }}</div>
        </div>
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">当前盈利{{ dangqianbizhong==''? BTC : dangqianbizhong }}</div>
          <div class="zuo_bottom_one_bottom">{{ bifive }}</div>
        </div>
        <div class="zuo_bottom_one">
          <div class="zuo_bottom_one_top">当前盈利美元</div>
          <div class="zuo_bottom_one_bottom">{{ bisix }}</div>
        </div>
      </div>
    </div>
  </body>
  <Footer />
</div>
</template>

<script>
import rem from "@/components/js/rem.js";
import axios from "axios";
import Footer from "@/components/footer2/index.vue";
export default {
  name: "",
  data() {
    return {
      rem,
      // 请输入购买杠杆倍数
      levelMutiple: 1,
      //杠杆倍数
      bsbei: [1, 5, 10, 20, 50, 100],
      //杠杆下拉
      gsxua: false,
      // 头
      currency: [],
      //进场
      topjin: 1,
      Ninja: true,
      enter: true,
      // 购买价格
      buyPrice: "",
      // 购买数量
      buyNumber: "",

      //  实时数据
      nowPrice: 0,
      //select宽度
      selectWidthOne: "35%",
      selectWidthTwo: "100%",
      selectWidthThree: "0",
      selectWidthTFoure: "26%",
      //开多开空边框
      calculator_dkMarginOne: "0 2%",
      calculator_dkMarginTwo: "0%",
      //option
      showOption: false,
      //select的值
      selectValue: "BTC",
      dangqianbizhong: "BTC",
      Inputname: [],

      // BTC所在的索引值
      BTCindex: ""
    };
  },
  created() {
    // axios.get("http://api.canbite.cn/api/market/get_price")
    axios({
      url:this.FACTURL+'/api/market/get_price',
      method:'get'
    })
    .then(res => {
      this.Inputname = res.data.data.data;
      let arr = [];
      for (let i = 0; i < this.Inputname.length; i++) {
        if (arr.indexOf(this.Inputname[i].cur_name) == -1) {
          arr.push(this.Inputname[i].cur_name);
        }
      }
      if (arr.indexOf("BTC") != -1) {
        this.BTCindex = arr.indexOf("BTC");
      }
      this.nowPrice = this.Inputname[this.BTCindex].cur_price;
    });
    // axios.get("http://api.canbite.cn/api/market/info")
    axios({
      url:this.FACTURL+'/api/market/info',
      method:'get'
    })
    .then(res => {
      // console.log(res.data.data.cur)
      this.currency = res.data.data.cur;
    });
  },
  components: {
    Footer
  },
  methods: {
    //选中杠杆倍数
    beizhong(index) {
      this.levelMutiple = index;
    },
    //杠杆下拉
    gangxia() {
      this.gsxua = !this.gsxua;
    },
    //hander
    chenges(i) {
      // 这里我们传入一个当前值点击事件
      let len = this.Inputname.length;
      this.selectValue = i;
      this.dangqianbizhong = i;
      for (let a = 0; a < len; a++) {
        if (i == this.Inputname[a].cur_name) {
          this.nowPrice = this.Inputname[a].cur_price;
        }
      }
    },
    //进场
    jinchang(index) {
      this.topjin = index;
      if (this.topjin == 1) {
        this.enter = true;
        this.buyPrice = "";
        this.buyNumber = "";
      } else if (this.topjin == 2) {
        this.enter = false;
        this.buyPrice = "";
        this.buyNumber = "";
      }
    },
    //返回
    calculator_guan() {
      this.$store.commit("MyCalculator_guan");
    },
    //开多开空切换
    //空
    calculator_open_one() {
      if (this.Ninja == true) {
        this.Ninja = false;
      }
      this.buyPrice = "";
      this.buyNumber = "";
      this.levelMutiple = "";
      this.levelMutiple = 1;
    },
    //多
    calculator_open_two() {
      if (this.Ninja == false) {
        this.Ninja = true;
      }
      this.buyPrice = "";
      this.buyNumber = "";
      this.levelMutiple = "";
      this.levelMutiple = 1;
    },
    clickSelect() {
      this.showOption = !this.showOption;
    }
  },
  computed: {
    bione() {
      if (this.nowPrice == 0) {
        return 0;
      } else if (this.buyPrice == "") {
        return 0;
      } else if (this.buyPrice != "" && this.nowPrice != 0) {
        return (
          (((this.nowPrice - this.buyPrice) / this.nowPrice) * 100).toFixed(2) +
          "%"
        );
      }
    },
    bitwo() {
      return this.buyPrice == 0
        ? 0
        : "$" + ((this.nowPrice - this.buyPrice) * this.buyNumber).toFixed(2);
    },
    bithree() {
      return this.buyPrice == 0
        ? 0
        : (
            ((this.nowPrice - this.buyPrice) * this.buyNumber) /
            this.nowPrice
          ).toFixed(4);
    },
    //开空
    bifour() {
      if(this.Ninja == true){
        return this.buyPrice == ""
        ? 0
        : (
            ((this.nowPrice - this.buyPrice) / this.nowPrice) *
            this.levelMutiple *
            100
          ).toFixed(2) + "%";
      }else if(this.Ninja == false){
        return this.buyPrice == ""
        ? 0
        : (
            ((this.buyPrice - this.nowPrice) / this.nowPrice) *
            this.levelMutiple *
            100
          ).toFixed(2) + "%";
      }
      
    },
    bifive() {
      if(this.Ninja == true){
        return this.buyPrice == ""
          ? 0
          : (
              ((this.nowPrice - this.buyPrice) / this.nowPrice) *
              this.buyNumber
            ).toFixed(4);
      }else if(this.Ninja == false){
        return this.buyPrice == ""
          ? 0
          : (
              ((this.buyPrice - this.nowPrice) / this.nowPrice) *
              this.buyNumber
            ).toFixed(4);
      }
    },
    bisix() {
      if(this.Ninja == true){
        return this.buyPrice == ""
        ? 0
        : "$" +
            (
              (
                ((this.nowPrice - this.buyPrice) / this.nowPrice) *
                this.buyNumber
              ).toFixed(4) * this.nowPrice
            ).toFixed(2);
      }else if(this.Ninja == false){
        return this.buyPrice == ""
        ? 0
        : "$" +
            (
              (
                ((this.buyPrice - this.nowPrice) / this.nowPrice) *
                this.buyNumber
              ).toFixed(4) * this.nowPrice
            ).toFixed(2);
      }
      
    }
  }
};
</script>


<style scoped>
.body {
  margin:0.5rem 0.4rem 0rem 0.4rem;
  font-size: 0.5rem;
  /* background: #fff; */
}
ul,
li {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
input {
  font-size: 0.6rem;
}
input:focus{
  /* color:#96a4bf; */
}
select {
  font-size: 0.6rem;
}
option {
  font-size: 0.6rem;
}
.calculator .calculator_had {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #dad9d9;
}
.calculator .calculator_had div {
  font-size: 0.7rem;
  color: #507cc1;
  font-weight: 600;
}
.monitoring_img {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0.2rem;
  left:0.4rem;
}
.monitoring_img img {
  width: 100%;
  height: 100%;
}
.headers {
  font-size: 0.8rem;
  width: 100%;
  height: 1.5rem;
}
.tab-head {
  list-style-type: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
  padding: 0;
  margin: 0px;
  overflow: auto;
  z-index: 8;
  /* height:1.1rem; */
  width: 100%;
  height: 1.5rem;
}
.tab-head-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  color: #96a4bf;
  margin: 0 0.5rem;
  font-size: 0.55rem;
  height: 1.2rem;
  line-height: 1.2rem;
}
.activeer {
  border-bottom: 1px solid #507cc1;
  color: #507cc1;
}
/* 新 */
.arena {
  width: 100%;
  height: 3rem;
  background: #fff;
}
.arena .one {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
.arena .two {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: middle;
  position: relative;
}
.zhongxian {
  display: inline-block;
  width: 0px;
  height: 1.5rem;
  border: 1px solid #d6d6d6;
  color: #d6d6d6;
  vertical-align: middle;
}
.xian {
  line-height: 3rem;
  font-size: 0.7rem;
  /* font-weight: 600; */
  color: #525252;
}
.heyue {
  line-height: 3rem;
  font-size: 0.7rem;
  /* font-weight: 600; */
  color: #525252;
}
.xuanzhong {
  position: absolute;
  width: 1.5rem;
  height: 0rem;
  border: 1px solid #fff;
  top: 2.5rem;
  left: 50%;
  margin-left: -0.75rem;
}
.active {
  color: #507cc1;
}
.actives {
  border: 1px solid #507cc1;
}
.zhenzuo {
  margin-top: 0.5rem;
}
.zuo_zhong {
  background: #fff;
  padding: 0.5rem;
}
.zuo_zhong_one {
  margin: 0rem 0;
  width: 100%;
  height: 1.5rem;
}
.zuo_zhong_one_left {
  display: inline-block;
  vertical-align: middle;
  width: 30%;
  font-size: 0.75rem;
  line-height: 1.5rem;
}
.zuo_zhong_one_right {
  display: inline-block;
  vertical-align: middle;
  width: 69%;
}
.zuo_zhong_one_right input {
  width: 100%;
  line-height: 1rem;
  border: 1px solid #979797;
}
.zuo_zhong_one_right input::-webkit-input-placeholder {
  text-align: right;
  padding: 0 0.5rem;
}
/* 左侧底部 */
.zuo_bottom {
  margin-top: 0.5rem;
  height: 4.5rem;
}
.zuo_bottom_one {
  width: 30%;
  height: 4.5rem;
  display: inline-block;
  vertical-align: middle;
  background: #fff;
}
.zuo_bottom_one:nth-child(2) {
  margin: 0 5%;
}
.zuo_bottom_one_top {
  line-height: 2rem;
  text-align: center;
  font-weight: 600;
}
.zuo_bottom_one_bottom {
  line-height: 2rem;
  text-align: center;
  color: #507cc1;
}
.duokong {
  height: 1.5rem;
  color: #1b3b6c;
}
.duokong_duo {
  display: inline-block;
  width: 1.7rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border: 1px solid #507cc1;
}
.duokong_kong {
  display: inline-block;
  width: 1.7rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border: 1px solid #507cc1;
}
.activezhong {
  background: #edf3fe;
}
.ganggan {
  display: inline-block;
  float: right;
  width: 4rem;
  height: 1rem;
  border: 1px solid #507cc1;
  border-radius: 0.2rem;
  line-height: 1rem;
  position: relative;
}
.ganggan_two {
  width: 2rem;
  text-align: center;
  display: inline-block;
}
.ganggan_three {
  display: inline-block;
  width: 1.2rem;
  text-align: right;
}
.ganggan_four {
  display: inline-block;
  width: 0.8rem;
  height: 0.5rem;
}
.ganggan_four img {
  width: 100%;
  height: 100%;
}
.gang_xia {
  position: absolute;
  top: 1.05rem;
  width: 2rem;
  right: 0rem;
  border-radius: 0.2rem;
  text-align: center;
  border: 1px solid #507cc1;
  background: #fff;
}
</style>