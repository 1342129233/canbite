<template>
    <div>
        <div class="wrap">
            <img class="gamebg" src="@/images/game/gamebg.png" alt="">
            <div class="all">
                <div class="head">
                    <img class="forty" src="@/images/game/forty.png" alt="">
                    <img class="jackpotbg" src="@/images/game/jackpotbg.png" alt="">
                    <img class="balletbg" src="@/images/game/balletbg.png" alt="">
                    <img class="luckdraw" src="@/images/game/luckdraw.png" alt="">
                    <img class="invitation" src="@/images/game/invitation.png" alt="">
                    <div class="jackpot">999999</div>
                    <div class="ballet">888888</div>
                </div>
                <div class="center">
                    <img class="total" src="@/images/game/total.png" alt="">
                    <img class="help" src="@/images/game/help.png" alt="">
                    <img class="rankinglist" src="@/images/game/rankinglist.png" alt="">
                    <img class="friendship" src="@/images/game/friendshipticket.png" alt="">
                    <img class="discount" src="@/images/game/discount.png" alt="" @click="huodong">
                    <img class="getcoin" src="@/images/game/getcoin.png" alt="">
                    <div class="shu">
                        <p class="p1">163.4k</p>
                        <p class="p2">24k/s</p>
                    </div>
                    <div class="daoshu">
                        {{parseInt(auth_time/60)}}:{{(auth_time%60).toString().length==1?'0'+auth_time%60:auth_time%60}}
                    </div>
                </div>
                <div class="hecheng">
                    <img class="warehouse" src="@/images/game/warehouse.png" alt="">
                    <div class="zhong">
                            <img v-for="i in 16" :class="['every', 'a' + i]" src="@/images/game/forty.png" alt="">
                    </div>
                </div>
            </div>
            <div class="left">
                <LeftPart @showMenu="showMenu" @hideMenu="hideMenu" />
            </div>
            <div class="right">
                <RightPart @showMenu="showMenu" @hideMenu="hideMenu"/>
            </div>
        </div>
    </div>
</template>
<script>
    import RightPart from '@/components/my/monitoring/RightPart.vue';
    import LeftPart from '@/components/my/monitoring/LeftPart.vue';
    export default {
        data(){
            return {
                menuX: 0,
                menuY: 0,
                isShowMenu: false,
                showItem: null,
                auth_time:90
            }
        },
        components: {
            RightPart,
            LeftPart
        },
        methods: {
            showMenu(v){
                this.menuX = v.x;
                this.menuY = v.y;
                this.isShowMenu = true;
                this.showItem = v.item;
            },
            hideMenu(){
                this.isShowMenu = false;
            },
            huodong(){
                this.auth_time = 90;
                var auth_timetimer =  setInterval(()=>{
                    this.auth_time--;
                    if(this.auth_time<=0){
                        this.auth_time = 90;
                        clearInterval(auth_timetimer);
                    }
                }, 1000);
            }
        }
    };
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    .wrap{
        width: 100%;
        height: 100%;
        background: black;
        position: fixed;
        top: 0;
        left: 0;
        border: 1px solid #333;
        box-sizing: border-box;
        padding: .3rem;
    }
    .wrap .gamebg{
        width: 100%;
        height: 100%;
    }    
    .wrap .all{
        width: 100%;
        height: 100%;
        position: relative;
        top: -100%;
        left: 0;
    }
    .wrap .all .head{
        width: 100%;
        height: 2.4rem;
        position: relative;
    }
    .wrap .all .head .forty{
        width: 2.9rem;
        margin-left: .5rem;
        float: left;
    }
    .wrap .all .head .jackpot{
        position: absolute;
        top: 0.63rem;
        left: 4.75rem;
        font-size:.6rem;
    }
    .wrap .all .head .ballet{
        position: absolute;
        top: .63rem;
        left: 8.7rem;
        font-size:.6rem;
    }
    .wrap .all .head .jackpotbg{
        width: 3.8rem;
        float: left;
        margin-top: .3rem;
        margin-right: .2rem;
    }
    .wrap .all .head .balletbg{
        width: 3.8rem;
        float: left;
        margin-top: .3rem;
        margin-right: .2rem;
    }
    .wrap .all .head .luckdraw{
        width: 1.6rem;
        float: left;
        margin-top: .3rem;
        margin-right: .2rem;
    }
    .wrap .all .head .invitation{
        width: 1.6rem;
        float: left;
        margin-top: .3rem;
    }
    .wrap .all .center{
        width: 100%;
        height: 4.1rem;
        position: relative;
    }
    .wrap .all .center .total{
        width: 4.8rem;
        float: left;
        margin-top: .6rem;
        margin-left: .6rem;
    }
    .wrap .all .center .help{
        width: 2rem;
        float: left;
        margin-top: .6rem;
        margin-right: .4rem;
    }
    .wrap .all .center .rankinglist{
        width: 2rem;
        float: left;
        margin-top: .6rem;
        margin-right: .4rem;
    }
    .wrap .all .center .friendship{
        width: 2rem;
        float: left;
        margin-top: .6rem;
        margin-right: .4rem;
    }
    .wrap .all .center .discount{
        width: 2rem;
        float: left;
        margin-top: .6rem;
    }
    .wrap .all .center .getcoin{
        width: 2.2rem;
        float: right;
    }
    .wrap .all .center .shu{
        position: absolute;
        top: 1.6rem;
        left: 2rem;
        color: white;
    }
    .wrap .all .center .shu .p1{
        width: 3rem;
        text-align: center;
        font-size:.8rem;
        height: .8rem;
    }
    .wrap .all .center .shu .p2{
        width: 3.2rem;
        text-align: center;
        font-size:.7rem;
        height: 0.8rem;
        text-shadow: 0.1rem 0.1rem 0.1rem green;
    }
    .wrap .all .center .daoshu{
        position: absolute;
        right: .1rem;
        bottom: 0.2rem;
        color: white;
        font-size: .55rem;
    }
    .wrap .all .hecheng{
        width: 100%;
        height: 14rem;
        margin-top: 3.6rem;
    }
    .wrap .all .hecheng .warehouse{
        width: 15rem;
    }
    .wrap .all .hecheng .zhong{
        width: 100%;
        height: 14rem;
        position: relative;
        top: -100%;
    }
    .wrap .all .hecheng .zhong .every{
        width: 2rem;
        position: absolute;
    }
    .wrap .all .hecheng .zhong .a1{width: 2.2rem;top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .a2{width: 2.2rem;top: 3.4rem;left: 5.2rem;}
    .wrap .all .hecheng .zhong .a3{width: 2.2rem;top: 3.4rem;left: 7.8rem;}
    .wrap .all .hecheng .zhong .a4{width: 2.2rem;top: 3.4rem;left: 10.5rem;}
    .wrap .all .hecheng .zhong .a5{width: 2.2rem;top: 5.7rem;left: 2.3rem;}
    .wrap .all .hecheng .zhong .a6{width: 2.2rem;top: 5.7rem;left: 5.1rem;}
    .wrap .all .hecheng .zhong .a7{width: 2.2rem;top: 5.7rem;left: 7.8rem;}
    .wrap .all .hecheng .zhong .a8{width: 2.2rem;top: 5.7rem;left: 10.5rem;}
    .wrap .all .hecheng .zhong .a9{width: 2.4rem;top: 8rem;left: 2.1rem;}
    .wrap .all .hecheng .zhong .a10{width: 2.4rem;top: 8rem;left: 5rem;}
    .wrap .all .hecheng .zhong .a11{width: 2.4rem;top: 8rem;left: 7.8rem;}
    .wrap .all .hecheng .zhong .a12{width: 2.4rem;top: 8rem;left: 10.5rem;}
    .wrap .all .hecheng .zhong .a13{width: 2.6rem;top: 10.5rem;left: 1.8rem;}
    .wrap .all .hecheng .zhong .a14{width: 2.6rem;top: 10.5rem;left: 4.8rem;}
    .wrap .all .hecheng .zhong .a15{width: 2.6rem;top: 10.5rem;left: 7.6rem;}
    .wrap .all .hecheng .zhong .a16{width: 2.6rem;top: 10.5rem;left: 10.6rem;}
    /* .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;}
    .wrap .all .hecheng .zhong .every,.a1{top: 3.4rem;left: 2.5rem;} */
    /* .blue .a2{top:52px;left:73px;}
    .blue .a3{top:101px;left:102px;}
    .blue .a4{top:101px;left:44px;}
    .blue .a5{top:151px;left:15px;}
    .blue .a6{top:202px;left:44px;}
    .blue .a7{top:251px;left:15px;}
    .blue .a8{top:302px;left:44px;}
    .blue .a9{top:352px;left:73px;}
    .blue .a10{top:352px;left:131px;} */
   /* .wrap .left{
        width:100%;
        height:5rem;
        background:rgb(3, 45, 61);
    }
      .wrap .right{
        width:100%;
        height:5rem;
        background:red;
    } */
    /*.menu{
        position: absolute;
        width:150px;
        height:200px;
        border: 1px solid #000;
        background: gold;
    }
    ul{
        list-style: none;
        background:orange;
    } */
</style>