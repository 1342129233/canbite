<!-- 阴影 -->
<template>
  <div>
    <div class="coverage" v-if="yingyin == 1"></div>
    <!-- 提示内容 -->
    <div class="reminder" v-if="yingyin == 1">
      <div class="reminder_top">
        <div class="reminder_xian"></div>
        <div class="reminder_title">指标说明</div>
      </div>
      <div class="reminder_content">
        <div class="reminder_content_qiouOne"></div>
        <div class="reminder_content_qiouTwo"></div>
        <div class="reminder_content_qiouThree">
          <div class="reminder_content_qiouThree_img" @click="coverage_img_id">
            <img src="@/images/usdts/snap2.png" />
          </div>
        </div>
        <p>数据为4小时多空统计</p>
        <p>取最近4小时内买入、卖出的成交量占总成交量的比例。</p>
        <p>该指标仅供参考，不作为投资依据。</p>
        <p>币圈有风险，投资须谨慎。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yinying",
  data() {
    return {};
  },

  methods: {
    //取消阴影
    coverage_img_id() {
      this.$store.commit("yingOne", 2);
    }
  },
  computed:{
    yingyin(){
      return this.$store.state.ying;
    }
  }
};
</script>
<style scoped>
.coverage {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  top: 0rem;
  left: 0;
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
  background: url("../../images/usdts/snap3.png");
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
</style>