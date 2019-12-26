<template>
    <div class="body">
        <!-- <div class="box">
            <div v-for="i in 8" :class="['a'+i]">底色
                
            </div>
            <div v-if="zongshuju[0] != undefined" class="tu1" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">{{level1}}</div>-->
             <!--<div class="tu2" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">{{level2}}</div>
            <div class="tu3" ref="yu3" @touchstart="touchstart3" @touchmove="touchmove3" @touchend="touchend3">3</div>
            <div class="tu4" ref="yu4" @touchstart="touchstart4" @touchmove="touchmove4" @touchend="touchend4">4</div> -->
        <!-- </div>
        <div class="grid">
            <p class="every" v-for="(item, index) in arr" :key="item.id" @click="clickHandler(item)">{{item.value}}</p>
        </div> -->
        <div class="grid">
            <RightPart/>
        </div>
         <div class="box">
            <LeftPart/>
        </div>
    </div>
</template>

<script>
// import every from '@/components/my/monitoring/every.vue'
import RightPart from '@/components/my/monitoring/RightPart.vue';
    import LeftPart from '@/components/my/monitoring/LeftPart.vue';
    import draggable  from 'vuedraggable';
    export default {
        data(){
            return{
                arr:[
                    {'id':1,'value':1},
                    {'id':2,'value':2},
                    {'id':3,'value':3},
                    {'id':4,'value':4},
                    {'id':5,'value':5},
                    {'id':6,'value':6},
                    {'id':7,'value':7},
                    {'id':8,'value':8},
                ],
                zongshuju:[],
                startX1:0, 
                startY1:0,
                l1:document.documentElement.clientWidth*0.1,
                t1:document.documentElement.clientHeight*0.05,
                idx1:0,
                idy1:0,
                left1:document.documentElement.clientWidth*0.1,
                top1:document.documentElement.clientHeight*0.05,
                level1:1,
            }
        },
        components: {
            RightPart,
            LeftPart
        },
        methods:{
            touchstart1(event){
                var e = event||window.event;
              //获取到触碰开始的时候的可视区域的数据
               this.startX1 = e.touches[0].clientX;
               this.startY1 = e.touches[0].clientY;
            },
            touchmove1(event){
               var e = event||window.event;
             //将两个事件当中可视区域插值计算出来
               this.idx1 = e.touches[0].clientX - this.startX1;
               this.idy1 = e.touches[0].clientY - this.startY1 ;
               //将数据放映在div身上
               this.$refs.yu1.style.top = this.idy1+ this.t1+"px";
               this.$refs.yu1.style.left = this.idx1 + this.l1+"px";
            },
            touchend1(){
                this.l1+=this.idx1 
                this.t1+=this.idy1
            },
            clickHandler(i){
                var undefinedIdx = this.zongshuju.indexOf(undefined);
                if(undefinedIdx == -1){
                    if(this.zongshuju.length < 8){
                        this.zongshuju.push(i)
                        console.log(this.zongshuju)
                    }else{
                        alert('满了')
                    }
                }
            },
        }
    }
</script>

<style scoped>
        *{
            margin:0;
            padding: 0;
        }
        .body{
            width: 100%;
            height: 100%;
            background:black;
            position: fixed;
            top: 0;
            left: 0;
        }
        .body .box{
            width: 100%;
            height: 50%;
            background:pink;

        }
        .body .grid{
            width: 100%;
            height: 50%;
            background:blue;
            padding: 10%;
            box-sizing: border-box;
            
        }
        /* .body .grid .every{
            width: 15%;
            height: 10%;
            border: 1px solid red;
            float: left;
            margin-right: 5%;
            margin-bottom:5% ;
        }
        .body .box .a1{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 10%;
        }
        .body .box .a2{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 32%;
        }
        .body .box .a3{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 54%;
        }
        .body .box .a4{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 76%;
        }
        .body .box .a5{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 10%;
        }
        .body .box .a6{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 32%;
        }
        .body .box .a7{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 54%;
        }
        .body .box .a8{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 76%;
        }
        .tu1{
             width:15%;
             height: 10%;
             background:red;
             position: absolute;
             top: 5%;
             left: 10%;
        }
        .tu2{
             width:15%;
             height: 10%;
             background:blue;
             position: absolute;
             top: 5%;
             left: 32%;
        }
        .tu3{
             width:15%;
             height: 10%;
             background:orange;
             position: absolute;
             top: 5%;
             left: 54%;
        }
        .tu4{
             width:15%;
             height: 10%;
             background:purple;
             position: absolute;
             top: 5%;
             left: 76%;
        } */
</style>