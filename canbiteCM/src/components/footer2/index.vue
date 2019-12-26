<!--  -->
<template>
  <div class="bottom-tab">
    <div class="bottom">
      <ul class="bottom-ul">
        <router-link tag="li" :to="{path:'/one'}">
          <img
            :src="'/one' === $route.path ? tabBarImgArr[0].normal : tabBarImgArr[0].selected"
            alt="合约"
          />
          <!--             <span>合约</span>   -->
        </router-link>
        <!-- <router-link tag="li" :to="{path:'/baocang'}">  
                <img :src="'/baocang' === $route.path ? tabBarImgArr[2].normal : tabBarImgArr[2].selected" alt="挂单">
                <span>爆仓</span>  
        </router-link>-->
        <router-link tag="li" :to="{path:'/pankou'}">
          <img
            :src="'/pankou' === $route.path ? tabBarImgArr[1].normal : tabBarImgArr[1].selected"
            alt="挂单"
          />
          <!--             <span>挂单</span>   -->
        </router-link>
        <!-- <router-link tag="li" :to="{path:'/zixun'}">  
                <img :src="'/zixun' === $route.path ? tabBarImgArr[3].normal : tabBarImgArr[3].selected" alt="资讯">
                <span>资讯</span>
        </router-link>-->
        <!-- <router-link tag="li" :to="{path:'/information'}">  
                <img :src="'/information' === $route.path ? tabBarImgArr[1].normal : tabBarImgArr[1].selected" alt="大额">
                <span>大额</span>  
        </router-link>-->
        <router-link tag="li" :to="{path:'/my'}">
          <img
            :src="'/my' === $route.path ? tabBarImgArr[4].normal : tabBarImgArr[4].selected"
            alt="工具"
          />
          <!--             <span>工具</span> -->
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import rem from "@/components/js/rem.js";
export default {
  name: "",
  data() {
    return {
      rem,
      tabBarImgArr: [
        //图片切换
        {
          normal: require("@/images/footer/icon1.1.png"),
          selected: require("@/images/footer/icon1.2.png")
        },
        {
          normal: require("@/images/footer/icon5.2.png"),
          selected: require("@/images/footer/icon5.1.png")
        },
        {
          normal: require("@/images/footer/icon2.2.png"),
          selected: require("@/images/footer/icon2.1.png")
        },
        {
          normal: require("@/images/footer/icon3.2.png"),
          selected: require("@/images/footer/icon3.1.png")
        },
        {
          normal: require("@/images/footer/icon4.2.png"),
          selected: require("@/images/footer/icon4.1.png")
        }
      ]
    };
  },
  computed: {
    tabbar() {
      return this.$store.state.tabbar;
    }
  },
  methods: {
    switchTo(path) {
      this.$router.push(path).catch(err => {
        //报错
      });
      this.$store.commit("picture_tabbar", path);
    },
    chuanzi() {
      console.log(1);
    }
    //vuex的state值
    // tabbar(){
    //     this.$store.commit('picture_tabbar');
    // },
  },
  mounted() {
    // window.addEventListener("beforeunload", () => {
    //     sessionStorage.setItem("tabbar", JSON.stringify(this.$store.state.tabbar));
    // });
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}
.bottom-tab {
  width: 100%;
  height: 2rem;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  z-index: 9;
  border-top: 1px solid #e8e8e8;
}
.bottom-tab .tab-item {
  display: flex;
  flex: 1;
  margin-bottom: 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  color: #666;
}
.bottom-tab .tab-item img {
  width: 25%;
  margin-bottom: 2px;
}
.bottom-tab .tab-item img .on {
  color: red;
}

.bottom {
  width: 100%;
  height: 2rem;
}
.bottom-ul {
  list-style-type: none;
  display: flex;
  text-align: center;
  height: 2rem;
}
.bottom-ul li {
  display: flex;
  flex: 1;
  margin-bottom: 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  color: #666;
  background-color: #fff;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.bottom-ul li.active {
  color: #f03d37;
}
.bottom-ul li.router-link-active {
  color: #38d48a;
}
.bottom-ul li img {
  width: 20%;
  margin-bottom: 2px;
}
</style>