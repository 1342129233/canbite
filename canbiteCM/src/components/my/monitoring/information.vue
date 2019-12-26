<!-- 大额 -->
<template>
  <div class="information" style="background:#F5F5F5;">
    <div class="calculator_had">
      <div>大额转账</div>
      <div class="monitoring_img">
        <!-- 返回 -->
        <img src="@/images/my/returns.png" alt="返回" @click="information_guan" />
      </div>
    </div>
    <div class="bizhong">
      <ul>
        <li v-for="item in quanhead" @click="xuanzhong(item)">
          <div :class="{actives:item == head}">{{ item }}</div>
          <div class="xian" :class="{active:item == head}"></div>
        </li>
      </ul>
    </div>
    <div>
      <div clsss="btc">
        <div class="contlist" ref="contlist_bscroll">
          <ul>
            <li>{{ pullDownmsg }}</li>
            <li
              class="contlist_li"
              v-for="aider in informationTran.filter(aider=>aider.cur_id == informationsIndex)"
            >
              <div class="contlist_dian"></div>
              <div>{{aider.time}}</div>
              <div>转账金额: {{aider.value}}</div>
              <div>转出地址: {{aider.adr_out}}</div>
              <div>转账金额: {{aider.adr_in}}</div>
            </li>
            <li>{{ pullUp }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import rem from "@/components/js/rem.js";
import BScroll from "better-scroll";
//loading图
import Loading from "@/components/loading/index.vue";

export default {
  name: "information",
  data() {
    return {
      head: "BTC",
      quanhead: ["BTC"],
      rem,
      //状态货币
      informationsIndex: localStorage.getItem("v"),
      //内容
      informationTran: [],
      //下拉刷新状态
      pullDownmsg: "",
      //上拉状态
      pullUp: "",
      //页数
      indexzheng: 1,
      isnum: 0
    };
  },

  //   components: {},

  //   computed: {},

  mounted() {
    axios({
      url:this.FACTURL+'/api/market/adr_tran/page/1/cur/1',
      method:'get',
      // headers: {
      //     "Access-Control-Allow-Origin": "*" //必须要加头
      // }
    })
    // axios
    //   .get("http://api.canbite.cn/api/market/adr_tran/page/1/cur/1", {
    //     //post请求，在请求时会自动把param拼接再Param后面
    //     headers: {
    //       "Access-Control-Allow-Origin": "*" //必须要加头
    //     }
    //   })
      .then(res => {
        this.informationTran = res.data.data.tran;
        this.name = res.status;
        this.$nextTick(() => {
          let scroll = new BScroll(this.$refs.contlist_bscroll, {
            //允许里面有点击事件默认false(比如下拉更新)
            tap: true,
            //节流
            probeType: 1
          });

          //下拉状态
          scroll.on("scroll", pos => {
            if (pos.y > 20) {
              this.pullDownmsg = "正在更新中...";
            }

            if (scroll.maxScrollY > pos.y + 30) {
              this.pullUp = "正在加载中..."; //显示上拉提示组件
            }
          });

          scroll.on("touchEnd", pos => {
            //下拉动作
            if (pos.y > 20) {
              this.indexzheng++;
              axios({
                url:this.FACTURL+'/api/market/adr_tran/page/1/cur/1',
                method:'get',
              })
              // axios
              //   .get("http://api.canbite.cn/api/market/adr_tran/page/1/cur/1")
                .then(res => {
                  this.pullDownmsg = "更新成功";
                  setTimeout(() => {
                    this.informationTran = res.data.data.tran;
                    // console.log(this.informationTran)
                    this.pullDownmsg = "";
                  }, 1000);
                });
            }
            //上拉加载 总高度>下拉的高度+数值(20仅供参考) 触发加载更多
            if (scroll.maxScrollY > pos.y + 30) {
              //使用refresh 方法 来更新scroll 解决无法滚动的问题
              if (true) {
                //判断是否有下一页

                this.indexzheng++;
                //调用接口处理数据
                axios({
                  url:this.FACTURL + "/api/market/adr_tran/page/" + this.indexzheng + "/cur/1",
                  method:'get',
                })
                // axios
                //   .get(
                //     "http://api.canbite.cn/api/market/adr_tran/page/" +
                //       this.indexzheng +
                //       "/cur/1"
                //   )
                  .then(res => {
                    this.pullUp = "加载成功";
                    setTimeout(() => {
                      this.informationTran = this.informationTran.concat(
                        res.data.data.tran
                      );
                      // console.log(this.informationTran)
                      this.pullUp = "";
                      scroll.refresh(); //刷新插件!!!!!这个挺重要的！别忘了。不然会一卡一卡
                    }, 1000);
                  });
              }
            }
          });
        });
      });
  },

  methods: {
    information_guan() {
      this.$store.commit("information_hide");
    },
    xuanzhong(index) {
      this.head = index;
    }
  }
};
</script>
<style scoped>
ul,
li {
  padding: 0px;
  margin: 0px;
  list-style: none;
}
.information {
  background: #f5f5f5;
  height: 100vh;
}
.information .calculator_had {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #dad9d9;
}
.information .calculator_had div {
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
.bizhong {
  height: 2rem;
  line-height: 2rem;
  border: 1px solid #f5f5f5;
  margin: 0.5rem 0.4rem;
  border-radius: 0.2rem;
  background: #fff;
}
.bizhong ul li {
  float: left;
  width: 33.3%;
  text-align: center;
  position: relative;
  font-size: 0.7rem;
}
.bizhong ul li .xian {
  width: 1rem;
  border: 1px solid #fff;
  position: absolute;
  top: 1.6rem;
  left: 50%;
  margin-left: -0.5rem;
}
.bizhong ul li .active {
  border: 1px solid #507cc1;
}
.actives {
  color: #507cc1;
}

.contlist{  
    position:relative;
    z-index: 2;
    height:70vh;
    overflow: hidden;
    background:#FFF;
    padding-left:1rem;
    margin:0.5rem 0.4rem 0rem 0.4rem ;
}

.contlist_li{
    padding:0.5rem 0 0.5rem 0.5rem;
    border-left:1px solid #507CC1;
    position:relative;
}
/* .contlist_li:nth-child(2){
    margin-top:2rem;
    padding-top:0rem;
} */
.contlist_li .contlist_dian{
    position:absolute;
    left:-0.31rem;
    top:0.8rem;
    width: 0.4rem;
    height: 0.4rem;
    background:#FFF;
    border-radius: 50%;
    border: 2PX solid #507CC1;
}
.contlist_li div{
    height:1rem;
    line-height: 1rem;
    overflow: hidden;
}



/* loading */
.loading{
  position:fixed;
  top:40%;
  margin-top:-50px;
  width: 100px;
  left:50%;
  margin-left:-60px;
  height: 120px;
}
</style>