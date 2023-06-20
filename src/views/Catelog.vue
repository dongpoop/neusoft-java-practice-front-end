<template>
  <div class="container">

    <!--        title-->
    <h3 class="title">[{{ typeName }}] 商品列表</h3>

    <!--    products -->
    <van-grid :column-num="3" align="center">
      <van-grid-item v-for="(product, index) in productList" :key="index">
        <div @click="toDetail(product.productId)">
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <div>{{ product.productName }}</div>
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

    <van-pagination v-model="currentPage"
                    :total-items="totalCount"
                    :items-per-page="pageSize"
                    show-page-size="3"
                    force-ellipses
                    @change="query"/>


  </div>
</template>

<script>
export default {

  data() {
    return {

      //   product type id , receive type number from home page method "toCartlog(typeId, typeName)"
      typeId: this.$route.query.typeId,

      //   product type name , receive type number from home page method "toCartlog(typeId, typeName)"
      typeName: this.$route.query.typeName,

      // product list of one type
      productList: [],

      //product image url
      productImageURL: this.$store.state.productImageURL,

      //   current page
      currentPage: 1,

      //   page size
      pageSize: 0,

      // total count
      totalCount: 0,

    }
  },

  methods: {

    toDetail(productId) {

      this.$router.push({path: '/detail', query:{
          productId
        }
      })
    },

    query() {

      var params = {

        params: {
          typeId: this.typeId,
          currentPage: this.currentPage,
        }
      }

      // get product list from axios request
      this.$http.get('/api/product/typeList', params).then(
          res => {

            if (res.data.status == 1) {

              this.productList = res.data.data.productPage.records
              this.pageSize = res.data.data.productPage.size
              this.currentPage = res.data.data.productPage.current
              this.totalCount = res.data.data.productPage.total

              // console.log(res.data.data)
            } else {
              this.$toast(res.data.message)
            }
          }
      )

    }

  },

  mounted() {
    // console.log(this.typeId)
    this.currentPage = 1
   this.query()

  }

}
</script>

<style scoped>

</style>
