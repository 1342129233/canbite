<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <keep-alive>
        <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "usdt",
  data() {
    return {
      
    };
  },
  created() {
    let loading = document.getElementById('Loading')
    if(loading != null){
        document.body.removeChild(loading);
    }
  }
}
</script>
<style>
*{
  padding:0px;
  margin:0px;
  font-size:0.6rem;
}

</style>
