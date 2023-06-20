<template>

  <div class="container">

    <!-- slides -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(slide, index) in slides" :key="index">
        <img :src="slideImageURL + slide" width="500px" height="200px"/>
      </van-swipe-item>
    </van-swipe>

    <!-- horizontal line -->
    <van-divider dashed :style="{ color: 'blue', borderColor: 'red', padding: '0 16px' }">商品类型</van-divider>

    <!-- display product type -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(productType, index) in productTypeList" :key="index">
        <div align="center" @click="toCartlog(productType.typeId, productType.typeName)">
          <van-image :src=" productTypeImageURL + productType.typeImage" width="70px" height="70px" round/>
          <div>{{ productType.typeName }}</div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- horizontal line -->
    <van-divider dashed :style="{ color: 'blue', borderColor: 'red', padding: '0 16px' }">推荐商品</van-divider>

    <!-- display recommend products -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(product, index) in recommendProductList" :key="index">
        <div @click="toDetail(product.productId)">
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <div>{{ product.productName }}</div>
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- horizontal line -->
    <van-divider dashed :style="{ color: 'blue', borderColor: 'red', padding: '0 16px' }">热卖同类商品</van-divider>

    <!-- display same type recommend products -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(product, index) in recommendSameProductList" :key="index">
        <div @click="toDetail(product.productId)">
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <div>{{ product.productName }}</div>
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- horizontal line -->
    <van-divider dashed :style="{ color: 'blue', borderColor: 'red', padding: '0 16px' }">最新商品</van-divider>

    <!-- display newest products -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(product, index) in newestProductList" :key="index">
        <div @click="toDetail(product.productId)">
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <div>{{ product.productName }}</div>
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

    <!-- horizontal line -->
    <van-divider dashed :style="{ color: 'blue', borderColor: 'red', padding: '0 16px' }">热卖商品</van-divider>

    <!-- display top products -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(product, index) in topProductList" :key="index">
        <div @click="toDetail(product.productId)">
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <div>{{ product.productName }}</div>
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

  </div>

</template>

<script>
export default {

  data() {
    return {
      // slide image name
      slides: ['1.jpg', '2.jpg', '3.jpg'],

      // slide image url
      slideImageURL: this.$store.state.slideImageURL,

      // product type image url
      productTypeImageURL: this.$store.state.productTypeImageURL,

      //product image url
      productImageURL: this.$store.state.productImageURL,

      // product type list
      productTypeList: [],

      // recommend product list
      recommendProductList: [],

      // recommend product list
      recommendSameProductList: [],

      // newest product list
      newestProductList: [],

      // top product list
      topProductList: []
    }
  },

  methods: {

    toCartlog(typeId, typeName) {
      // console.log(typeId)
      this.$router.push(
          {
            path: "/catelog",
            query: {typeId, typeName}
          }
      )

    },

    toDetail(productId) {

      this.$router.push({path: '/detail', query:{
          productId
        }
      })
    },

  },

  mounted() {

    // get product type list
    this.$http.get('/api/productType/list').then(
        res => {
          if (res.data.status == 1) {
            this.productTypeList = res.data.data.productTypeList
          } else {
            this.$toast(res.data.message)
          }
        }
    )

    // get recommend product list
    this.$http.get('/api/product/recommendList').then(
        res => {
          if (res.data.status == 1) {
            // console.log(res)
            this.recommendProductList = res.data.data.productList
          } else {
            this.$toast(res.data.message)
          }
        }
    )

    // get same type recommend product list
    this.$http.get('/api/product/recommendSameList').then(
        res => {
          if (res.data.status == 1) {

            this.recommendSameProductList = res.data.data.productList
          } else {
            this.$toast(res.data.message)
          }
        }
    )

    // get newest product list
    this.$http.get('/api/product/newestList').then(
        res => {
          if (res.data.status == 1) {
            this.newestProductList = res.data.data.productList
          } else {
            this.$toast(res.data.message)
          }
        }
    )

    // get top product list
    this.$http.get('/api/product/topList').then(
        res => {
          if (res.data.status == 1) {
            this.topProductList = res.data.data.productList
          } else {
            this.$toast(res.data.message)
          }
        }
    )


  }


}
</script>

<style scoped>

</style>
