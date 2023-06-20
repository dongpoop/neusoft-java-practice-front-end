import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import Center from '../views/Center.vue'

import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import Catelog from '../views/Catelog.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',component: Home },
  { path: '/search',component: Search },
  { path: '/cart',component: Cart },
  { path: '/center',component: Center },
  
  { path: '/login',component: Login },
  { path: '/regist',component: Regist },
  { path: '/catelog',component: Catelog },
  { path: '/detail',component: Detail }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//避免重复路由问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location){
	return originalPush.call(this, location).catch(err => err)  
}


export default router
