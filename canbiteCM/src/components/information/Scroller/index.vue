<!-- 封装scroll -->
<template>
  <div class="wrapper" ref="wrapper">
      <!-- 插槽 -->
      <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import axios from 'axios'
export default {
  name:'Scroller', 
  data () {
    return {
    }
  },
  props : {
      handleToScroll : {
          type : Function,
          default : function(){}
      },
      handleToTounchEnd : {
          type : Function,
          default : function(){}
      }
  },
  mounted: {
      let scroll = new BScroll(this.$refs.wrapper,{
          tap : true,
          
      }),
      scroll.on(){

      }
  },
//   components: {},

//   computed: {},



//   methods: {}
}

</script>
<style scoped>
.wrapper{
    height:100%;
}
</style>