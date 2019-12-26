<!-- 修改密码 -->
<template>
  <div class="changepass">
      <div class="fixed"></div>
      <div class="header">
          <div class="header_img">
              <img src="@/images/identity/return.png" @click="return_changepass">
          </div>
          <div>修改密码</div>
      </div>
      <div class="content">
          <div class="content_text">
              旧密码:
          </div>
          <div class="content_text content_tu" v-show="!jiou">
              <input type="password" placeholder="若包含字母,请注意区分大小写" v-model="passwordOne">
              <div class="content_img">
                  <img src="@/images/identity/Vhide.png" @click="Vjiou">
              </div>
          </div>
          <div class="content_text content_tu" v-show="jiou">
              <input type="text" placeholder="若包含字母,请注意区分大小写" v-model="passwordOne">
              <div class="content_img">
                  <img src="@/images/identity/Vshow.png" @click="Vjiou">
              </div>
          </div>


          <div class="content_text">
              新密码:
          </div>
          <div class="content_text content_tu" v-show="!xing">
              <input type="password" placeholder="8-16位至少含数字/字母/字符2种组合" v-model="passwordTwo">
              <div class="content_img">
                  <img src="@/images/identity/Vhide.png" @click="Vxing">
              </div>
          </div>
          <div class="content_text content_tu" v-show="xing">
              <input type="text" placeholder="8-16位至少含数字/字母/字符2种组合" v-model="passwordTwo">
              <div class="content_img">
                  <img src="@/images/identity/Vshow.png" @click="Vxing">
              </div>
          </div>
          <div class="content_buttonOne content_button" v-if="passwordTwo == '' || passwordOne == ''">
              <button>确定</button>
          </div>
          <div class="content_buttonTwo content_button" v-else>
              <button>确定</button>
          </div>
          
      </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
export default {
  name:'changepass',
  data () {
    return {
       rem,
       jiou:false,
       passwordOne:'',
       xing:false,
       passwordTwo:'',
    };
  },
  methods:{
      Vjiou(){
          this.jiou = !this.jiou;
      },
      Vxing(){
          this.xing = !this.xing;
      },
      return_changepass(){
          this.$router.go(-1);
      }
  },
}

</script>
<style scoped>
.changepass{
    font-size:0.5rem;
    position: absolute;
    top:0px;
    z-index:99;
    width:100%;
}
.fixed{
    position:fixed;
    width:100%;
    height:100%;
    z-index:1;
    background:#FFF;
}
.header{
    width:100%;
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    position:relative;
    z-index:2;
}
.header_img{
    position:absolute;
    width:0.3rem;
    height:0.6rem;
    left:0.5rem;
    top:0.1rem;
}
.header_img img{
    width:100%;
    height:100%;
}

.content{
    border: 1px solid #000;
    margin:1rem 5%;
    height:7.5rem;
    padding: 0 5%;
    border: 1px solid #F7F7F7;
    box-shadow: 0px 0px 20px #F7F7F7;
    position:absolute;
    z-index:2;
    width:80%;
}
.content_text{
    height:1.2rem;
    line-height: 1.2rem;
}
.content_text input{
    width:100%;
    height:1.2rem;
    line-height: 1.2rem;
    border:none;
    border-bottom: 1px solid #F7F7F7;
    color:#000;
    outline:none;
}
.content_tu{
    position:relative
}
.content_img{
    position:absolute;
    width:0.6rem;
    height:0.34rem;
    top:0rem;
    right:0.4rem;
}
.content_img img{
    width:100%;
    height:100%;

}
.content_button{
    margin-top:1rem;
}
.content_buttonOne button{
    height:1.2rem;
    width:80%;
    color:#FFF;
    line-height: 1rem;
    background:#7777BB;
    border-radius: 0.5rem;
    border:1px solid #7777BB;
    margin-left:10%;
    outline:none;
}
.content_buttonTwo button{
    height:1.2rem;
    width:80%;
    color:#FFF;
    line-height: 1rem;
    background:#7777BB;
    border-radius: 0.5rem;
    border:1px solid #7777BB;
    margin-left:10%;
    outline:none;
}
</style>