<!-- 资讯 -->
<template>
<div>
    <div class="ding">
        <div class="zixun_point">
            <div class="fenColor">
                <div class="fenColor_img">
                    <img src="@/images/icon.png">
                </div>
                <div>分析师观点来自网络，不代表本站观点</div>
            </div>
        </div>
        <div class="zixun_head">
            <div class="zixun_head_time">
                <div class="zixun_times">{{thmese}}</div>
            </div>
            <div class="zixun_header">
                <div class="zixun_one">
                    <div class="zixun_header_img">
                        <img src="@/images/logo/logo1.png">
                    </div>
                </div>
                <div class="zixun_two">
                    <div class="zixun_two_lod">
                        <div class="zixun_more">
                            <div class="zixun_rest_img">
                                <img src="@/images/zixun/zixun02.png">
                            </div>
                            <div class="zixun_rest_setm">多&nbsp;:<span>{{newsSideer[0].two}}</span></div>
                        </div>

                        <div class="zixun_rest">
                            <div class="zixun_rest_img">
                                <img src="@/images/zixun/zixun03.png">
                            </div>
                            <div class="zixun_rest_setm">空&nbsp;:<span>{{newsSideer[1].two}}</span></div>
                        </div>

                        <div class="zixun_rest">
                            <div class="zixun_rest_img">
                                <img src="@/images/zixun/zixun01.png">
                            </div>
                            <div class="zixun_rest_setm">其他&nbsp;:<span>{{newsSideer[2].two + newsSideer[3].two}}</span></div>
                        </div>

                        
                    </div>
                    <div class="zixun_lod">
                      <div class="zixun_lod_first" :style="{'width': first+'%'}"></div>
                      <div class="zixun_lod_second" :style="{'width': second+'%','left' : first+'%'}"></div>
                      <div class="zixun_lod_thirdly" :style="{'width': thirdly+'%','left' : fourth+'%'}"></div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="zixun_content" v-if="dataContent">
            <div class="block">
                <el-timeline v-for="item in dataContent">
                    <el-timeline-item :timestamp="item.titleser | up" placement="top">
                    <el-card>
                        <p class="quan_t">
                            {{item.title }}
                            <span class="heng" style="background:#52D091" v-if="item.side == 1">{{item.side | newsSide}}</span>
                            <span class="heng" style="background:#f95f56" v-if="item.side == 2">{{item.side | newsSide}}</span>
                            <span class="heng" style="background:#969696" v-if="item.side == 3">{{item.side | newsSide}}</span>
                            <span class="heng" style="background:#969696;width:1.4rem;" v-if="item.side == 4">{{item.side | newsSide}}</span>
                        </p>
                        <p class="quan_p quan_ziti">{{item.content}}</p>
                    </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
        <div v-else class="loading">
            <Loading />
        </div>
    </div>
    <!-- <div class="bei"></div> -->
</div>
</template>

<script>
import rem from '@/components/js/rem.js';
import Loading from "@/components/loading/index.vue";
import axios from 'axios'
export default {
  name:'zixun',
  props:['val'],
  data () {
    return {
        rem, 
        thmese:'',
        dataContent:[],
        newsSideer:[
            {
                one:1,
                two:0
            },
            {
                one:2,
                two:0
            },
            {
                one:3,
                two:0
            },
            {
                one:4,
                two:0
            }
        ],
        first:'',
        second:'',
        thirdly:'',
        fourth:'',
    };
  },
  components:{
    Loading
  },
  created(){
      this.init()
  },
  //过滤器
  filters:{
      up(value){
          let myDate = new Date();
          let tYear = myDate.getFullYear();
          let a = value.replace("T", " ");
          let b = a.replace("-"," ");
          let c = b.replace(tYear," ")
          let e = c.replace(":00"," ")
          return e
         
      },
      jian(value){
          let number = value/10
          return number
      },
      newsSide(value){
          if(value == 1){
              let a = "多"
              return a
          }else if(value == 2){
              let b = "空"
              return b
          }else if(value == 3){
              let c = "横"
              return c
          }
          else if(value == 4){
              let d = "其他"
              return d
          }
      }
  },
  methods:{
      init(){
        let myDate = new Date();
        let tYear = myDate.getFullYear();
        this.thmese = tYear
        axios({
          url:this.FACTURL + '/api/market/get_news',
          method:'get'
        })
        // axios.get('http://api.canbite.cn/api/market/get_news')
            .then((res) => {

                this.dataContent.length = 0
this.newsSideer =[
            {
                one:1,
                two:0
            },
            {
                one:2,
                two:0
            },
            {
                one:3,
                two:0
            },
            {
                one:4,
                two:0
            }
        ]

        
            //比例
            let bili = res.data.data.sides;
            
            for(let i = 0;i < bili.length ;i++){

                if(bili[i][0] == this.newsSideer[0].one){

                    this.newsSideer[0].two = bili[i][1]

                }else if(bili[i][0] == this.newsSideer[1].one){

                    this.newsSideer[1].two = bili[i][1]

                }else if(bili[i][0] == this.newsSideer[2].one){

                    this.newsSideer[2].two = bili[i][1]

                } else if(bili[i][0] == this.newsSideer[3].one){

                    this.newsSideer[3].two = bili[i][1]

                }
            }
            
            //计算
            let he = this.newsSideer[0].two + this.newsSideer[1].two + this.newsSideer[2].two + this.newsSideer[3].two;
            let first = (this.newsSideer[0].two / he ) * 100;
            let second = (this.newsSideer[1].two / he ) * 100;
            let thirdly = ((this.newsSideer[2].two + this.newsSideer[3].two) / he ) * 100;
            this.first = first
            this.second = second
            this.thirdly = thirdly
            this.fourth = first + second
            //多1，空2，横3，其他4
            //   console.log(first,second,thirdly)
            //循环数据
            let zhanshi = res.data.data.news;
            for(let i = 0;i < zhanshi.length;i++){
                
                let lang = {
                    number:zhanshi[i][0],
                    title:zhanshi[i][1],
                    content:zhanshi[i][2],
                    titleser:zhanshi[i][3],
                    side:zhanshi[i][4],
                    weibo:zhanshi[i][5]
                }
                this.dataContent.push(lang)
            }
            //   console.log(this.dataContent)
            //   console.log(res.data.data.sides)
            })
        }
  },
  activated(){
      this.init()
    //   console.log("请求数据")
  },
  mounted(){
      
  },
}

</script>
<style scoped>
.quan_t{
    text-align: left;
    font-weight: bold;
    position:relative;
    left:-0.15rem;
    color:#333333;
    font-size:0.7rem;
    margin-bottom: 0.2rem;
}
.quan_p{  
    text-align: justify;
}
.quan_p{
    letter-spacing:0rem;
}
.quan_ziti{
    font-size:0.6rem;
    line-height: 0.9rem;
    color:#575757;
}
.heng{
    width:0.9rem;
    height:0.7rem;
    line-height: 0.7rem;
    display: inline-block;
    color:#FFF;
    font-size:0.4rem;
    border-radius: 2px;
    text-align:center;
    vertical-align:text-top;
    margin-top:0.2rem;
}
.ding{
    width: 100%;
    /* position:absolute; 
    z-index:9; */
    background:#F7F7F7;
}
.zixun_point{
    height:1.5rem;
    line-height: 1.5rem;
    background: #F0F0F0;
    font-size:0.5rem;
    text-align: center;
}
.fenColor{
    color:#6F6F6F;
}
.fenColor div{
    display:inline-block;
}
.fenColor_img{
    width:1.1em;
    height:1.1rem;
    vertical-align:middle;
    margin-right:0.5rem;
}
.fenColor_img img{
    width:100%;
    height:100%;
}
.zixun_head{
    margin:0 0.5rem;
    border:1px solid #F7F7F7;
    padding: 0rem 0.4rem 0.4rem 0.4rem;
    margin-top:0.5rem;
    border-radius: 0.3rem;
    background:#FFF;
}
.zixun_head_time{
    line-height: 1rem;
    height:1.5rem;
}
.zixun_times{
    width:2rem;
    height:1rem;
    background:#507CC1;
    color:#FFF;
    text-align: center;
    border-radius: 0.3rem 0 0.3rem 0rem;
}
.zixun_header{
    display:flex;
}
.zixun_header .zixun_one{
    width:20%;
    padding-left:0.5rem;
}
.zixun_header_img{
    width:1.5rem;
    height:1.5rem;
}
.zixun_header_img img{
    width:100%;
    height:100%;
}

.zixun_two{
   width: 80%; 
}
.zixun_two_lod{
    display: flex;
}
.zixun_rest{
    display:flex;
    margin-left:10%;
    color:#969696;
}
.zixun_rest_img{
    width:0.6rem;
    height:0.85rem;
}
.zixun_rest_img img{
    width:100%;
    height:100%;
}
.zixun_rest_setm{
    line-height: 1rem;
    margin-left:0.2rem;
}
.zixun_rest_setm span{
    margin:0 0.2rem;
}
.zixun_more{
    display:flex;
    color:#52D091;
    margin-left:0.2rem;
}
.zixun_lod{
    width: 100%;
    height: 0.4rem;
    border: 0px;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    background:#F7F7F7;
    position: relative;
    overflow: hidden;
}
.zixun_lod_first{
    height: 0.4rem;
    border: 0px;
    top:0px;
    background:#52D091;
    position:absolute;
}
.zixun_lod_second{
    height: 0.4rem;
    border: 0px;
    top:0px;
    background:#f95f56;
    position:absolute;
}
.zixun_lod_thirdly{
    height: 0.4rem;
    border: 0px;
    top:0px;
    background:#F7F7F7;
    position:absolute;
}
.zixun_content{
    margin:0.5rem 0.5rem 0 0.5rem;
    border:1px solid #F7F7F7;
    padding: 0rem 0.5rem 0rem 0rem;
    overflow-x: hidden;
    overflow-y: scroll; 
    background:#FFF;
}
.block{
    margin:1rem 0.5rem 1rem 0.5rem;
    
}
/* .bei{
    position:fixed;
    width:100%;
    height:100%;
    background:#F7F7F7;
    z-index:8;
} */
/* .block ul{
    overflow-y: scroll;
} */
/deep/ .zixun_content>.block>.el-timeline>.el-timeline-item>.el-timeline-item__node{
    background-color: #4B62FC!important;;
}
/deep/ .el-timeline-item__tail{
    border-left: 2px solid #4B62FC!important;
}
/deep/ .el-timeline .el-timeline-item:last-child .el-timeline-item__tail{
    display:block!important;
}
/deep/ .el-timeline-item__timestamp{
    color:#969696;
} 
/* /deep/ .el-timeline-item__node--normal{
    width:15px;
    height:15px;
    left:-3px;
} */

/* loading */
.loading{
  position:fixed;
  top:40%;
  margin-top:-50px;
  width: 100px;
  left:50%;
  margin-left:-60px;
  height: 120px;
}
</style>