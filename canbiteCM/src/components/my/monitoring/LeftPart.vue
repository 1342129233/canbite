<template>
    <div>
        <h1>{{qianbao}}</h1>
            
        <div class="listbox">
            <div class="grid" v-for="(item, index) in arr" :key="item.id" @click="clickHandler(item,index+1)">
                <p>{{item.v}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list1: [
                ],
                qianbao:38800,
                arr:[
                    {'id':1,'v':1,'picurl':'one'},
                    {'id':2,'v':2,'picurl':'two'},
                    {'id':3,'v':3,'picurl':'three'},
                    {'id':4,'v':4,'picurl':'four'},
                    {'id':5,'v':5,'picurl':'five'},
                    {'id':6,'v':6,'picurl':'six'},
                    {'id':7,'v':7,'picurl':'seven'},
                    {'id':8,'v':8,'picurl':'eight'},
                    // {'id':9,'v':9,'picurl':'nine'},
                ],
                cishu:0,
                cishu2:0,
                cishu3:0,
                cishu4:0,
                cishu5:0,
                cishu6:0,
                cishu7:0,
                cishu8:0,
                cishu9:0,
                cishu10:0,
                cishu11:0,
                cishu12:0,
                cishu13:0,
                cishu14:0,
                cishu15:0,
                cishu16:0,
                cishu17:0,
                cishu18:0,
                cishu19:0,
                cishu20:0,
                cishu21:0,
                cishu22:0,
                cishu23:0,
                cishu24:0,
                cishu25:0,
                cishu26:0,
                cishu27:0,
                cishu28:0,
                cishu29:0,
                cishu30:0,
                cishu31:0,
                cishu32:0,
                cishu33:0,
                cishu34:0,
                cishu35:0,
                cishu36:0,
                cishu37:0,
                 // 每次购买累计减去的钱数
                qianshu:0,
                // 不同级别第一次减去的钱数
                firstqianshu: [
                            {'level':1,'number':100}, 
                            {'level':2,'number':310}, 
                            {'level':3,'number':961},
                            {'level':4,'number':2979},
                            {'level':5,'number':9235},
                            {'level':6,'number':28629},
                            {'level':7,'number':88750},
                            {'level':8,'number':275126},
                            {'level':9,'number':852891},
                            {'level':10,'number':2643962},
                            {'level':11,'number':8196283},
                            {'level':12,'number':25408477},
                            {'level':13,'number':78766278},
                            {'level':14,'number':244175463},
                            {'level':15,'number':756943935},
                            {'level':16,'number':2346526199},
                            {'level':17,'number':7274231217},
                            {'level':18,'number':22550116774},
                            {'level':19,'number':69905362000},
                            {'level':20,'number':216706622200},
                            {'level':21,'number':671790528819},
                            {'level':22,'number':2082550639339},
                            {'level':23,'number':6455906981951},
                            {'level':24,'number':20013311644049},
                            {'level':25,'number':62041266096553},
                            {'level':26,'number':192327924899314},
                            {'level':27,'number':596216567187872},
                            {'level':28,'number':1848271358282400},
                            {'level':29,'number':5729641210675450},
                            {'level':30,'number':17761887753093900},
                            {'level':31,'number':55061852034591100},
                            {'level':32,'number':170691741307232000},
                            {'level':33,'number':529144398052421000},
                            {'level':34,'number':1640347633962500000},
                            {'level':35,'number':5085077665283760000},
                            {'level':36,'number':15763740762379700000},
                ],
            };
        },
        computed: {
        },
        methods: {
            clickHandler(item,i){
                if(i==1){
                    this.cishu++
                    if(this.cishu==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number&&this.qianbao>1){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu==2&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number*((this.cishu-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu-2)*0.01+1.07))
                        localStorage.setItem('qianshu',this.qianshu)
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu-2)*0.01+1.07))&&this.qianbao>1){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                        console.log(this.list1.length)
                    }else{
                        this.cishu=this.cishu-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==2){
                    this.cishu2++
                    if(this.cishu2==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        // console.log({...item,v:this.list1.length+1})
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu2==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu2-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu2-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu2-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu2>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu2-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu2-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu2-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu2=this.cishu2-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==3){
                    this.cishu3++
                    if(this.cishu3==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu3==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu3-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu3-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu3-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu3>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu3-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu3-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu3-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu3=this.cishu3-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==4){
                    this.cishu4++
                    if(this.cishu4==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu4==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu4-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu4-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu4-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu4>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu4-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu4-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu4-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu4=this.cishu4-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==5){
                    this.cishu5++
                    if(this.cishu5==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu5==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu5-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu5-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu5-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu5>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu5-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu5-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu5-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu5=this.cishu5-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==6){
                    this.cishu6++
                    if(this.cishu6==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu6==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu6-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu6-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu6-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu6>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu6-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu6-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu6-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu6=this.cishu6-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==7){
                    this.cishu7++
                    if(this.cishu7==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu7==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu7-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu7-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu7-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu7>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu7-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu7-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu7-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu7=this.cishu7-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==8){
                    this.cishu8++
                    if(this.cishu8==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu8==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu8-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu8-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu8-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu8>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu8-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu8-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu8-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu8=this.cishu8-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==9){
                    this.cishu9++
                    if(this.cishu9==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu9==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu9-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu9-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu9-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu9>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu9-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu9-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu9-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu9=this.cishu9-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==10){
                    this.cishu10++
                    if(this.cishu10==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu10==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu10-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu10-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu10-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu10>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu10-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu10-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu10-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu10=this.cishu10-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==11){
                    this.cishu11++
                    if(this.cishu11==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu11==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu11-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu11-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu11-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu11>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu11-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu11-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu11-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu11=this.cishu11-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==12){
                    this.cishu12++
                    if(this.cishu12==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu12==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu12-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu12-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu12-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu12>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu12-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu12-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu12-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu12=this.cishu12-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==13){
                    this.cishu13++
                    if(this.cishu13==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu13==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu13-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu13-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu13-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu13>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu13-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu13-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu13-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu13=this.cishu13-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==14){
                    this.cishu14++
                    if(this.cishu14==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu14==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu14-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu14-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu14-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu14>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu14-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu14-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu14-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu14=this.cishu14-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==15){
                    this.cishu15++
                    if(this.cishu15==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu15==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu15-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu15-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu15-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu15>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu15-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu15-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu15-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu15=this.cishu15-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==16){
                    this.cishu16++
                    if(this.cishu16==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu16==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu16-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu16-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu16-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu16>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu16-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu16-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu16-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu16=this.cishu16-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==17){
                    this.cishu17++
                    if(this.cishu17==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu17==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu17-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu17-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu17-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu17>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu17-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu17-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu17-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu17=this.cishu17-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==18){
                    this.cishu18++
                    if(this.cishu18==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu18==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu18-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu18-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu18-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu18>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu18-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu18-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu18-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu18=this.cishu18-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==19){
                    this.cishu19++
                    if(this.cishu19==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu19==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu19-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu19-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu19-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu19>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu19-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu19-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu19-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu19=this.cishu19-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==20){
                    this.cishu20++
                    if(this.cishu20==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu20==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu20-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu20-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu20-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu20>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu20-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu20-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu20-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu20=this.cishu20-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==21){
                    this.cishu21++
                    if(this.cishu21==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu21==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu21-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu21-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu21-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu21>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu21-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu21-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu21-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu21=this.cishu21-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==22){
                    this.cishu22++
                    if(this.cishu22==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu22==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu22-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu22-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu22-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu22>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu22-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu22-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu22-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu22=this.cishu22-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==23){
                    this.cishu23++
                    if(this.cishu23==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu23==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu23-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu23-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu23-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu23>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu23-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu23-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu23-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu23=this.cishu23-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==24){
                    this.cishu24++
                    if(this.cishu24==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu24==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu24-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu24-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu24-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu24>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu24-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu24-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu24-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu24=this.cishu24-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==25){
                    this.cishu25++
                    if(this.cishu25==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu25==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu25-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu25-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu25-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu25>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu25-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu25-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu25-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu25=this.cishu25-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==26){
                    this.cishu26++
                    if(this.cishu26==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu26==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu26-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu26-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu26-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu26>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu26-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu26-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu26-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu26=this.cishu26-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==27){
                    this.cishu27++
                    if(this.cishu27==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu27==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu27-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu27-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu27-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu27>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu27-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu27-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu27-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu27=this.cishu27-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==28){
                    this.cishu28++
                    if(this.cishu28==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu28==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu28-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu28-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu28-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu28>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu28-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu28-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu28-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu28=this.cishu28-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==29){
                    this.cishu29++
                    if(this.cishu29==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu29==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu29-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu29-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu29-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu29>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu29-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu29-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu29-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu29=this.cishu29-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==30){
                    this.cishu30++
                    if(this.cishu30==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu30==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu30-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu30-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu30-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu30>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu30-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu30-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu30-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu30=this.cishu30-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==31){
                    this.cishu31++
                    if(this.cishu31==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu31==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu31-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu31-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu31-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu31>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu31-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu31-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu31-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu31=this.cishu31-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==32){
                    this.cishu32++
                    if(this.cishu32==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu32==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu32-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu32-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu32-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu32>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu32-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu32-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu32-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu32=this.cishu32-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==33){
                    this.cishu33++
                    if(this.cishu33==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu33==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu33-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu33-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu33-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu33>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu33-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu33-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu33-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu33=this.cishu33-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==34){
                    this.cishu34++
                    if(this.cishu34==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu34==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu34-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu34-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu34-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu34>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu34-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu34-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu34-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu34=this.cishu34-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==35){
                    this.cishu35++
                    if(this.cishu35==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu35==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu35-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu35-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu35-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu35>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu35-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu35-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu35-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu35=this.cishu35-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==36){
                    this.cishu36++
                    if(this.cishu36==1&&this.list1.length<16&&this.qianbao>=this.firstqianshu[i-1].number){
                        this.qianbao=this.qianbao-this.firstqianshu[i-1].number
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu36==2&&this.list1.length<16&&this.qianbao>=(this.firstqianshu[i-1].number)*((this.cishu36-2)*0.01+1.07)){
                        this.qianbao=this.qianbao-Math.round(this.firstqianshu[i-1].number*((this.cishu36-2)*0.01+1.07))
                        this.qianshu=Math.round(this.firstqianshu[i-1].number*((this.cishu36-2)*0.01+1.07))
                        localStorage.setItem('qianshu',Math.round(this.qianshu))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else if(this.cishu36>=3&&this.list1.length<16&&this.qianbao>=Math.round(localStorage.getItem('qianshu')*((this.cishu36-2)*0.01+1.07))){
                        this.qianbao=this.qianbao-Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu36-2)*0.01))
                        localStorage.setItem('qianshu',Math.round(localStorage.getItem('qianshu')*(1.07+(this.cishu36-2)*0.01)))
                        this.$bus.$emit('additem', {...item,v:this.list1.length+1}); 
                    }else{
                        this.cishu36=this.cishu36-1
                        alert('对不起，您的钱包余额不足，请充值')
                    }
                }else if(i==37){
                    alert('抱歉，您不能直接购买37级，只能合并生成')
                }else if(i==38){
                    alert('抱歉，您不能直接购买37级，只能合并生成')
                }else if(i==39){
                    alert('抱歉，您不能直接购买37级，只能合并生成')
                }else if(i==40){
                    alert('抱歉，您不能直接购买37级，只能合并生成')
                }
            
            },
        },
    };
</script>

<style scoped>
    .listbox{
        height:400px;
        overflow-y:scroll;
        padding:10px;
       
    }
    .listbox .grid{
        width:80px;
        height:80px;
        margin-right:10px;
        margin-bottom:10px;
        border: 1px solid black;
        float:left;
        text-align: center;
        font-size:12px;
    }
    .icon{
        width: 60px;
    }
    h1{
        color: red;
    }
</style>