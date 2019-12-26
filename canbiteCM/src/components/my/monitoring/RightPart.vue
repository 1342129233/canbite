<template>
    <div class="right_part_box">
        <!-- {{blueArr}} -->
                <div v-for="i in 8" :class="['grid','a'+i]"></div>
                <!-- 第一格 -->
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='1'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/one.png"/>
                    
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='2'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/two.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='3'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/three.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='4'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/four.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='5'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/five.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='6'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/six.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='7'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/seven.png"/>
                </div>
                <div v-if="blueArr[0] != undefined&&blueArr[0].v=='8'" :class="['yu1']" ref="yu1" @touchstart="touchstart1" @touchmove="touchmove1" @touchend="touchend1">
                    <img src="@/images/game/eight.png"/>
                </div>
                <!-- 第二格 -->
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='1'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/one.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='2'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/two.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='3'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/three.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='4'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/four.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='5'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/five.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='6'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/six.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='7'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/seven.png"/>
                </div>
                <div v-if="blueArr[1] != undefined&&blueArr[1].v=='8'" :class="['yu2']" ref="yu2" @touchstart="touchstart2" @touchmove="touchmove2" @touchend="touchend2">
                    <img src="@/images/game/eight.png"/>
                </div>
    </div>
</template>

<script>
    export default {
        created(){
            this.$bus.$on('additem', (v) => {
                // console.log(v);
                // 寻找第一个undefined出现的位置
                    addItem(this.blueArr, v);
            });
            var self = this;
            // 给数组第一个出现undefined的位置加上v
            function addItem(arr, v){
                var undefinedIdx = arr.indexOf(undefined);
                
                if(undefinedIdx == -1){
                    if(arr.length < 16){
                        arr.push(v);
                        self.theLastItem = v;
                    }
                }else{
                    // 有undefined
                    self.$set(arr, undefinedIdx, v);
                    self.theLastItem = v;
                }
            }
        },
        data(){
            return {
                // 你目前为止最后装进去的元素
                theLastItem: null,
                blueArr: [
                    {'id':1,'v':1},
                    {'id':1,'v':1},
                ],
                startX1:0, 
                startY1:0,
                l1:document.documentElement.clientWidth*0.1,
                t1:document.documentElement.clientHeight*0.05,
                idx1:0,
                idy1:0,
                left1:document.documentElement.clientWidth*0.1,
                top1:document.documentElement.clientHeight*0.05,

                startX2:0, 
                startY2:0,
                l2:document.documentElement.clientWidth*0.32,
                t2:document.documentElement.clientHeight*0.05,
                idx2:0,
                idy2:0,
                left2:document.documentElement.clientWidth*0.32,
                top2:document.documentElement.clientHeight*0.05,

            };
        },
        methods: {
            delItem(color, idx){
                    this.blueArr = this.blueArr.map((item,index) => index === idx ? undefined : item);
            },
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
               console.log(this.$refs.yu1.style.left )
            },
            touchend1(){
                this.l1+=this.idx1 
                this.t1+=this.idy1

                // 第一格挪
                if(this.left1==document.documentElement.clientWidth*0.1&&this.top1==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left1=document.documentElement.clientWidth*0.32
                            this.top1=document.documentElement.clientHeight*0.05
                        }else{
                            if(this.blueArr[0].v==this.blueArr[1].v){
                                this.blueArr[1].v+=1
                                this.blueArr[0]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left1=document.documentElement.clientWidth*0.54
                            this.top1=document.documentElement.clientHeight*0.05
                        }else{
                            
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left1=document.documentElement.clientWidth*0.76
                            this.top1=document.documentElement.clientHeight*0.05
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left1=document.documentElement.clientWidth*0.1
                            this.top1=document.documentElement.clientHeight*0.2
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left1=document.documentElement.clientWidth*0.32
                            this.top1=document.documentElement.clientHeight*0.2
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left1=document.documentElement.clientWidth*0.54
                            this.top1=document.documentElement.clientHeight*0.2
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        }
                    }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left1=document.documentElement.clientWidth*0.76
                            this.top1=document.documentElement.clientHeight*0.2
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        }
                    }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l1=document.documentElement.clientWidth*0.1
                        this.t1=document.documentElement.clientHeight*0.05
                    }
                }
                // 第二格挪
                if(this.left1==document.documentElement.clientWidth*0.32&&this.top1==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                // this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[1]
                                this.blueArr[1]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                            this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left1=document.documentElement.clientWidth*0.32
                            this.top1=document.documentElement.clientHeight*0.05
                            this.l1=document.documentElement.clientWidth*0.32
                            this.t1=document.documentElement.clientHeight*0.05
                    }
                }
                // 第三格挪
                if(this.left1==document.documentElement.clientWidth*0.54&&this.top1==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[2]
                                this.blueArr[2]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l1=document.documentElement.clientWidth*0.54
                        this.t1=document.documentElement.clientHeight*0.05
                    }
                }
                // 第四格挪
                if(this.left1==document.documentElement.clientWidth*0.76&&this.top1==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[3]
                                this.blueArr[3]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l1=document.documentElement.clientWidth*0.76
                        this.t1=document.documentElement.clientHeight*0.05
                    }
                }  
                // 第五格挪
                if(this.left1==document.documentElement.clientWidth*0.1&this.top1==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[4]
                                this.blueArr[4]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l1=document.documentElement.clientWidth*0.1
                        this.t1=document.documentElement.clientHeight*0.2
                    }
                }   
                //第六格挪
                if(this.left1==document.documentElement.clientWidth*0.32&this.top1==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[5]
                                this.blueArr[5]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l1=document.documentElement.clientWidth*0.32
                        this.t1=document.documentElement.clientHeight*0.2
                    }
                }
                //第七格挪
                if(this.left1==document.documentElement.clientWidth*0.54&this.top1==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[7]==undefined){
                                this.blueArr[7]=this.blueArr[6]
                                this.blueArr[6]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l1=document.documentElement.clientWidth*0.54
                        this.t1=document.documentElement.clientHeight*0.2
                    }
                }
                //第八格挪
                if(this.left1==document.documentElement.clientWidth*0.76&this.top1==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[0]==undefined){
                                this.blueArr[0]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[1]==undefined){
                                this.blueArr[1]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[2]==undefined){
                                this.blueArr[2]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[3]==undefined){
                                this.blueArr[3]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left1=document.documentElement.clientWidth*0.76
                                this.top1=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.05+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[4]==undefined){
                                this.blueArr[4]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.1
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[5]==undefined){
                                this.blueArr[5]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.32
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else if(parseFloat(this.$refs.yu1.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu1.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                        parseFloat(this.$refs.yu1.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu1.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                        ){
                            if(this.blueArr[6]==undefined){
                                this.blueArr[6]=this.blueArr[7]
                                this.blueArr[7]=undefined
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                                this.left1=document.documentElement.clientWidth*0.54
                                this.top1=document.documentElement.clientHeight*0.2
                            }else{
                                this.$refs.yu1.style.left=document.documentElement.clientWidth*0.54+'px'
                                this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                            }
                        }else{
                        this.$refs.yu1.style.left=document.documentElement.clientWidth*0.76+'px'
                        this.$refs.yu1.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l1=document.documentElement.clientWidth*0.76
                        this.t1=document.documentElement.clientHeight*0.2
                    }
                }
            },

            touchstart2(event){
                var e = event||window.event;
              //获取到触碰开始的时候的可视区域的数据
               this.startX2 = e.touches[0].clientX;
               this.startY2 = e.touches[0].clientY;
            },
            touchmove2(event){
               var e = event||window.event;
             //将两个事件当中可视区域插值计算出来
               this.idx2 = e.touches[0].clientX - this.startX2;
               this.idy2 = e.touches[0].clientY - this.startY2 ;
               //将数据放映在div身上
               this.$refs.yu2.style.top = this.idy2+ this.t2+"px";
               this.$refs.yu2.style.left = this.idx2 + this.l2+"px";
            },
            touchend2(){
                this.l2+=this.idx2 
                this.t2+=this.idy2
                // 二
                if(this.left2==document.documentElement.clientWidth*0.32&&this.top2==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                            if(this.blueArr[0].v==this.blueArr[1].v){
                                this.blueArr[0].v+=1
                                this.blueArr[1]=undefined
                                this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                                this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left2=document.documentElement.clientWidth*0.1
                                this.top2=document.documentElement.clientHeight*0.05
                            }else{
                                this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                                this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                                this.left2=document.documentElement.clientWidth*0.32
                                this.top2=document.documentElement.clientHeight*0.05
                            }
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[1]
                            this.blueArr[1]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l2=document.documentElement.clientWidth*0.32
                        this.t2=document.documentElement.clientHeight*0.05
                    }
                }
                // 一
                if(this.left2==document.documentElement.clientWidth*0.1&&this.top2==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[0]
                            this.blueArr[0]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l2=document.documentElement.clientWidth*0.1
                        this.t2=document.documentElement.clientHeight*0.05
                    }
                }
                // 三
                if(this.left2==document.documentElement.clientWidth*0.54&&this.top2==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[2]
                            this.blueArr[2]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l2=document.documentElement.clientWidth*0.54
                        this.t2=document.documentElement.clientHeight*0.05
                    }
                }
                // 四
                if(this.left2==document.documentElement.clientWidth*0.76&&this.top2==document.documentElement.clientHeight*0.05){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[3]
                            this.blueArr[3]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                        this.l2=document.documentElement.clientWidth*0.76
                        this.t2=document.documentElement.clientHeight*0.05
                    }
                }
                // 五
                if(this.left2==document.documentElement.clientWidth*0.1&&this.top2==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[4]
                            this.blueArr[4]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l2=document.documentElement.clientWidth*0.1
                        this.t2=document.documentElement.clientHeight*0.2
                    }
                }
                // 六
                if(this.left2==document.documentElement.clientWidth*0.32&&this.top2==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[5]
                            this.blueArr[5]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l2=document.documentElement.clientWidth*0.32
                        this.t2=document.documentElement.clientHeight*0.2
                    }
                }
                // 七
                if(this.left2==document.documentElement.clientWidth*0.54&&this.top2==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[7]==undefined){
                            this.blueArr[7]=this.blueArr[6]
                            this.blueArr[6]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l2=document.documentElement.clientWidth*0.54
                        this.t2=document.documentElement.clientHeight*0.2
                    }
                }
                // 八
                if(this.left2==document.documentElement.clientWidth*0.76&&this.top2==document.documentElement.clientHeight*0.2){
                    if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[0]==undefined){
                            this.blueArr[0]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[1]==undefined){
                            this.blueArr[1]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[2]==undefined){
                            this.blueArr[2]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.76&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.76+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.05&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.05+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[3]==undefined){
                            this.blueArr[3]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.05+'px'
                            this.left2=document.documentElement.clientWidth*0.76
                            this.top2=document.documentElement.clientHeight*0.05
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.1&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.1+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[4]==undefined){
                            this.blueArr[4]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.1+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.1
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.32&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.32+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[5]==undefined){
                            this.blueArr[5]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.32+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.32
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else if(parseFloat(this.$refs.yu2.style.left)>document.documentElement.clientWidth*0.54&&parseFloat(this.$refs.yu2.style.left)<(document.documentElement.clientWidth*0.54+(document.documentElement.clientWidth*0.15))&&
                    parseFloat(this.$refs.yu2.style.top)>document.documentElement.clientHeight*0.2&&parseFloat(this.$refs.yu2.style.top)<(document.documentElement.clientHeight*0.2+(document.documentElement.clientHeight*0.1))
                    ){
                        if(this.blueArr[6]==undefined){
                            this.blueArr[6]=this.blueArr[7]
                            this.blueArr[7]=undefined
                            this.$refs.yu2.style.left=document.documentElement.clientWidth*0.54+'px'
                            this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                            this.left2=document.documentElement.clientWidth*0.54
                            this.top2=document.documentElement.clientHeight*0.2
                        }else{
                        }
                    }else{
                        this.$refs.yu2.style.left=document.documentElement.clientWidth*0.76+'px'
                        this.$refs.yu2.style.top=document.documentElement.clientHeight*0.2+'px'
                        this.l2=document.documentElement.clientWidth*0.76
                        this.t2=document.documentElement.clientHeight*0.2
                    }
                }
            },
        }
    };
</script>

<style scoped>
    .grid .yu1{
        width:15%;
        height: 10%;
        position: absolute;
        top: 5%;
        left: 10%;
    }
    .grid .yu1 img{
        width:100%;
        height: 100%;
    }
    .grid .yu2{
        width:15%;
        height: 10%;
        position: absolute;
        top: 5%;
        left: 32%;
    }
    .grid .yu2 img{
        width:100%;
        height: 100%;
    }
   .a1{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 10%;
        }
       .a2{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 32%;
        }
       .a3{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 54%;
        }
       .a4{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 5%;
             left: 76%;
        }
       .a5{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 10%;
        }
       .a6{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 32%;
        }
       .a7{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 54%;
        }
       .a8{
            width:15%;
             height: 10%;
             background:cyan;
             position: absolute;
             top: 20%;
             left: 76%;
        }
</style>