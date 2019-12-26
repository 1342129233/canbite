<template>
  <div class="information">
    <Headers />
    <div class="body">
      <div>
        <Message />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
import Headers from '@/components/headers/index.vue'
import Footer from '@/components/footer2/index.vue'
//大额交易消息
import Message from '@/components/information/index.vue'

export default {
  name:'information',
  data(){
    return {
      rem
    }
  },
  components: {
    Footer,
    Headers,
    Message,
  },
  computed: {
      
  },

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