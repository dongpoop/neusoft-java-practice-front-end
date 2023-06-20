<template>
  <div class="container">

<!--        title-->
    <h3 class="title">匹配商品</h3>

<!--    search box-->
    <van-search v-model="productName" placeholder="请输入搜索关键词" @search="search"/>

<!--    products -->
    <van-grid :column-num="3">
      <van-grid-item v-for="(product, index) in productList" :key="index">
        <div @click="toDetail(product.productId)" align="center">
          <!--        product image-->
          <van-image :src=" productImageURL + product.productImage" width="70px" height="70px" round/>
          <!--        product name-->
          <!--        <div>{{ product.productName }}</div>-->
          <div v-html="product.productName"></div>
          <!--        product price-->
          <div>{{ product.productPrice }}元</div>
        </div>
      </van-grid-item>
    </van-grid>

<!--    pages-->
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

        //   matched product name
        productName: "",

        //   product list
        productList: [],

        //   product image path
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

      query() {

        // create a object with required parameters
        var params = {

          params: {
            productName: this.productName,
            currentPage: this.currentPage,
          }
        }

        this.$http.get('/api/product/list' ,params).then(

            res => {
              if (res.data.status == 1) {

              // receive data
              this.productList = res.data.data.productPage.records

              // get total records
              this.totalCount = res.data.data.productPage.total

              // get page size
              this.pageSize = res.data.data.productPage.size

              // go over all products in productList and note the matched parts of product name with red form
                if (this.productName != "" && this.productList != null) {

                  this.productList.forEach(
                      product => {
                        product.productName = product.productName.replace(new RegExp(this.productName, 'g'), "<font color='red'><strong>"
                            + this.productName + "</strong></font>")
                      }
                  )

                }

              } else {

                this.$toast(res.data.message)
              }
            }
        )
      },

      search() {

        this.currentPage = 1
        this.query()

      },

      toDetail(productId) {

        this.$router.push({path: '/detail', query:{
          productId
          }
        })
      },

    },

    mounted() {

      this.currentPage = 1
      this.query()
    },

  }
</script>

<style scoped>
	
</style>
