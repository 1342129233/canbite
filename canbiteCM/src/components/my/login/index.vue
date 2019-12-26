<template>
<!-- 登录总页面 -->
  <div >
    <h1>111</h1>
      <div v-show="gg.login">
        <!-- 登录 -->
        <Logon :gg="gg"/>
      </div>
      <div v-show="gg.register">
        <!-- 注册 -->
        <Register :gg="gg"/>
      </div>
      <div v-show="gg.findmima">
        <!-- 找回密码 -->
        <Findmima :gg="gg"/>
      </div>
  </div>
</template>

<script>
import Logon from '@/components/my/login/logon.vue'
import Register from '@/components/my/login/register.vue'
import Findmima from '@/components/my/login/findmima.vue'
export default {
  components:{
        Logon,
        Register,
        Findmima,
  },
  props:{},
  data(){
    return {
      // 控制三个页面他们是否显示
      gg:{login:true,register:false,findmima:false},
    }
  },
}
</script>
<style scoped>
   
</style>