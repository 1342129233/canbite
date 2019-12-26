<!--  -->
<template>
    <div class="bottom-tab">
        <!-- <div class="tab-item" @click="switchTo('warehouse')">
            <img :src="'/warehouse' === $route.path ? tabBarImgArr[0].normal : tabBarImgArr[0].selected" alt="爆仓">
            <span>爆仓</span>
        </div>
        <div class="tab-item" @click="switchTo('information')">
            <img :src="'/information' === $route.path ? tabBarImgArr[1].normal : tabBarImgArr[1].selected" alt="大额">
            <span>大额</span>
        </div>
        <div class="tab-item" @click="switchTo('cost')">
            <img :src="'/cost' === $route.path ? tabBarImgArr[2].normal : tabBarImgArr[2].selected" alt="持仓">
            <span>持仓</span>
        </div>
        <div class="tab-item" @click="switchTo('market')">
            <img :src="'/market' === $route.path ? tabBarImgArr[3].normal : tabBarImgArr[3].selected" alt="市场">
            <span>市场</span>
        </div>
        <div class="tab-item" @click="switchTo('my')">
            <img :src="'/my' === $route.path ? tabBarImgArr[4].normal : tabBarImgArr[4].selected" alt="我的">
            <span>我的</span>
        </div> -->



        <!-- <div
          class="tab-item" 
          v-for="(tab,index)  in tabbar" 
          :key="tab.index"
          @click="switchTo(tab.switch)"
        >
            <img :src="tab.pictureOne" alt="tab.title" v-show="tab.active">
            <img :src="tab.pictureTwo" alt="tab.title" v-show="!tab.active">
            <span>{{tab.title}}</span>
        </div> -->





        <div class="bottom">  
          <ul class="bottom-ul">  
              <router-link tag="li" :to="{path:'/warehouse'}" >  
                <img :src="'/warehouse' === $route.path ? tabBarImgArr[0].normal : tabBarImgArr[0].selected" alt="合约">
                <span>合约</span>  
              </router-link>
              <router-link tag="li" :to="{path:'/baocang'}">  
                <img :src="'/baocang' === $route.path ? tabBarImgArr[2].normal : tabBarImgArr[2].selected" alt="挂单">
                <span>爆仓</span>  
              </router-link>
              <router-link tag="li" :to="{path:'/pankou'}">
                <img :src="'/pankou' === $route.path ? tabBarImgArr[1].normal : tabBarImgArr[1].selected" alt="挂单">
                <span>挂单</span>  
              </router-link>
              <router-link tag="li" :to="{path:'/zixun'}">  
                <img :src="'/zixun' === $route.path ? tabBarImgArr[3].normal : tabBarImgArr[3].selected" alt="资讯">
                <span>资讯</span>
              </router-link>
              <!-- <router-link tag="li" :to="{path:'/information'}">  
                <img :src="'/information' === $route.path ? tabBarImgArr[1].normal : tabBarImgArr[1].selected" alt="大额">
                <span>大额</span>  
              </router-link> -->
              <router-link tag="li" :to="{path:'/my'}">  
                <img :src="'/my' === $route.path ? tabBarImgArr[4].normal : tabBarImgArr[4].selected" alt="工具">
                <span>工具</span>
              </router-link>
              
          </ul>  
        </div> 
    </div>
</template>

<script>
import rem from '@/components/js/rem.js';
export default {
  name:'',
  data(){
      return{
        rem,
        tabBarImgArr:[   //图片切换
          {normal: require('@/images/footer/icon1.1.png'), selected: require('@/images/footer/icon1.2.png')},
          {normal: require('@/images/icon3.2.png'), selected: require('@/images/icon3.1.png')},
          {normal: require('@/images/footer/icon2.2.png'), selected: require('@/images/footer/icon2.1.png')},
          {normal: require('@/images/footer/icon3.2.png'), selected: require('@/images/footer/icon3.1.png')},
          {normal: require('@/images/footer/icon4.2.png'), selected: require('@/images/footer/icon4.1.png')}
        ],
        // tabbar:[
        //     {
        //         title:"爆仓",
        //         link:"warehouse",
        //         active:true,
        //         pictureOne:require('@/images/footer/icon1.1.png'),
        //         pictureTwo:require('@/images/footer/icon1.2.png'),
        //         switch:'warehouse'
        //     },
        //     {
        //         title:"大额",
        //         link:"information",
        //         active:false,
        //         pictureOne:require('@/images/icon3.2.png'),
        //         pictureTwo:require('@/images/icon3.1.png'),
        //         switch:'information'
        //     },
        //     {
        //         title:"持仓",
        //         link:"cost",
        //         active:false,
        //         pictureOne:require('@/images/footer/icon2.2.png'),
        //         pictureTwo:require('@/images/footer/icon2.1.png'),
        //         switch:'cost'
        //     },
        //     {
        //         title:"市场",
        //         link:"market",
        //         active:false,
        //         pictureOne:require('@/images/footer/icon3.2.png'),
        //         pictureTwo:require('@/images/footer/icon3.1.png'),
        //         switch:'market'
        //     },
        //     {
        //         title:"我的",
        //         link:"my",
        //         active:false,
        //         pictureOne:require('@/images/footer/icon4.2.png'),
        //         pictureTwo:require('@/images/footer/icon4.1.png'),
        //         switch:'my'
        //     },
        // ],
      }
  },
  computed:{
    tabbar () {
        return this.$store.state.tabbar
    }
    
  },
  methods:{ 
    switchTo(path){
        this.$router.push(path).catch(err => {
            //报错
        })
        this.$store.commit('picture_tabbar',path);
    },
    chuanzi(){
        console.log(1)
    },
    //vuex的state值
    // tabbar(){ 
    //     this.$store.commit('picture_tabbar');
    // },
  },
  mounted(){
    // window.addEventListener("beforeunload", () => {
    //     sessionStorage.setItem("tabbar", JSON.stringify(this.$store.state.tabbar));
    // });
  },
}

</script>
<style scoped>
[v-cloak]{
    display:none;
} 
.bottom-tab{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    z-index: 9;
    border-top:1px solid #E8E8E8;
}
.bottom-tab .tab-item{
    display: flex;
    flex: 1;
    margin-bottom:0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    color: #666;
}
.bottom-tab .tab-item img{
    width: 25%;
    margin-bottom: 2px;
}
.bottom-tab .tab-item img .on{
    color: red;
}



.bottom{
    width:100%;
    height:2rem;
}
.bottom-ul{
    list-style-type: none;
    display:flex;
    text-align: center;
    height: 2rem;
}
.bottom-ul li{
    display: flex;
    flex: 1;
    margin-bottom:0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
    color: #666;
    background-color:#FFF;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
}
.bottom-ul li.active{
    color:#f03d37;
}
.bottom-ul li.router-link-active{
    color:#38D48A;
}
.bottom-ul li img{
    width: 25%;
    margin-bottom: 2px;
}
</style>