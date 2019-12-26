<!-- 大额监控 -->
<template>
  <div class="monitoring">
    <div class="monitoring0">
        <!-- 隐藏按钮 -->
        <!-- <div class="monitoring_img" @click="monitoring_guan">
            <img class="beijing" src="@/images/my/my_img01.png" alt="">
        </div> -->
        
        <div>
            <ul class="monitoring_title">
                <li>时间</li>
                <li>币种</li>
                <li>内容</li>
                <li>信号</li>
            </ul>
        </div>
        <div class="monitoring_data">
            2019-09-24
        </div>
        <div>
            <ul class="monitoring_list">
                <li>10:25</li>
                <li>BTC</li>
                <li>
                    <div class="classSize">大额转入交易所</div>
                    <div class="monitoring_money">￥22.56万</div>
                </li>
                <li>
                    <div class="monitoring_jie">利&nbsp;空</div>
                </li>
            </ul>
            <ul class="monitoring_list">
                <li>10:25</li>
                <li>BTC</li>
                <li>
                    <div class="classSize">大额转入交易所</div>
                    <div class="monitoring_money">￥22.56万</div>
                </li>
                <li>
                    <div class="monitoring_suan">利&nbsp;好</div>
                </li>
            </ul>
            <ul class="monitoring_list">
                <li>10:25</li>
                <li>BTC</li>
                <li>
                    <div class="classSize">大额转入交易所</div>
                    <div class="monitoring_money">￥22.56万</div>
                </li>
                <li>
                    <div class="monitoring_jie">利&nbsp;空</div>
                </li>
            </ul>
            <ul class="monitoring_list">
                <li>10:25</li>
                <li>BTC</li>
                <li>
                    <div class="classSize">大额转入交易所</div>
                    <div class="monitoring_money">￥22.56万</div>
                </li>
                <li>
                    <div class="monitoring_jie">利&nbsp;空</div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
export default {
  name:'monitoring',
  data () {
    return {
    };
  },
  methods:{
    //   大额交易的隐藏按钮
    //   monitoring_guan(){
    //       this.$store.commit('MyMonitorings_guan');
    //   }
  }
}

</script>
<style scoped>
ul{
    padding:0px;
}
ul li {
    list-style-type:none;
    font-size: .65rem;
}
.monitoring{
    margin-left:0rem;
    margin-top:0rem;
}
.monitoring0{
    margin:0 0.5rem;
    border:1px solid #F7F7F7;
    border-radius: 0.5rem;
    text-align: center;
}
.monitoring_img{
    width:1rem;
    height:1rem;
    float:right;
    margin:0.4rem;
}
.monitoring_img img{
    width:100%;
    height:100%;
}
.monitoring_title {
    width:100%;
    overflow:hidden;
    left:0px;
    display: flex;
    border-bottom:1px  solid #F7F7F7;
}
.monitoring_title li:nth-child(1){
    width:20%;
}
.monitoring_title li:nth-child(2){
    width:20%;
}
.monitoring_title li:nth-child(3){
    width:45%;
}
.monitoring_title li:nth-child(4){
    width:15%;
}
.monitoring_data{
    color:#D57F44;
    float:left;
    padding-left:0.7rem;
    border-bottom:1px  solid #F7F7F7;
    font-size: .6rem;
}
.monitoring_list{
    width:100%;
    overflow:hidden;
    left:0px;
    display: flex;
    border-bottom:1px  solid #F7F7F7;
    font-size: .6rem;
}
.monitoring_list li{
    font-size: 0.5rem;
}
.monitoring_list li:nth-child(1){
    width:20%;
}
.monitoring_list li:nth-child(2){
    width:20%;
}
.monitoring_list li:nth-child(3){
    width:45%;
}
.monitoring_list li:nth-child(4){
    width:15%;
}
.monitoring_money{
    font-size:0.35rem;
    position: relative;
    left: -1rem;
}
.monitoring_jie{
    width:1.8rem;
    text-align: center;
    border:2px solid red;
    border-radius: 0.5rem;
    color:red;
}
.monitoring_suan{
    width:1.8rem;
    text-align: center;
    border:2px solid #98C767;
    border-radius: 0.5rem;
    color:#98C767;
}
.classSize{
    font-size:0.6rem;
}
</style>