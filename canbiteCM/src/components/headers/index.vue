<!--  -->
<template>
  <div class="header">
    <div class="left_img">
      <img src="@/images/logo.png">
    </div>
    <div class="laiyuan">
      <div class="number">www.canbite.cn</div>
    </div>
    <div class="right_img" @click="advise">
      <img src="@/images/books (2).png">
    </div>
    <div class="outer" v-show="show" @click="hideadvise">
      <div class="bg">
          <img src="@/images/flbg.png">
          <div class="inner" @click="zu">
            <div class="shang">
              <p>
              微信:
              </p>
              <input type="text" :style="{'marginLeft':'.1rem','outline':'none'}" class="vx" placeholder="请留下您的微信哟" ref="vx">
            </div>
            <div class="xia">
              <p>
              建议:
              </p>
              <textarea rows="" cols="" class="jianyi" placeholder="请输入您的建议" ref="jy"></textarea>
            </div>
            <div class="explain">
                <p class="p1">
                    声明
                </p>
                <img class="sm" src="@/images/sm.png" alt="">
                <p class="p2">
                  为了更好的给大家提供服务,我们将根据您提出的建议或需求对看比特做出修改,您的意见一经采纳,我们会有<img class="xhb" src="@/images/xhb.png">送上,所以记得留下VX哟~
                </p>
            </div>
            <div class="p3">
              <img src="@/images/zx.png" alt="">活动最终解释权归看比特所有<img src="@/images/zx.png" alt="">
            </div>
            <div class="tijiao" @click="tijiao">提交</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import rem from '@/components/js/rem.js';
import axios from 'axios';
export default {
  name:'',
  props:{
    warehouseImg:{
      type:String,
      default:'',
    }
  },
  data(){
    return{
      rem,
      show:false,
    }
  },
  methods:{
    advise(){
      this.show=true
    },
    hideadvise(){
      this.show=false
      this.$refs.vx.value=''
      this.$refs.jy.value=''
    },
    zu(e){
      e.stopPropagation();
    },
    tijiao(){
      if($('.jianyi').val().length<120&&$('.jianyi').val().length!=0){
          let param = new URLSearchParams();
              param.append('user_vx',this.$refs.vx.value);
              param.append('content',this.$refs.jy.value);
            this.$axios.post('http://api.canbite.cn/api/user/user_sug',param,{//post请求，在请求时会自动把param拼接再Param后面
                headers:{
                  'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'//必须要加头
              },
            }).then(function (data) {
              // console.log(data.data.data)
              }
            )
          this.$refs.vx.value=''
          this.$refs.jy.value=''
          this.show=false
          alert('您的意见我们已经收录，一经采纳我们将会主动联系您。')
        }else{
          alert('温馨提示!字数不能多于120个且不能为空。')
        }
    }
  }
}

</script>
<style scoped>
::-webkit-input-placeholder { 
  color: #a4a4a4;
  font-size: .55rem;
  letter-spacing: .01rem;
}
textarea::-webkit-input-placeholder {
  color: #a4a4a4;
  font-size: .55rem;
  font-weight: 550;
  letter-spacing: .01rem;
}
.outer{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.6);
  z-index: 9999;
  letter-spacing: 0.01rem;
}
.outer .bg{
  width: 15rem;
  position: fixed;
  top: 50%;
  left: .5rem;
  margin-top: -60%;
}
.outer .bg img{
  width: 100%;
}
.outer .bg .inner{
  width: 93.3%;
  height: 14.2rem;
  position: absolute;
  top: 70%;
  left: 50%;
  margin-top: -8.7rem;
  margin-left: -46.6%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;
}
.outer .inner .shang{
  width: 100%;
}
.outer .inner .shang p{
  float: left;
}
.outer .inner .shang .vx{
  width: 80%;
  height: 1rem;
  text-align: left;
  outline:none;
  border: none;
  box-sizing: border-box;
  font-size: 0.58rem;
  border-radius: none;
  border-bottom: 1px solid #a4a4a4;
  position: relative;
  top: -.1rem;
  left: .3rem;
}
.outer .inner .xia{
  width: 100%;
  margin-top: .6rem;
}
.outer .inner .xia p{
  float: left;
  width: 15%;
}
.outer .inner .xia .jianyi{
  width: 80%;
  height: 3.8rem;
  position: relative;
  top: .1rem;
  left: 0rem;
  border-top: 1px solid #a4a4a4;
}
.outer .inner .tijiao{
  width: 80%;
  height: 1.3rem;
  text-align: center;
  background: #f2443b;
  color: white;
  margin-left: 10%;
  margin-top: .8rem;
  line-height: 1.3rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.outer .inner .explain{
    width: 97%;
    height: 3rem;
    margin-top: .6rem;
    position: relative;
    color: #585858;
}
.outer .inner .explain .sm{
  width: 5%;
  position: absolute;
  left: 1.4rem;
  top: .1rem;
}
.outer .inner .explain .p1{
  width: 15%;
  height: 100%;
  float: left;
  color: black;
}
.outer .inner .explain .p2{
  width: 85%;
  float: left;
  font-size: .55rem;
  letter-spacing: .01rem;
  text-indent:.5rem;
  line-height: .8rem;
}
.outer .inner .explain .p2 .xhb{
  width: .7rem;
}
.outer .inner .p3{
  width: 93%;
  text-align: right;
  font-size: .55rem;
  color: #585858;

}
.outer .inner .p3 img:first-child{
  width: 1rem;
  height: .1rem;
  position: relative;
  top: -.1rem;
  left: -.2rem;
}
.outer .inner .p3 img:last-child{
  width: 1rem;
  height: .1rem;
  position: relative;
  top: -.1rem;
  right: -.2rem;
}
.header{
  position:fixed;
  height:2rem;
  display:flex;
  top:0px;
  left:0px;
  width:100%;
  background:#FFF;
  z-index: 999;
}
.left_img{
  width:1.6rem;
  height:1.345rem;
  /* margin:0.1rem 0.6rem; */
  left: .4rem;
  top: .2rem;
  position: relative;
}
.laiyuan{
  width:100%;
  height:1.5rem;
  line-height:2rem;
  font-size:0.7rem;
  text-align: center;
  color:green;
}
.left_img img{
  position:absolute;
  top:0px;
  width:100%;
  height:100%;
  
}
.right_img{
  right: .4rem;
  top: .2rem;
  width:1.6rem;
  height:1.345rem;
  position: relative;
  top: .2rem;
}
.right_img img{
  position:relative;
  width:100%;
  height:100%;
}
.number{
  color:#A9A9A9;
  display:inline-block;
  font-size:0.6rem;
}
.lai_img{
  width:1.2rem;
  height: 2rem;
  display:inline-block;
  vertical-align:text-top;
}
.lai_img img{
  width:100%;
  height:100%;
}
</style>