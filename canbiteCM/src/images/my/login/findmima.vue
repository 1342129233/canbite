<template>
  <div class="findmima">
    <div class="header">
      <img src="@/images/my/login/logo.png" class="logo" />
      <img src="@/images/my/login/blaotie.com.png" class="blaotie" />
    </div>
    <div class="input">
      <div class="zhanghao">
        <img src="@/images/my/login/icon3.png" class="icon1" />
        <input type="text" placeholder="手机号" v-model="userName" />
        <img src="@/images/my/login/delet.png" @click="del1" v-if="userName!==''" />
      </div>
      <div class="idcode">
        <img src="@/images/my/login/icon4.png" class="icon1" />
        <input type="text" placeholder="验证码" v-model="code" />
        <img src="@/images/my/login/delet.png" @click="del2" v-if="code!==''" />
        <span v-show="sendAuthCode" :style="{'color':'#91BCE6'}"  @click="getAuthCode">获取验证码</span>
        <span v-show="!sendAuthCode">{{auth_time}}秒之后重新发送验证码</span>
      </div>
      <div class="mima">
        <img src="@/images/my/login/icon2.png" class="icon2" />
        <input type="password" placeholder="重置密码" v-model="password" v-if="mima==true"/>
        <input type="text" placeholder="重置密码" v-model="password" v-if="mima==false">
        <img src="@/images/my/login/codehide.png" class="eye" v-if="yan==true" @click="showyan"/>
        <img src="@/images/my/login/codeshow.png" class="eye" v-if="yan==false" @click="showyan">
        <img src="@/images/my/login/delet.png" @click="del3" class="shan" v-if="password!==''" />
      </div>
      <div class="tel">
        <img src="@/images/my/login/confirm.png" class="icon2" />
        <input type="password" placeholder="确认密码" v-model="tel" v-if="mima1==true"/>
        <input type="text" placeholder="确认密码" v-model="tel" v-if="mima1==false"/>
        <img src="@/images/my/login/codehide.png" class="eye" v-if="yan1==true" @click="showyan1"/>
        <img src="@/images/my/login/codeshow.png" class="eye" v-if="yan1==false" @click="showyan1">
        <img src="@/images/my/login/delet.png" @click="del4" class="shan" v-if="tel!==''" />
      </div>
      <div class="login">
        <img src="@/images/my/login/button.png" />
        <p @click="queding">确 定</p>
      </div>
      <div class="foot">
        <p class="p1" @click="newuser">新用户注册</p>
        <p class="p2" @click="denglu">登录</p>
      </div>
    </div>
    <!-- 认证成功失败的样式 -->
    <div class="defeated" v-show="authentication_return1">
        <div class="defeated_id">
            <div class="defeated_head">
                温馨提示
            </div>
            <div class="defeated_text">
                恭喜您,找回密码成功!
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
</template>

<script>
export default {
  components: {
  },
  props:['gg'],
  data() {
    return {
      userName: "",
      password: "",
      code: "",
      tel: "",
      Useragreement: false,
      Userinstructions: false,
      sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      auth_time: 0, /*倒计时 计数器*/
      mima:true,
      yan:true,
      mima1:true,
      yan1:true,
      defeated_id:'false',
      authentication_return1:false,
      authentication_return2:false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    newuser() {
      this.gg.findmima=true
      this.gg.findmima=false
    },
    denglu() {
      this.gg.login=true
      this.gg.findmima=false
    },
    // 下面四个控制协议的弹出层
    user1() {
      this.Useragreement = true;
    },
    guanbi1() {
      this.Useragreement = false;
    },
    user2() {
      this.Userinstructions = true;
    },
    guanbi2() {
      this.Userinstructions = false;
    },
    del1(){
      this.userName=''
    },
    del3(){
      this.password=''
    },
    del2(){
      this.code=''
    },
    del4(){
      this.tel=''
    },
    // 验证码的倒计时
    getAuthCode:function () {
      // 验证码
      let param = new URLSearchParams();
          param.append('phone',18618266094);
        this.$axios.post('http://api.xdorj.cn/api/user/code',param,{//post请求，在请求时会自动把param拼接再Param后面
            headers:{
              'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'//必须要加头
          },
        }).then(function (response) {
          console.log(response)}
        )
        // 倒计时
        this.sendAuthCode = false;
        this.auth_time = 100;
        var auth_timetimer =  setInterval(()=>{
            this.auth_time--;
            if(this.auth_time<=0){
                this.sendAuthCode = true;
                clearInterval(auth_timetimer);
            }
        }, 1000);
    },
    // 重置密码的控制
    showyan(){
      // 控制眼的显示
      this.yan=!this.yan
      // 控制密码的显示
      this.mima=!this.mima
    },
    // 确认密码的控制
    showyan1(){
      // 控制眼的显示
      this.yan1=!this.yan1
      // 控制密码的显示
      this.mima1=!this.mima1
    },
    queding(){
        if(this.userName !== '' && this.password !== ''){
            if( this.password ==1) {
                this.authentication_return1 = true
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
  created() {},
  mounted() {}
};
</script>
<style scoped>
.agreement {
  width: 100%;
  height: 50rem;  
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.agreement .inner {
  width: 93%;
  height: 12.6rem;
  margin-left: 3.5%;
  margin-top: 2.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50%;
  margin-left: -47.5%;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.agreement .inner img {
  width: 100%;
  height: 2rem;
}
.agreement .inner p.xieyi {
  width: 100%;
  height: 2rem;
  text-align: center;
  position: relative;
  top: -2rem;
  font-size: 0.65rem;
  color: white;
  line-height: 2rem;
  margin: 0;
}
.agreement .wenzi {
  width: 100%;
  height: 8rem;
  background: white;
  padding: 0 1.2rem;
  box-sizing: border-box;
  font-size: 0.53rem;
  position: relative;
  top: -2.2rem;
  overflow: auto;
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
.agreement .zhidaole {
  width: 100%;
  height: 2rem;
  background: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 0.65rem;
  line-height: 2rem;
  border-top: 1px solid #e3e3e3;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  color: blue;
}
.findmima {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 999;
  overflow: auto;
}
.findmima .header {
  width: 93%;
  height: 2rem;
  margin-left: 3.5%;
  margin-top: 5rem;
}
.findmima .header .logo {
  width: 2rem;
}
.findmima .header .blaotie {
  width: 4rem;
  position: relative;
  top: -0.35rem;
}
.findmima .input {
  width: 93%;
  height: 12rem;
  margin-left: 3.5%;
  margin-top: 2.3rem;
}
/* 懒得布局了，这就是手机号 */
.findmima .input .zhanghao {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.findmima .input .zhanghao .icon1,
img {
  width: 0.6rem;
  position: relative;
  top: 0.06rem;
}
.findmima .input .zhanghao input {
  width: 85%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
/* 懒得布局了，这就是验证码 */
.findmima .input .idcode {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.3rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.findmima .input .idcode .icon1,
img {
  width: 0.6rem;
  position: relative;
  top: 0.08rem;
  left: .1rem
}
.findmima .input .idcode input {
  width: 45%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.findmima .input .idcode span{
  float: right;
}
/* 懒得布局了，这就是重置密码 */
.findmima .input .mima {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.3rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.findmima .input .mima .icon2,
img {
  width: 0.6rem;
  position: relative;
  top: 0.06rem;
}
.findmima .input .mima input {
  width: 80%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.findmima .input .mima .eye{
    width: .8rem;
    float: right;
    position: relative;
    top: .2rem;
}
.findmima .input .mima .shan{
    float: right;
    position: relative;
    top: .1rem;
    left :-.15rem;
}
/* 懒得布局了，这就是确认密码 */
.findmima .input .tel {
  width: 100%;
  height: 1.2rem;
  margin-top: 1.2rem;
  border-bottom: 1px solid #e3e3e3;
  color: #8c8c8c;
}
.findmima .input .tel .icon2,
img {
  width: 0.6rem;
  position: relative;
  top: 0.1rem;
}
.findmima .input .tel input {
  width: 80%;
  height: 1rem;
  text-align: left;
  border: 0;
  box-sizing: border-box;
  margin-left: 0.5rem;
  font-size: 0.58rem;
  outline:none;
}
.findmima .input .tel .eye{
    width: .8rem;
    float: right;
    position: relative;
    top: .2rem;
}
.findmima .input .tel .shan{
    float: right;
    position: relative;
    top: .1rem;
    left :-.15rem;
}
.findmima .input .login {
  width: 100%;
  height: 1.6rem;
  margin-top: 0.9rem;
  font-size: 0.48rem;
}
.findmima .input .login img {
  width: 100%;
}
.findmima .input .login p {
  width: 100%;
  height: 1.6rem;
  text-align: center;
  line-height: 1rem;
  position: relative;
  top: -2rem;
  font-size: 0.65rem;
  color: white;
  line-height: 2.3rem;
  margin: 0;
}
.findmima .input .foot {
  width: 100%;
  height: 1.6rem;
  font-size: 0.48rem;
  line-height: 0.1rem;
  margin-top: .3rem;
}
.findmima .input .foot .p1 {
  float: left;
}
.findmima .input .foot .p2 {
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