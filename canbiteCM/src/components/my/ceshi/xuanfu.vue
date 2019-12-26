<!-- 测试 -->
<template>
  <div class="ceshi">
    <div id="div1">
        <div class="div2 div5">8023.36</div>
        <div class="div2">[BTC]OKEx季度</div>
        <div class="div3 div5">7967.75</div>
        <div class="div2">[BTC]火币全球站</div>
        <div class="div4 div5">166.57</div>
        <div class="div2">[ETH]火币全球站</div>
        <div class="div4 div5">166.57</div>
        <div class="div2">[ETH]火币全球站</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ceshi',
  data () {
    return {
    };
  },
  mounted(){
    console.log(this.$route.query.xuanfu)
  },
}

</script>
<style scoped>
* {
 margin: 0;
 padding: 0;
 touch-action: pan-y;
}
html,
body {
 width: 100%;
 height: 100%;
  font-size:1rem;
}
.ceshi{
  position:absolute;
  z-index:1;
  width:100%;
  height:100%;
  top:0px;
}
#div1 {
  width: 100%;
  padding:10px;
  box-sizing: border-box;
  /* background:#000;
  opacity: 0.1; */
  background-color: rgba(0,0,0,0);
  position: absolute;
  font-size:1rem;
  z-index:2;
}
.div2{
  width: 100%;
  text-align: center;
 color:#FFF;
  font-size:1rem;
}
.div3{
 color:red;
}
.div4{
 color:green;
}
.div5{
 font-size:1rem;
 text-align:center;
}
</style>