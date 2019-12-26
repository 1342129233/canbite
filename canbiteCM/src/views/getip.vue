<template>
  <div class="pp">
    <h1>我想要你的ip:{{ip}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ip: ""
    };
  },
  methods: {},
  created() {
    var Ip = returnCitySN["cip"];
    localStorage.setItem("Ip", Ip);
    this.ip = localStorage.getItem("Ip");
  }
};
</script>

<style scoped>
.pp {
  width: 100%;
  height: 5rem;
  background: pink;
}
</style>