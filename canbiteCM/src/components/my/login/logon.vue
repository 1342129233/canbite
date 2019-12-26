<template>
  <div class="log">
      <!-- logo -->
      <div class="logo">
          <img src="@/images/my/login/logo.png" alt="">
      </div>
      <!-- 标题 -->
      <div class="blaotie">
          <img src="@/images/my/login/blaotie.com.png" alt="">
      </div>
      <div class="input">
          <!-- 账号 -->
          <div class="zhanghao">
            <img src="@/images/my/login/icon1.png" alt="" class="icon1">
            <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="账号/手机号" v-model="userName">
            <img src="@/images/my/login/delet.png" alt="" @click="del1" class="shan" v-if="userName!==''">
          </div>
          <!-- 密码 -->
          <div class="mima">
            <img src="@/images/my/login/icon2.png" alt="" class="icon2">
            <input type="password" placeholder="密码" v-model="password" v-if="mima==true">
            <input type="text" placeholder="密码" v-model="password" v-if="mima==false">
            <img src="@/images/my/login/codehide.png" alt="" class="eye" v-if="yan==true" @click="showyan"/>
            <img src="@/images/my/login/codeshow.png" alt="" class="eye" v-if="yan==false" @click="showyan">
            <img src="@/images/my/login/delet.png" alt="" @click="del2" class="shan" v-if="password!==''">
          </div>
          <!-- 记住密码 -->
          <div class="remembermima" @click="remember">
            <img src="@/images/my/login/unselected.png" v-if="show==true">
            <img src="@/images/my/login/selected.png" v-if="show==false"> &nbsp;记住密码
          </div>
          <div class="login">
            <img src="@/images/my/login/button.png" alt="">
            <p @click="denglu">登 录</p>
          </div>
            <!-- <router-view></router-view> -->
          <div class="foot">
                <p class="p1" @click="find">
                    找回密码
                </p>
              <p class="p2" @click="newuser">
                  新用户
                </p>
          </div>
          <!-- 认证成功失败的样式 -->
            <div class="defeated" v-show="authentication_return1">
                <div class="defeated_id">
                    <div class="defeated_head">
                        温馨提示
                    </div>
                    <div class="defeated_text">
                        恭喜您,登录成功!
                    </div>
                    <div class="defeated_button">
                        <button @click="defeated_id_none">确定</button>
                    </div>
                </div>
            </div>
            <div class="defeated" v-if="authentication_return2">
                <div class="defeated_id">
                    <div class="defeated_head">
                        温馨提示
                    </div>
                    <div class="defeated_text">
                        您提供的账号或密码信息有误，请检查后重新认证
                    </div>
                    <div class="defeated_button">
                        <button @click="defeated_id_none1">确定</button>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components:{
  },
  props:['gg'],
  data(){
    return {
        // 控制记住密码
        show:true,
        userName:'',
        password:'',
        //这两控制眼睛和隐藏显示
        mima:true,
        yan:true,
        defeated_id:'false',
        authentication_return1:false,
        authentication_return2:false,
    }
  },
  watch:{},
  computed:{
  },
  methods:{
      remember(){
          this.show=!this.show
      },
      del1(){
          this.userName=''
      },
      del2(){
          this.password=''
      },
    //到新用户页面登录页面隐藏
      newuser(){
          this.gg.register=true
          this.gg.login=false
      },
    //到找回密码页面登录页面隐藏
      find(){
          this.gg.findmima=true
          this.gg.login=false
      },
      showyan(){
          this.yan=!this.yan
          this.mima=!this.mima
      },
      denglu(){
        if(this.userName !== '' && this.password !== ''){
            if( this.password == '123123') {
                this.authentication_return1 = true
                this.$router.push({path:'/my'})
                this.$store.commit('dengluTstate');

                //存浏览器
                sessionStorage.setItem('loginT', 1);
            }else{
                this.authentication_return2 = true; 
            }
        }else{
            this.authentication_return2=true
        }
      },
    defeated_id_none(){
    this.authentication_return1 = false
    },
    defeated_id_none1(){
    this.authentication_return2 = false
    }
  },
  mounted(){}
}
</script>
<style scoped>
    .log{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 99;
        overflow: auto;
    }
    .log .logo{
        width: 100%;
        height: 4rem;
        text-align: center;
        margin-top:2rem;
    }
    .log .logo img{
        width: 3.5rem;
        height: 3.5rem;
    }
    .log .blaotie{
        width: 100%;
        height:1rem;
        text-align: center;
    }
    .log .blaotie img{
        width: 5.6rem;
    }
    .log .input{
        width: 93%;
        height: 5rem;
        margin-left: 3.5%;
        margin-top: 2rem;
    }
    .log .input .zhanghao{
        width: 100%;
        height: 1.2rem;
        border-bottom: 1px solid #E3E3E3;
        color: #8C8C8C;
    }
    .log .input .zhanghao .icon1,img{
        width: .6rem;
        position: relative;
        top: 0.05rem;
    }
    .log .input .zhanghao input{
        width:85%;
        height: 1rem;
        text-align: left;
        border:0;
        box-sizing: border-box;
        margin-left: .5rem;
        font-size: .58rem;
        outline:none;
    }
   .log .input .zhanghao .shan{
       float: right;
       position: relative;
       top: .1rem;
   }
    .log .input .mima{
        width: 100%;
        height: 1.2rem;
        margin-top: 1.2rem;
        border-bottom: 1px solid #E3E3E3;
        color: #8C8C8C;
    }
    .log .input .mima .icon2,img{
        width: .6rem;
        position: relative;
        top: .05rem;
    }
    .log .input .mima input{
        width:80%;
        height:1rem;
        text-align: left;
        border:0;
        box-sizing: border-box;
        margin-left: .5rem;
        font-size: .58rem;
        outline:none;
    }
   .log .input .mima .eye{
       width: .8rem;
       float: right;
       position: relative;
       top: .2rem;
   }
   .log .input .mima .shan{
       float: right;
       position: relative;
       top: .1rem;
       left :-.15rem;
   }
    .log .input .remembermima{
        width: 100%;
        height: 1rem;
        margin-top: .6rem;
        font-size: .48rem;
    }
    .log .input .remembermima img{
        width: .5rem;
        position: relative;
        top: .05rem
    }
    .log .input .login{
        width: 100%;
        height: 1.6rem;
        margin-top: .6rem;
        font-size: .48rem;
    }
    .log .input .login img{
        width: 100%;
    }
    .log .input .login p{
        width: 100%;
        height: 1.6rem;
        text-align: center;
        line-height: 1rem;
        position: relative;
        top: -2rem;
        font-size: .65rem;
        color: white;
    }
    .log .input .foot{
        width: 100%;
        height: 1.6rem;
        margin-top: .3rem;
        font-size: .48rem;
    }
    .log .input .foot .p1{
        float: left;
    }
    .log .input .foot .p2{
        float: right;
    }
    .defeated{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    z-index:3;
    top:0rem;
    left:0;
}
.defeated_id{
    width:14rem;
    height:7rem;
    background:#FFF;
    top:50%;
    margin-top:-3.5rem;
    left:50%;
    margin-left:-7rem;
    z-index:4;
    border-radius: 0.4rem;
    position:fixed;
}
.defeated_head{
    font-size:0.8rem;
    font-weight: 800;
    text-align: center;
    height:2rem;
    line-height: 2rem;
    letter-spacing:0.15rem;
    position:relative;
}
.defeated_img{
    position:absolute;
    top:0.2rem;
    left:65%;
    width:0.8rem;
    height:0.8rem;
}
.defeated_img img{
    width:100%;
    height:100%;
}
.defeated_text{
    color:#000;
    text-align: center;
    font-size:0.6rem;
    padding:0rem 1.5rem;
    letter-spacing:0.1rem;
    line-height: 1.2rem;
}
.defeated_button{
    position:relative;
}
.defeated_button button{
    position:absolute;
    left:50%;
    top:0.5rem;
    margin-left:-1.5rem;
    width:3rem;
    height:1rem;
    background:#7777BB;
    outline:none;
    border:1px solid #7777BB;
    color:#FFF;
    letter-spacing:0.1rem;
}
</style>