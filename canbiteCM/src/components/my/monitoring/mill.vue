<!-- 矿机 -->
<template>
  <div class="mill" style="background:#F5F5F5;">
    <div class="calculator_had">
      <div>矿机</div>
      <div class="monitoring_img">
        <!-- 返回 -->
        <img src="@/images/my/returns.png" alt="返回" @click="mill_hide"/>
      </div>
    </div>
    <div v-if="istrue">
      <!-- <div class="monitoring_img">
        <img class="beijing" src="@/images/my/my_img01.png" alt="关闭" @click="mill_hide" />
      </div> -->
      <div class="mill_content">
        <div class="mill_head">
          <div class="mill_head_one" >矿机</div>
          <div class="mill_head_two" >币种</div>
          <div class="mill_head_three" >关机价格</div>
        </div>
        <div>
          <ul class="mill_tab">
            <li
              class="mill_tab_li"
              v-for="(list,index) in mill"
              :key="list.id"
              :class="{on_two:index%2 == 0,on_one:index%2 == 1}"
            >
              <div>{{list.dev_name}}</div>
              <div>{{list.cur_name}}</div>
              <div>{{list.price_closed}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="hint">
        <div class="hint_c"><span class="hint_tishi">提示：</span>此处电费按0.4元计算。矿机算力、功耗均按官网 数据计算 由于关机价格受全网算力、电费、汇率 等影响。计算可能存在偏差。结果仅供参考！</div>
      </div>
    </div>
    <div v-else class="loading">
      <Loading />
    </div>
  </div>
</template>

<script>
import rem from "@/components/js/rem.js";
import axios from "axios";
//loading图
import Loading from "@/components/loading/index.vue";
export default {
  name: "mill",
  data() {
    return {
      rem,
      mill: [],
      istrue: false
    };
  },
  created() {
    // axios.get("http://api.canbite.cn/api/market/get_devices")
    axios({
      url:this.FACTURL+'/api/market/get_devices',
      method:'get'
    })
    .then(res => {
      //    console.log(res)
      this.mill = res.data.data.devices;
      if (res.status == 200) {
        this.istrue = true;
      }
    });
  },
  components: {
    Loading
  },

  //   computed: {},

  methods: {
    mill_hide() {
      this.$store.commit("Mymill_hide");
    }
  }
};
</script>
<style scoped>
.mill {
  font-size: 0.5rem;
}
.mill .calculator_had {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #dad9d9;
}
.mill .calculator_had div {
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
/* .monitoring_img {
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
  margin-left: 90%;
}
.monitoring_img img {
  width: 100%;
  height: 100%;
} */
.mill_content{
    border:1px solid #507CC1;
    margin:0.4rem;
    border-radius: 0.2rem;
    overflow: hidden;
}
.mill_head {
  width: 100%;
  display: flex;
  height: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #1B3B6C;
  background: #FFF;
}
.mill_head .mill_head_one{
  width: 33.3%;
  text-align: center;
  font-size: 0.65rem;
  border-bottom:1px solid #507CC1;
  box-sizing: content-box;
}
.mill_head .mill_head_two{
  width: 33.3%;
  text-align: center;
  font-size: 0.65rem;
  border:1px solid #507CC1;
  border-top:0px solid #507CC1;
  box-sizing: content-box;
}
.mill_head .mill_head_three{
  width: 33.3%;
  text-align: center;
  font-size: 0.65rem;
  border-bottom:1px solid #507CC1;
  box-sizing: content-box;
}
.mill_tab {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 60vh;
  overflow-x: hidden;
  overflow-y: scroll;
  line-height: 30px;
  text-align: center;
}
.mill_tab li {
  list-style: none;
  text-align: center;
  line-height: 1rem;
  padding: 0.4rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  display: -webkit-flex;
}
.mill_tab li div {
  width: 33.3%;
  font-weight: 700;
  color: #54606B;
}
.on_one {
  background: #EDF3FE;
}
.on_two {
  background: #fff;
}
.hint {
  padding: 0.5rem;
  position: fixed;
  bottom: 0px;
  color:#999999;
}
.hint_tishi{
  color:#1B3B6C;
}
.hint_c{
    margin:0 0.4rem;
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