<!--  -->
<template>
  <div>
      <!-- <div class="supernatant">菲菲  <span class="supernatant_width">买涨 <span class="supernatant_width_two">LTC</span></span> 12000个</div> -->
      <div class="feifei">
        <div class="num">数据来源:</div>
        <div class="lai">
            <img class="tiao1" src="@/images/okex.png" alt />
        </div>
      </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
export default {
  data () {
    return {
        rem
    };
  }
}

</script>
<style scoped>
.supernatant_width{
  margin:0 0.2rem;
}
.supernatant_width_two{
  margin-left:0.2rem;
}
.feifei{
  display:flex;
  margin-left:30%;
}
.lai{
  width:1.5rem;
  height:1rem;
}
.num{
  margin:0 0.5rem;
}
.lai img{
  width:100%;height:100%;
}
</style>