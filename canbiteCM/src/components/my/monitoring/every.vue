<template>
  <div>
      <div class="every">
        {{qianbao}}
      </div>
  </div>
</template>

<script>
export default { 
  components:{},
  props:['question','qianbao','profit'],
  data(){
    return {
      qian:0,
      question:'',
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
      // question数组第零项为各种情况的时候
      if(this.question[0].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
          this.$emit('fun',this.timer)
        }, 3000);
      }else if(this.question[0].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[0].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // // question数组第1项为各种情况的时候
      if(this.question[1].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      else if(this.question[1].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[1].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第2项为各种情况的时候
      if(this.question[2].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[2].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第3项为各种情况的时候
      if(this.question[3].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[3].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第4项为各种情况的时候
      if(this.question[4].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[4].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第5项为各种情况的时候
      if(this.question[5].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[5].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第6项为各种情况的时候
      if(this.question[6].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[6].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第7项为各种情况的时候
      if(this.question[7].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[7].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第8项为各种情况的时候
      if(this.question[8].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[8].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第9项为各种情况的时候
      if(this.question[9].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[9].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第10项为各种情况的时候
      if(this.question[10].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[10].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第11项为各种情况的时候
      if(this.question[11].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[11].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第12项为各种情况的时候
      if(this.question[12].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[12].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第13项为各种情况的时候
      if(this.question[13].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[13].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第14项为各种情况的时候
      if(this.question[14].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[14].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
      // question数组第15项为各种情况的时候
      if(this.question[15].v==1){
        setInterval(() => {
          this.qianbao += this.profit[0].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==2){
        setInterval(() => {
          this.qianbao += this.profit[1].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==3){
        setInterval(() => {
          this.qianbao += this.profit[2].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==4){
        setInterval(() => {
          this.qianbao += this.profit[3].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==5){
        setInterval(() => {
          this.qianbao += this.profit[4].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==6){
        setInterval(() => {
          this.qianbao += this.profit[5].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==7){
        setInterval(() => {
          this.qianbao += this.profit[6].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==8){
        setInterval(() => {
          this.qianbao += this.profit[7].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==9){
        setInterval(() => {
          this.qianbao += this.profit[8].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==10){
        setInterval(() => {
          this.qianbao += this.profit[9].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==11){
        setInterval(() => {
          this.qianbao += this.profit[10].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==12){
        setInterval(() => {
          this.qianbao += this.profit[11].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==13){
        setInterval(() => {
          this.qianbao += this.profit[12].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==14){
        setInterval(() => {
          this.qianbao += this.profit[13].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==15){
        setInterval(() => {
          this.qianbao += this.profit[14].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==16){
        setInterval(() => {
          this.qianbao += this.profit[15].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==17){
        setInterval(() => {
          this.qianbao += this.profit[16].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==18){
        setInterval(() => {
          this.qianbao += this.profit[17].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==19){
        setInterval(() => {
          this.qianbao += this.profit[18].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==20){
        setInterval(() => {
          this.qianbao += this.profit[19].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==21){
        setInterval(() => {
          this.qianbao += this.profit[20].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==22){
        setInterval(() => {
          this.qianbao += this.profit[21].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==23){
        setInterval(() => {
          this.qianbao += this.profit[22].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==24){
        setInterval(() => {
          this.qianbao += this.profit[23].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==25){
        setInterval(() => {
          this.qianbao += this.profit[24].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==26){
        setInterval(() => {
          this.qianbao += this.profit[25].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==27){
        setInterval(() => {
          this.qianbao += this.profit[26].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==28){
        setInterval(() => {
          this.qianbao += this.profit[27].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==29){
        setInterval(() => {
          this.qianbao += this.profit[28].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==30){
        setInterval(() => {
          this.qianbao += this.profit[29].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==31){
        setInterval(() => {
          this.qianbao += this.profit[30].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==32){
        setInterval(() => {
          this.qianbao += this.profit[31].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==33){
        setInterval(() => {
          this.qianbao += this.profit[32].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==34){
        setInterval(() => {
          this.qianbao += this.profit[33].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==35){
        setInterval(() => {
          this.qianbao += this.profit[34].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==36){
        setInterval(() => {
          this.qianbao += this.profit[35].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==37){
        setInterval(() => {
          this.qianbao += this.profit[36].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==38){
        setInterval(() => {
          this.qianbao += this.profit[37].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==39){
        setInterval(() => {
          this.qianbao += this.profit[38].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }else if(this.question[15].v==40){
        setInterval(() => {
          this.qianbao += this.profit[39].number
          this.qian = this.qianbao
          this.$emit('func',this.qian)
        }, 3000);
      }
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style scoped>
    .every{
        font-size:.5rem;
    }
    .input{
      width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        border: 1px solid black;
        color: blue;
        border-radius: 10%;
        position: relative;top:0;
    }
</style>