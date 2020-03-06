<template>
	<div id="app">
		<router-view />
		<ul id="nav">

			<li>
				<router-link to="/">
					<img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
					<div>首页</div>
				</router-link>
			</li>

			<li>
				<router-link to="/about">
					<img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
					<div>发现</div>
				</router-link>
			</li>

			<li>
				<router-link to="/message">
					<img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
					<div>消息</div>
				</router-link>
			</li>

			<li>
				<router-link to="/user">
					<img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
					<div>我的</div>

				</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		width: 100%;
		height: 1.875rem;
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: space-between;
		flex-flow: nowrap row;
		position: fixed;
		bottom: 10px;
		img{
			width: 1.6875rem;
			height: 1.6875rem;
		}
	}
</style>
