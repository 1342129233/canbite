<template>
  <div class="headers">
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
      <Baocangs />
    </div>

  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
import Baocangs from '@/components/baocang/baocangs/index.vue';
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
    categoryIndex() {
      return this.$store.state.categoryIndex;
    },
  },
  components: {
    Baocangs,
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
  font-size: 0.8rem;
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
  z-index: 8;
  /* height:1.1rem; */
  width:100%;
  height:1rem;
}
.tab-head-item{
  -webkit-box-flex:1;
  -webkit-flex:1 0 auto;
  -ms-flex:1 0 auto;
  flex:1 0 auto;
  color:#000;
  margin:0 0.5rem;
  font-size:0.55rem;
}
.active {
  border-bottom: 1px solid #507CC1;
}
.usdter{
  
}
</style>
