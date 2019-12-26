<template>
  <div>
    <div class="chart" ref="chart"></div>
  </div>
</template>
<script>
const echarts = require("echarts");
import axios from 'axios';
export default {
  data() {
    return {};
  },
  methods: {
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      this.myChart  = myChart
      // 绘制图表
      myChart.setOption({
		backgroundColor: '#21202D',
    title: { text: "在Vue中使用echarts" },
    tooltip: {
		  trigger: 'axis',
			axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
          }
		},
		legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
          inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
		},
		grid: {
          left: '10%',
          right: '10%',
          bottom: '15%',
          width: '80%'
        },
        xAxis: {
          type: 'category',
          data: [],
          scale: true,
          boundaryGap: false,
          axisLine: { lineStyle: { color: '#8392A5' } },
          splitLine: { show: false },
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          axisLine: { lineStyle: { color: '#8392A5' } },
          splitLine: { show: false }
		},
		 dataZoom: [
          {
            type: 'inside',
            start: 50,
            end: 70,
          },
          {
            show: true,
            type: 'slider',
            y: '91%',
            start: 0,
            end: 75
          }
        ],
        series: [
          {
            name: '日K',
            type: 'k',
            data: [],
            itemStyle: {
              normal: {
                color: '#FD1050',
                color0: '#0CF49B',
                borderColor: '#FD1050',
                borderColor0: '#0CF49B'
              }
            },
            markPoint: {
              label: {
                normal: {
                  formatter: function (param) {
                    return param != null ? Math.round(param.value) : ''
                  }
                }
              },
              data: [
                {
                  name: 'highest value',
                  type: 'max',
                  valueDim: 'highest'
                },
                {
                  name: 'lowest value',
                  type: 'min',
                  valueDim: 'lowest'
                },
                {
                  name: 'average value on close',
                  type: 'average',
                  valueDim: 'close'
				},
				
              ],
              tooltip: {
                formatter: function (param) {
					// console.log(param)
                  return param.name + '<br>' + (param.data.coord || '')
                }
              }
            },
            markLine: {
              symbol: ['none', 'none'],
              data: [
                [
                  {
                    name: 'from lowest to highest',
                    type: 'min',
                    valueDim: 'lowest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  },
                  {
                    type: 'max',
                    valueDim: 'highest',
                    symbol: 'circle',
                    symbolSize: 10,
                    label: {
                      normal: { show: false },
                      emphasis: { show: false }
                    }
                  }
                ]
              ]
            }
          },
        ]
      });
    },
    add(){
      axios.get('http://api.canbite.cn/api/market/get_candles').then(data=>{
		let resData=data.data.data.sc
		let categoryData=[]
		let values=[]
		for(let i=0;i<resData.length;i++){
			categoryData.push(resData[i].splice(0, 1)[0].slice(0,10))
			let arr=[]
            values.push([...arr,Number(resData[i][0]),Number(resData[i][3]),Number(resData[i][2]),Number(resData[i][1]),Number(resData[i][4])])
		}
        this.myChart.setOption({
          series:{
            data:values
		  },
		  xAxis:{
			  data:categoryData
		  }
        })
      })
    }
  },
  mounted() {
    this.initCharts();
    this.add();
  },
  created(){

  }
};
</script>
<style scoped>
	.chart{
		width: 100%;
		height: 15rem;
	}
</style>