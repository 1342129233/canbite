// import Vue from 'vue'
// import Router from 'vue-router'
import Warehouse from '@/views/warehouse.vue'
import Login from '@/components/my/login/index.vue';
import Zixun from  '@/views/zixun.vue'


import BCH from '@/components/information/BCH/index.vue'
import BSV from '@/components/information/BSV/index.vue'
import BTC from '@/components/information/BTC/index.vue'
import EOS from '@/components/information/EOS/index.vue'
import ETC from '@/components/information/ETC/index.vue'
import ETH from '@/components/information/ETH/index.vue'
import LTC from '@/components/information/LTC/index.vue'
import TRX from '@/components/information/TRX/index.vue'
import XRP from '@/components/information/XRP/index.vue'



export default {
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/one' },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse,
      meta:{
        keepAlive:false,    
      }
    },
    {
      path: '/information',
      component: () => import('@/views/information.vue'),
      children:[
        {
          path:'',
          name:'BTC',
          component:BTC
        },
        {
          path:'ETH',
          name:'ETH',
          component:ETH
        },
        {
          path:'BCH',
          name:'BCH',
          component:BCH
        },
        {
          path:'BSV',
          name:'BSV',
          component:BSV
        },
        {
          path:'EOS',
          name:'EOS',
          component:EOS
        },
        {
          path:'ETC',
          name:'ETC',
          component:ETC
        },
        {
          path:'ETC',
          name:'ETC',
          component:ETC
        },
        {
          path:'ETC',
          name:'ETC',
          component:ETC
        },
        {
          path:'LTC',
          name:'LTC',
          component:LTC
        },
        {
          path:'TRX',
          name:'TRX',
          component:TRX
        },
        {
          path:'XRP',
          name:'XRP',
          component:XRP
        },
      ]
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('@/views/market.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my.vue'),
      children:[
        {
          path: 'identity',
          name: 'identity',
          component: () => import('@/components/my/Identity/index.vue'),
          children:[
            {
              path: 'changename',
              name: 'changename',
              component: () => import('@/components/my/Identity/changename.vue')
            },
            {
              path: 'changepass',
              name: 'changepass',
              component: () => import('@/components/my/Identity/changepass.vue')
            },
            {
              path: 'identityId',
              name: 'identityId',
              component: () => import('@/components/my/Identity/identityId.vue')
            },
           
          ],
          
        },
         //登录总页面包括  注册  登录  忘记密码
         {
            path:'login',
            name:'login',
            component:Login,
          },
      ],
      
    },
    {path: '/cost',
      name: 'cost',
      component: () => import('@/components/my/monitoring/cost.vue')
    },
    {path: '/xuanfu',
      name: 'xuanfu',
      component: () => import('@/components/my/ceshi/xuanfu.vue')
    },
    //临时弹框
    // {path: '/calculator',
    //   name: 'calculator',
    //   component: () => import('@/views/calculator.vue')
    // },
    {path: '/hangqing',
      name: 'hangqing',
      component: () => import('@/views/hangqing.vue')
    },
    {path: '/ceshi',
      name: 'ceshi',
      component: () => import('@/views/ceshi.vue')
    },
    //开多开空爆仓信息
    {
      path: '/pankou',
      name: 'pankou',
      component: () => import('@/views/pankou.vue')
    },
    {
      path: '/kxiantu',
      name: 'kxiantu',
      component: () => import('@/views/kxiantu.vue')
    },
    {
      path: '/getip',
      name: 'getip',
      component: () => import('@/views/getip.vue')
    },
    //资讯
    {
      path: '/zixun',
      name: 'zixun',
      component: Zixun,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/baocang',
      name: 'baocang',
      component: () => import('@/views/warehouse.vue')
    },
    {
      path: '/one',
      name: 'one',
      component: () => import('@/views/one.vue')
    },
  ]
}
