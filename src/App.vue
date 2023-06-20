<template>
	<div id="app">
		
		<!-- top navigator -->
		<van-nav-bar
		  title="欢迎光临睿乐购商城"
		  left-text="注册"
		  right-text="登录"
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		
		<!-- view -->
		<router-view/>
		
		<!-- bottom navigator -->
		<van-tabbar v-model="active" route>
		  <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
		  <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
		  <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
		  <van-tabbar-item icon="user-o" to="/center">个人中心</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	export default{
		
		data() {
			return{
				active: 0
			}
		},
		
		methods: {
			onClickLeft(){
				this.$router.push("/regist")
			},
			onClickRight(){
				this.$router.push("/login")
			}
		}
	}
</script>

<style scoped>
	/deep/ .van-ellipsis{
			color: skyblue;
			font-size: 20px;
			font-weight: bold;
		}
</style>
