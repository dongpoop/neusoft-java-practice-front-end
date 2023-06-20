<template>
  <div class="container">
    <!--        title-->
    <h3 class="title">商品详情</h3>

    <!--    details-->
    <div align="center">

      <van-image :src="productImageURL + this.productVO.productImage" alt="" width="120"></van-image>
      <div>
        【{{ this.productVO.productName }}】
        ￥{{ this.productVO.productPrice }} 元
        【{{ this.productVO.typeName }}】
      </div>
      <div>
        已售出 【{{ this.productVO.sellCount }}】 件
        库存剩余 【{{ this.productVO.productStock }}】 件
      </div>
      <div>上架时间 {{ this.productVO.createTime }}</div>

    </div>

<!--    comments-->
    <div align="center" v-if="this.commentVOList.length > 0">

      <!-- horizontal line -->
      <van-divider dashed :style="{ borderColor: 'red', padding: '0 20px' }"></van-divider>

      <!-- title-->
      <h3 class="title">评论</h3>
      <div>已有 <font color="red" size="5">{{ this.commentVOList.length }}</font> 人评论</div>

      <!-- horizontal line -->
      <van-divider dashed :style="{ borderColor: 'red', padding: '0 20px' }"></van-divider>

      <!--    comments-->
      <div v-for="(commentVO, index) in commentVOList" :key="commentVO.commentId">

        <div>
          <van-image :src="photoImageURL + commentVO.photo" round></van-image>
          {{ commentVO.userName }}: {{ commentVO.content}}
          <van-rate v-model="commentVO.score" color="red" void-color="#c8c9cc" readonly/>
        </div>

        <div>
          发布时间：{{ commentVO.commentTime }}
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {

      // current product id
      productId: this.$route.query.productId,

      //   current product VO
      productVO: '',

      //product image url
      productImageURL: this.$store.state.productImageURL,

      // user photo url
      photoImageURL: this.$store.state.photoImageURL,

      // comment list
      commentVOList: [],
    }
  },

  methods: {},

  mounted() {

    // get details of current product
    this.$http.get('/api/product/detail/' + this.productId).then(
        res => {
          if (res.data.status == 1) {
            this.productVO = res.data.data.productVO
          } else {
            this.$toast(res.data.message)
          }
        }
    )

    // get commentVOList from server
    this.$http.get('/api/comment/getCommentVOList/' + this.productId).then(
        res => {
          if (res.data.status == 1) {
            this.commentVOList = res.data.data.commentVOList
          }
        }
    )

  }
}
</script>

<style scoped>

</style>
