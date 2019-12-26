<!-- 更改昵称 -->
<template>
  <div class="changename">
    <div class="fixed"></div>
    <div class="content">
      <div class="header">
        <div class="changename_cancel" @click="return_qu">取消</div>
        <div class="changename_name">更改昵称</div>
        <div class="changename_save">
          <img src="@/images/identity/save.png">
          <div class="bao" @click="return_bao">保存</div>
        </div>
      </div>
    </div>
    <div class="changename_input">
      <div class="cc">
        <input type="text" v-model="name" class="export-input" required="required">
        <div class="input_span">
          <img src="@/images/identity/delete.png" @click="showGam">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
export default {
  name:'',
  data () {
    return {
      rem,
      name:"",
    };
  },
  methods:{
    //清空input框
    showGam(){
      this.name = ""
    },
    //返回上一层
    return_qu(){
        this.$router.go(-1);
    },
    //保存
    return_bao(){
      this.$router.push({path: '/my/identity'});
    }
  }
}

</script>
<style scoped>
*{
    padding:0px;
    margin:0px;
}

.changename{
  position:absolute;
    top:0px;
    left:0px;
    font-size:0.5rem;
    z-index:101;
    width:100%;
}
.fixed{
    position:fixed;
    background:#F7F7F7;
    width:100%;
    height:100%;
    z-index: 1;
}
.content{
    position:relative;
    z-index: 2;
    top:0px;
    overflow: hidden;
}
.header{
    position:relative;
    text-align: center;
    height:1.5rem;
    line-height: 1.5rem;
    overflow: hidden;
}
.changename_cancel{
  position:absolute;
  left:0.5rem;
}
.changename_name{
  font-size:0.7rem;
  font-weight:800;
}
.changename_save{
  position:absolute;
  top:0.2rem;
  right:0.5rem;
  width:2rem;
  height:1rem;
}
.changename_save img{
  width:100%;
  height:100%;
}
.bao{
  position:absolute;
  top:-0.2rem;
  width:2rem;
  height:1rem;
  right:-0.15rem;
  color:#FFF;
  letter-spacing:0.3rem;
}
.changename_input{
  position:relative;
  z-index: 2;
  top:0px;
  width:100%;
  overflow: hidden;
}
.cc{
  margin:0 0.5rem;
}
.changename_input .cc input{
  border:1px solid #FFF;
  height:1.2rem;
  line-height: 0.2rem;
  width:100%;
  outline:none;
  overflow: hidden;
  padding-left:0.2rem;
}
.input_span{
  position:absolute;
  top:0.2rem;
  right:0.7rem;
  width:0.8rem;
  height:0.8rem;
  overflow: hidden;
  display: none;
}
.input_span img{
  width:100%;
  height:100%;
}
.export-input:valid + .input_span {display: block;}
</style>