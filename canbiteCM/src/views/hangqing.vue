<!-- 行情 -->
<template>
  <div class="hangqing">
      <Headers />
      <div class="body">
          行情内容
      </div>
      <Footer />
  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
import Headers from '@/components/headers/index.vue'
import Footer from '@/components/footer/index.vue'
export default {
  name:'hangqing',
  data () {
    return {
        rem,
    };
  },

  components: {
    Footer,
    Headers,
  },

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style scoped>
.body{
  margin-top:3rem;
  font-size:0.5rem;
}
</style>