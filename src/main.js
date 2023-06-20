import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//全局引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

//全局使用Vant
Vue.use(Vant);


//全局引入Axios
import axios from 'axios';

//将Axios挂载到Vue实例上
Vue.prototype.$http = axios

// 全局导入公共的样式文件
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
