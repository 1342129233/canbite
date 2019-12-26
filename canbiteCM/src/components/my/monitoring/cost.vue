<!-- 我的页面 -->
<template>
  <div class="costs">
    <Headers class="bgc"/>
    <div class="costs_head">
        <ul class="tab-head">
        <li 
          :class="{active_head:usdtscurrency_id==item.currency_id}"
          class="tab-head-item" 
          v-for="(item) in currency" 
          :key="item.currency_id"
          @click="chenges(item.currency_id)" 
        >
          {{item.currency_name}}
        </li>
    </ul>
    </div>
    <div class="cost">
        <!-- <div class="my_fist">
            <ul class="headerA">
                <li class="item"
                v-for="(gameName,index) in gameNames"
                @click="selected(gameName)"
                :class="{active:activeName == gameName}"
                :key="index"
                >
                    {{gameName}}
                </li>
            </ul>
        </div> -->
        <div class="zhanbi">
            <div class="zhanbi_one">
                <div class="zhanbi_img"><img class="tiao1" src="@/images/CC_two.png" alt="占比%" /></div>
                <div>占比%</div>
            </div>
            <div class="zhanbi_two">
                <div class="zhanbi_img"><img class="tiao1" src="@/images/CC_one.png" alt="持仓占比" /></div>
                <div>持仓占比</div>
            </div>
        </div>
        <div class="cost_convas">
            
            <div class="main" ref="myechart"></div>
        </div>
        <div class="my_last">
            <ul class="headerB">
                <li class="items"
                v-for="(timezone,index) in timezones"
                @click="selecteds(timezone)"
                :class="{actives:activetime == timezone}"
                :key="index"
                >
                    {{timezone}}
                </li>
                
            </ul>
        </div>
        <div class="headerC_bor">
            <ul class="headerC">
                <li>成本价格</li>
                <li>总额{USDT}</li>
                <li>占比</li>
            </ul>
            <div class="headerD_bor">
                <ul class="headerD">
                    <li>9866.10</li>
                    <li>$992万</li>
                    <li>3.92%</li>
                </ul>
                <ul class="headerD">
                    <li>9866.10</li>
                    <li>$992万</li>
                    <li>3.92%</li>
                </ul>
                <ul class="headerD">
                    <li>9866.10</li>
                    <li>$992万</li>
                    <li>3.92%</li>
                </ul>
                <ul class="headerD">
                    <li>9866.10</li>
                    <li>$992万</li>
                    <li>3.92%</li>
                </ul>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
import Headers from '@/components/headers/index.vue'
import Footer from '@/components/footer/index.vue'
// import Monitoring from '@/components/my/monitoring/monitoring.vue'
export default {
  created(){
      //刷新页面不会丢失数据
      this.$store.dispatch('loaddata');
  },
  data(){
      return{
          rem,
          gameNames:['USDT1', 'USDT2', 'USDT3', 'USDT4', 'USDT5','USDT6'],
          activeName:'USDT1',
          timezones:['24小时','一周','一月','季度'],
          activetime:'24小时',
            option : {
                tooltip: {},
                xAxis: {
                    data: ["￥336.98","￥336.98","￥336.98","￥336.98","￥336.98"],
                    axisLabel:{  
                        interval:0,//横轴信息全部显示  
                        // rotate:-15,//-15度角倾斜显示  
                    },

                },
                yAxis: [{
                    type:'value',
                    color:"#D57F44",
                    min: 0,
                    max: 40,
                    interval: 10,
                    axisLabel:{
                        formatter: '{value}%'
                    },
                    axisTick: {
                        show: false
                    },
                    //背景一条一条的线
                    splitLine:{
                        lineStyle:{
                            color:["#D57F44"]
                        }
                    },
                    // nameTextStyle:{
                    //     color:["#D57F44"]
                    // },
                    axisLine:{
                        lineStyle:{
                            color:'#D57F44',
                            width:1
                        }
                    }
                    
                }],
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 20],
                    itemStyle:{
                        normal:{
                            color:function(params){
                                var colorList = ["#98C767","#98C767","#98C767","#98C767","#98C767","#98C767"];
                                return colorList[params.dataIndex]
                            },
                            label:{
                                show:true,  //开启显示
                                position: 'top',  //在上方显示
                                textStyle: {  //数值样式
                                  color:'black',
                                  fontSize: 12
                                },
                                formatter: '{c}%'　
                                
                            }
                        }
                        
                    },
                    barWidth : 30,//柱图宽度
                }],
                
            },
            
            
      }
  },
  components: {
      Headers,
      Footer
  },
  methods:{
    //   function calculateMA(dayCount, data) {
    //     var result = [];
    //     for (var i = 0, len = data.length; i < len; i++) {
    //         if (i < dayCount) {
    //             result.push('-');
    //             continue;
    //         }
    //         var sum = 0;
    //         for (var j = 0; j < dayCount; j++) {
    //             sum += data[i - j][1];
    //         }
    //         result.push(sum / dayCount);
    //     }
    //     return result;
    //   }
    selected(gameName) {
        this.activeName = gameName
    },
    selecteds(timezone){
        this.activetime = timezone;
    },
    // 头部切换
    chenges(index){ // 这里我们传入一个当前值点击事件
      this.$store.commit('ustdsChanges',index);
    },
  },
  mounted:function(){
      //console.log(this.$echarts)
      let myechart = this.$echarts.init(this.$refs.myechart) //初始化一个echarts
      myechart.setOption(this.option)  //setOption 用this.option中的数据开始作图
      

      //背景颜色
      document.body.style.backgroundColor="#F7F7F7";
  },
  computed:{
    // 头部切换
    currency () { 
        return this.$store.state.headname.sort((a,b)=>a.currency_sort-b.currency_sort)
    },
    usdtscurrency_id() {
        return this.$store.getters.usdtscurrencys;
    }
  },
}

</script>
<style scoped>
ul{
    padding:0px;
}
ul li {
    list-style-type:none;
}
.costs_head{
  margin-top:2rem;
  height:1.1rem;
  
}
.bgc{
    background:#fff;
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
  padding:0;
  margin:0px;
  overflow:auto;
  position:fixed;z-index: 999;
  height:1.1rem;
  width:100%;
  background:#FFF;
}
.tab-head-item{
  -webkit-box-flex:1;
  -webkit-flex:1 0 auto;
  -ms-flex:1 0 auto;
  flex:1 0 auto;
  color:#000;
  margin:0 0.5rem;
  height:0.8rem;
  font-size:0.55rem;
}
.active_head {
  border-bottom: 1px solid #507CC1;
}
.costs{
  height:100%;
  
}
.cost{
    margin: 0 0.4rem;
    padding:0px;
    font-size:0.6rem;
}
.active{
    background-color:#5f5f5f;
    color:#F7F7F7;
}
.actives{
    background-color:#D57F44;
    color:#FFF;
}
.zhanbi{
    position:fixed;
    top:3.6rem;
    left:2rem;
    z-index: 3;
    font-size:0.5rem;
    width:3rem;
    height:2rem;
    border:1px solid #000;
}
.zhanbi_one{
    height:1rem;
    line-height: 1rem;
    display:flex;
    color:#D57F44;
}
.zhanbi_two{
    height:1rem;
    line-height: 1rem;
    display:flex;
}
.zhanbi_img {
    width:0.2rem;
    height:0.6rem;
    margin:0.1rem 0.2rem 0rem 0.2rem;
}
.zhanbi_img img{
    width:100%;
    height:100%;
}
/* .supernatants{
  position:fixed;
  left:0px;
  top:2rem;
  font-size:0.6rem;
  width:100%;
  height:1rem;
  line-height:1rem;
  background:#f5f5f5;
  text-align: center;
  color:#26D280;
  z-index:999;
  overflow:hidden;
} */
.my_fist{
  width: 100%;
  position:relative;
  height: 2.5rem;
  overflow: hidden;
}
.headerA{
    width:100%;
    position:absolute;
    padding:0px;
    height: 2.5rem;
    padding-top: 0.3rem;
    overflow: hidden;
    background: #fff;
    display:flex;
    text-align: center;
    list-style-type:none;
}
.headerA .item:first-child{
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}
.headerA .item:last-child{
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.headerA .item{
    width:16.6%;
    height:1.6rem;
    line-height:1.6rem;
    box-sizing: border-box;
    border:1px solid #F7F7F7;
}



.main{
    margin-top:0.5rem;
    width:100%;
    height:9rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    /* border:1px solid rgb(134, 134, 134); */
    background:#FFF;
}
.my_last{
  width: 100%;
  height: 2.5rem;
  overflow: hidden;
}
.headerB{
    width:100%;
    padding:0px;
    color:#D57F44;
    height: 1.6rem;
    overflow: hidden;
    background: #fff;
    display:flex;
    text-align: center;
    list-style-type:none;
    border-radius: 0.5rem;
    font-size:0.5rem;
}
.headerB .items:first-child{
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}
.headerB .items:last-child{
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}
.headerB .items{
    width:25%;
    height:1.6rem;
    line-height:1.6rem;
    box-sizing: border-box;
    border:1px solid #F7F7F7;
}

.headerC_bor{
    font-size:0.5rem;
}
.headerC{
    width:100%;
    padding:0px;
    color:#D57F44;
    overflow: hidden;
    background: #fff;
    display:flex;
    text-align: center;
    list-style-type:none;
    margin:0px;
    height: 1.6rem;
    border-radius: 0.5rem;
}
.headerC li{
    width:33.33%;
    height:1.6rem;
    line-height:1.6rem;
    box-sizing: border-box;
    border:1px solid #F7F7F7;
}
.headerC li:first-child{
    border-top-left-radius: 0.5rem;
    
}
.headerC li:last-child{
    border-top-right-radius: 0.5rem;
    
}

.headerD_bor{
    box-sizing: border-box;
    margin-top:0.5rem;
    border-top:1px solid #F7F7F7;
    background: #FFF;
}
.headerD{
    width:100%;
    display:flex;
    text-align: center;
    padding:0px;
    margin:0px;
    
}
.headerD li{
    width:33.33%;
    height:1.6rem;
    line-height:1.6rem;
    box-sizing: border-box;
    border:1px solid #F7F7F7;
    border-top:0px;
}

/* .monitoring{
    top:3rem;
    z-index:999;
    position:fixed;
    width:100%;
    height:21rem;
    background-color:#fff;
} */

</style>