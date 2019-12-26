import Vue from 'vue'
import App from './App.vue'
import routes from './router/index'
import VueRouter from 'vue-router';
import store from './store/';
import './registerServiceWorker';


//axios
import axios from 'axios';
Vue.prototype.$axios= axios

// element-ui的
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import bus from './bus.js';

Vue.use(bus);
Vue.use(ElementUI);

//animate动画
import animated from 'animate.css';
Vue.use(animated);

//echarts的
import echarts from 'echarts';
Vue.prototype.$echarts = echarts  //定义为全局变量

Vue.config.productionTip = false
// Vue.use(ElementUI);


//接口
import apis from '@/store/apis.js'
Vue.prototype.FACTURL = apis


//封装Scroll
// import Scroller from '@/components/information/Scroller'
// Vue.component('Scroller',Scroller);
Vue.use(VueRouter);
// 路由
const router = new VueRouter(routes);
// 定义路由守卫
store.dispatch("staff_websocket");
router.beforeEach((to, from, next) => {
  if(to.path=='/warehouse'){
    
    store.commit('sendtype','PH')
    store.commit('ustdsChanges',localStorage.getItem('v'))
  }
  else if(to.path=='/pankou'){

    store.commit('sendtype','PG')
  }
//   else if(to.path=='/baocang'){

//     store.commit('sendtype','PL_1')
//     store.commit('ustdsChanges',localStorage.getItem('v'))
//   }
  else if(to.path=='/one'){

    store.commit('sendtype','PH')
    store.commit('ustdsChanges',localStorage.getItem('v'))
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')