import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	
  //定义全局数据
  state: {
	  //轮播图片的路径
	  slideImageURL: 'http://localhost:8888/image/slide/',
	
	  //商品类型图片的路径
	  productTypeImageURL: 'http://localhost:8888/image/product_type/',
	  
	  //商品图片的路径
	  productImageURL: 'http://localhost:8888/image/product/',
	
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
