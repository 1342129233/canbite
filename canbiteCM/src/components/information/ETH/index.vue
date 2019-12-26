<!-- 大额btc数据 -->
<template>
<div clsss="eth">
    <div class="contlist" ref="contlist_bscroll">
        ETH
        <ul>
            <li>{{ pullDownmsg }}</li>
            <li class="contlist_li" v-for="aider in informationTran.filter(aider=>aider.cur_id == informationsIndex)">
                <div class="contlist_dian"></div>
                <div>{{aider.time}}</div>
                <div>转账金额: {{aider.value}}</div>
                <div>转出地址: {{aider.adr_out}}</div>
                <div>转账金额: {{aider.adr_in}}</div>
            </li>
            <li>{{ pullUp }}</li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import rem from '@/components/js/rem.js';
import BScroll from "better-scroll"
export default {
  name:'eth',
  data () {
    return {
        rem,
        //状态货币
        informationsIndex:1,
        //内容
        informationTran:[],
        //下拉刷新状态
        pullDownmsg:'',
        //上拉状态
        pullUp:'',
        //页数
        indexzheng:1
    };
  },
  mounted() {
      axios.get('http://api.canbite.cn/api/market/adr_tran/page/1/cur/1')
      .then((res)=>{
        // this.informations = res.data.data.cur;
        this.informationTran = res.data.data.tran;
        this.$nextTick(()=>{
          let scroll = new BScroll(this.$refs.contlist_bscroll,{
            //允许里面有点击事件默认false(比如下拉更新)
            tap:true,
            //节流
            probeType:1
          });

          //下拉状态
          scroll.on('scroll',(pos)=>{
            
            if(pos.y > 20){
              
                this.pullDownmsg = '正在更新中...'
            }

            if(scroll.maxScrollY > pos.y + 30){
              this.pullUp = '正在加载中...'  //显示上拉提示组件
            }
            
          });

          
          scroll.on('touchEnd',(pos)=>{
            //下拉动作
            if(pos.y > 20){
                this.indexzheng++
                axios.get('http://api.xdorj.cn/api/market/adr_tran/page/1/cur/1').then((res)=>{
                    this.pullDownmsg = '更新成功'
                    setTimeout(()=>{
                      this.informationTran =  res.data.data.tran
                      console.log(this.informationTran)
                      this.pullDownmsg = ''
                    },1000)
                })
            }
            //上拉加载 总高度>下拉的高度+数值(20仅供参考) 触发加载更多
            if(scroll.maxScrollY > pos.y + 30){
                //使用refresh 方法 来更新scroll 解决无法滚动的问题
                if(true){    //判断是否有下一页
                    
                    this.indexzheng++
                    //调用接口处理数据
                    axios.get('http://api.xdorj.cn/api/market/adr_tran/page/' + this.indexzheng +'/cur/1')
                    .then((res)=>{
                        this.pullUp = '加载成功'
                        setTimeout(()=>{
                          this.informationTran =  this.informationTran.concat(res.data.data.tran)
                          console.log(this.informationTran)
                          this.pullUp = ''
                          scroll.refresh()  //刷新插件!!!!!这个挺重要的！别忘了。不然会一卡一卡
                        },1000)
                    })
                }
            }
          })
        })
      })
  },
}

</script>
<style scoped>
*{
    padding:0rem;
    margin:0rem;
}
ul li{
    margin:0px;
    margin:0px;
    list-style-type: none;
}
.contlist{  
    position:relative;
    z-index: 2;
    height:25.5rem;
    overflow: hidden;
    margin:6rem 1rem 3rem 1rem ; 
}

.contlist_li{
    padding:0.5rem 0 0.5rem 0.5rem;
    border-left:1px solid #F7F7F7;
    position:relative;
}
.contlist_li .contlist_dian{
    position:absolute;
    left:-0.2rem;
    top:0.8rem;
    width: 0.4rem;
    height: 0.4rem;
    background:green;
    border-radius: 50%;
}
.contlist_li div{
    height:1rem;
    line-height: 1rem;
    overflow: hidden;
}
</style>