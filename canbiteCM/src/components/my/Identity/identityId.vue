<!-- 身份证验证 -->
<template>
  <div class="identityId">
      <div class="fixed"></div>
      
        <div class="header">
            <div class="header_img">
                <img src="@/images/identity/return.png" @click="retuen_identityId">
            </div>
            <div>实名认证</div>
        </div>
      <div v-show="authentication_return">
        <div class="authentication">
            <div class="authentication_img">
                <img src="@/images/identity/authenticationOne.png">
            </div>
            <div class="nameOne">完成身份证验证,可核对真实身份</div>
            <div class="nameTwo">保证合法权益</div>
        </div>
        <div class="import">
            <div class="import_one">
                <input type="text" placeholder="请输入真实姓名" v-model="authentication_name">
            </div>
            <div class="import_one">
                <input type="text" placeholder="请输入身份证号" v-model="proof">
            </div> 
            <div class="import_two">
                <button @click="yanzhen">开始验证</button>
            </div>
        </div>
      </div>
      <div v-show="!authentication_return">
        <div class="authentication">
            <div class="authentication_img">
                <img src="@/images/identity/authenticationTwo.png">
            </div>
            <div class="nameOne wancheng">您已完成实名认证</div>
            <div class="nameTwo">专享更多安全保障，更多优惠权益</div>
        </div>
        <div class="import">
            <div class="import_two">
                <button @click="accomplish">完成</button>
            </div>
        </div>
      </div>
      <!-- 认证失败的样式 -->
      <div class="defeated" v-show="defeated_id">
          
      </div>
      <div class="defeated_id" v-show="defeated_id">
          <div class="defeated_head">
              认证失败
              <div class="defeated_img">
                  <img src="@/images/identity/evidenceTwo.png">
              </div>
          </div>
          <div class="defeated_text">
              您提供的身份证或姓名信息有误，请检查后重新认证
          </div>
          <div class="defeated_button">
              <button @click="defeated_id_none">确定</button>
          </div>
      </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js'
export default {
  name:'identityId',
  data () {
    return {
        rem,
        authentication_id:1,
        authentication_return:true,
        authentication_name:'',
        proof:'',
        defeated_id:false
    }
  },
  methods:{
      yanzhen(){
        //   this.authentication_return = false; 
        let reg =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if(this.authentication_name.length !== 0 && this.proof.length !== 0){
            if(!reg.test(this.proof)) {
                this.defeated_id = true
            }else{
                this.authentication_return = false; 
            }
        }else{
            this.defeated_id = true
        }
        
      },
      defeated_id_none(){
          this.defeated_id = false
      },
      retuen_identityId(){
          this.$router.go(-1);
      },
      accomplish(){
          this.$router.push({path: '/my/identity'});
      }
  }
}

</script>
<style scoped>
.identityId{
    font-size:0.5rem;
    position:absolute;
    z-index:99;
    width:100%;
    top:0rem;
}
.fixed{
    position:fixed;
    width:100%;
    height:100%;
    background:#F7F7F7;
    z-index:1;
}
.header{
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    background:#FFF;
    position: relative;;
    z-index:2;
    width:100%;
    overflow: hidden;
}
.header_img{
    position: absolute;
    width:0.3rem;
    height:0.6rem;
    margin-top:0.1rem;
    margin-left:0.5rem;
}
.header_img img{
    width:100%;
    height:100%;
}
.authentication{
    position:relative;
    z-index: 2;
    height:8rem;
    overflow: hidden;
}
.authentication_img{
  position:absolute;
  width:6.45rem;
  height:4.65rem;
  left:50%;
  margin-top:1rem;
  margin-left:-3.215rem;
  
}
.authentication img{
  width:100%;
  height:100%;
}
.nameOne{
  margin-top:6rem;
  text-align: center;
  height:1rem;
  line-height: 1rem;
}
.nameTwo{
  height:1rem;
  line-height: 1rem;
  text-align: center;
}
.import{
    position:absolute;
    z-index:2;
    margin-top:1.5rem;
    width:100%;
}
.import_one{
    width:100%;
    height:1.5rem;
}
.import_one input{
    width:96%;
    border:none;
    height:1.5rem;
    line-height: 1.5rem;
    padding:0 2%;
    outline:none;
}
.import_two{
    margin-top:1rem;
}
.import_two button{
    width:94%;
    height:1.5rem;
    border:1px solid #7777BB;
    background:#7777BB;
    color:#FFF;
    margin:0 3%;
    border-radius: 0.2rem;
    outline:none;
}
.wancheng{
    font-size:0.65rem;
    font-weight: 800;
}
.defeated{
    position:fixed;
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0.5);
    z-index:3;
    top:0rem;
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