<template>
	<div id="app">
		<router-view></router-view>

		<ul id="nav" v-if="pagetype">
			<li class="home_iocn">
				<router-link to="/">
					<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
					<div>首页</div>
				</router-link>
			</li>

			<li class="home_iocn">
				<router-link to="/find">
					<img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
					<div>发现</div>
				</router-link>
			</li>

			<li class="home_iocn">
				<router-link to="/message">
					<img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
					<div>消息</div>
				</router-link>
			</li>

			<li class="home_iocn">
				<router-link to="/user">
					<img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
					<div>我的</div>

				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				pagetype: true
			}
		},
		methods: {
			clickFun: function(value) {
				console.log("父组件的函数触发了");
				console.log("从子组件传过来的值", value);
				this.pagetype = value;
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		width: 100%;
		height: 100vh;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#nav {
		width: 100%;
		height: 3.75rem;
		padding-bottom: 1.25rem;
		list-style: none;
		display: flex;
		justify-content: space-between;
		flex-flow: nowrap row;
		position: fixed;
		bottom: -1px;
		background: whitesmoke;

		.home_iocn {

			img {
				width: 1.6875rem;
				height: 1.6875rem;
			}
		}
	}

	a {
		text-decoration: none;
	}
</style>
