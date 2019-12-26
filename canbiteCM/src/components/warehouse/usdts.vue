<template>
  <div class="headers" v-show="iscurrency">
    <ul class="tab-head">
        <li 
          :class="{active:categoryIndex==item[0]}"
          class="tab-head-item" 
          v-for="(item) in currency" 
          @click="chenges(item[0])" 
        >
          {{item[1]}}
        </li>
    </ul>
    <div class="usdter">
      <Usdt />
    </div>

  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
import Usdt from '@/components/warehouse/USDT/index.vue';
export default {
  name:"usdts",
  created(){
      this.$store.dispatch('loaddata');
  },
  data(){
    return{
      rem,
      activeName: 'first',
      //transactional:['USDT','HUSD','BTC','ETH','HT','ALTS','LYM','RCN','ZRX','PC'],
      //categoryIndex:1,
    }
  },
  computed:{
    currency () { 
      return this.$store.state.headname
    },
    iscurrency() {
      return this.currency ? true : false;
    },
    categoryIndex() {
      return this.$store.state.categoryIndex;
    },
  },
  components: {
    Usdt,
  },
  methods: {
    chenges(i){ // 这里我们传入一个当前值点击事件
      this.$store.commit('ustdsChanges',i);
    },
  },
  
}

</script>
<style scoped>

.main{
    width:100%;
    height:10rem;
}
.headers{
  position: relative;;
  left:0px;
  /* top:2rem; */
  padding:0px;
  margin:0px;
  font-size: 1rem;
  width:100%;
}
.tab-head{
  list-style-type: none;
  display:-webkit-box;
  display:-webkit-flex;
  display:-ms-flexbox;
  display:flex;
  -webkit-flex-wrap:nowrap;
  -ms-flex-wrap:nowrap;
  flex-wrap:nowrap;
  -webkit-box-pack:justify;
  -webkit-justify-content:space-between;
  -ms-flex-pack:justify;
  justify-content:space-between;
  background:#FFF;
  padding:0;
  margin:0px;
  overflow:auto;
  position:fixed;
  z-index: 10;
  /* height:1.1rem; */
  width:100%;
}
.tab-head-item{
  -webkit-box-flex:1;
  -webkit-flex:1 0 auto;
  -ms-flex:1 0 auto;
  flex:1 0 auto;
  color:#97A6B3;
  margin:0 0.5rem;
  height:0.8rem;
  font-size:0.55rem;
}
.active {
  border-bottom: 1px solid #507CC1;
  color:#507CC1;
}
.usdter{
  position:relative;
  z-index:9;
}



</style>
