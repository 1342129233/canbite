<!-- 账号设置 -->
<template>
  <div class="identity">
      <div class="fixed"></div>
      <div class="person">
          <div class="person_img">
            <img src="@/images/identity/return.png" @click="return_img">
          </div>
          个人信息
      </div>
      <div class="head">
          <div class="portrait">
            <img :src="imgsrc == '' ? imgna : imgsrc">
          </div>
          <div class="head_name">头像姓名</div>
          <div class="head_id">ID:121212333</div>
      </div>
      
      <div class="content">
          <router-link :to="{path:'/my/identity/changename'}">
            <div class="tong one">
                <div>更改昵称</div>
                <div class="tong_img">
                    <img src="@/images/identity/icon.png">
                </div>
            </div>
          </router-link>
          <div class="tong two" @click="srcing">
              <div>更改头像</div>
              <div class="tong_img">
                  <img src="@/images/identity/icon.png">
              </div>
          </div>
          <router-link :to="{path:'/my/identity/changepass'}">
            <div class="tong three">
                <div>修改密码</div>
                <div class="tong_img">
                    <img src="@/images/identity/icon.png">
                </div>
            </div>
          </router-link>
          <router-link :to="{path:'/my/identity/identityId'}">
            <div class="tong four">
                <div>实名认证</div>
                <div class="tong_img">
                    <img src="@/images/identity/icon.png">
                </div>
            </div>
          </router-link>
          <button class="tui">退出登录</button>
      </div>
      <!-- 更改头像 -->
      <!-- 背景颜色 -->
      <div class="portraitOne" v-show="choice_src">
          
      </div>
      <!-- 内容 -->
      <div class="portraitTwo" v-show="choice_src">
          <div class="portraitTwo_pro">
              <div class="take">拍照</div>
              <div>从相册选择</div>
          </div>
          <div class="portraitTwo_pas" @click="srcimgs">
              取消
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
export default {
  name:'identity',
  data () {
    return {
        rem,
        choice_src:false,
        imgna:require('@/images/identity/head_portrait.png'),//默认图片地址
        imgsrc:'',//上传的图片的地址
    }
  },
  methods:{
    return_img(){
        this.$router.go(-1);//返回上一层
    },
    //切换图片
    srcing(){
        this.choice_src = true
    },
    srcimgs(){
        this.choice_src = false
    }
},
}

</script>
<style scoped>
*{
    padding:0px;
    margin:0px;
}

a {
  text-decoration: none;
  color:#000;
}
 
.router-link-active {
  text-decoration: none;
  color:#000;
}
.identity{
    position:absolute;
    top:0px;
    left:0px;
    font-size:0.5rem;
    z-index:99;
    width:100%;
}
.fixed{
    position:fixed;
    background:#F7F7F7;
    width:100%;
    height:100%;
    z-index: 1;
}
.person{
    height:1.5rem;
    background-color:#FFF;
    z-index:3;
    color:#000;
    line-height: 1.5rem;
    position: relative;;
    text-align: center;
}
.person_img{
    position: absolute;
    width:0.3rem;
    height:0.6rem;
    margin-top:0.1rem;
    margin-left:0.5rem;
}
.person_img img{
    width:100%;
    height:100%;
}
.head{
  height:6rem;
  background:#F7F7F7;
  position:relative;
  overflow: hidden;
  z-index: 2;
}
.portrait{
    width:2.5rem;
    height:2.5rem;
    position: absolute;
    left:50%;
    margin-left:-1.25rem;
    top:0.6rem;
    border-radius: 50%;
    overflow: hidden;
}
.portrait img{
    width:100%;
    height:100%;
}
.head_name{
    text-align: center;
    margin-top:3.2rem;
}
.head_id{
    text-align: center;
    margin-top:0.2rem;
}
.content{
    z-index: 2;
    position:absolute;
    width:100%;
}
.tong{
    width:100%;
    height:1.8rem;
    line-height: 1.8rem;
    background:#FFF;
    width:100%;
    box-sizing: border-box;
    border:1px solid #F7F7F7;
    display:flex;
    align-items: center
}
.tong div{
    padding: 0 0.3rem;
    
}
.tong_img{
    width:0.3rem;
    height:0.5rem;
    margin-left: auto;
    margin-right: 20px;
    margin-top:-1.2rem;
}
.tong_img img{
    width:100%;
    height:100%;
}
.four{
    margin-top:0.5rem;   
}
.tui{
    margin-top:0.5rem;
    color:red;
    text-align: center;
    height:1.8rem;
    line-height: 1.8rem;
    border:1px solid #FFF;
    background:#FFF;
    width:100%;
}
button{
    outline:none;
}
.portraitOne{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    z-index:100;
    top:0px;
}
.portraitTwo{
    position:fixed;
    width:100%;
    z-index:101;
    bottom:0rem;
    height:8rem;
    text-align: center;
}
.portraitTwo_pro{
    background:#FFF;
    color:#000;
    margin:0 0.5rem;
    border-radius: 0.5rem;
}
.portraitTwo_pro div{
    height:2rem;
    line-height: 2rem;
    font-weight: 800;
    font-size: 0.6rem;
}
.take{
    border-bottom: 1px solid #F7F7F7;
}
.portraitTwo_pas{
    height:2rem;
    line-height: 2rem;
    font-weight: 800;
    font-size: 0.6rem;
    background:#FFF;
    color:rgb(231, 9, 9);
    margin:0 0.5rem;
    border-radius: 0.5rem;
    margin-top:0.5rem;
}
</style>