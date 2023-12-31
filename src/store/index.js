import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  // global path of slides
	  slideImageURL: 'http://localhost:8888/image/slide/',
	  
	  // global path of product type
	  productTypeImageURL: 'http://localhost:8888/image/product_type/',
	  
	  // global path of product image
	  productImageURL: 'http://localhost:8888/image/product/',

      // global path of user photo
      photoImageURL: 'http://localhost:8888/image/photo/',
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
