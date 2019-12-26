<template>
  <div class="my">
    <!-- <Headers /> -->
    <!-- <div class="supernatants">
      <FeiFei />
    </div>-->
    <div class="body">
      <My />
    </div>
    <Footer v-show="hidshow" />
  </div>
</template>

<script>
import rem from "@/components/js/rem.js";
import Headers from "@/components/headers/index.vue";
import Footer from "@/components/footer2/index.vue";
import My from "@/components/my/index.vue";
// import FeiFei from "@/components/message/feifei.vue"
export default {
  name: "my",
  data() {
    return {
      rem,
      docmHeight: "0", //默认屏幕高度
      showHeight: "0", //实时屏幕高度
      hidshow: true, //显示或者隐藏footer,
      isResize: false //默认屏幕高度是否已获取
    };
  },
  components: {
    Footer,
    Headers,
    My
    // FeiFei
  }

  //   computed: {},

  //mounted: {  }
  // methods: {

  //  }
};
</script>
<style scoped>
.body {
  /* margin-top:3rem; */
}
/* .supernatants{
  position:fixed;
  left:0px;
  top:2rem;
  font-size:0.5rem;
  width:100%;
  height:1rem;
  line-height:1rem;
  background:#f5f5f5;
  text-align: center;
  color:#26D280;
  z-index:999;
} */
</style>