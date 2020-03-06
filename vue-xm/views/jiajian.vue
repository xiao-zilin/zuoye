<template>
	<div class="top5Con">
		<h2>本周最受欢迎TOP5</h2>
		<ul class="top5list">
			<li v-for="(item,index) in top5Arr">
				<router-link :to="'/item/'+item.pro_id">
					<div class="top5_img"><img :src="item.pro_img[0].url" /></div>
					<div class="top5_text">
						<div>{{item.pro_name}}</div>
						<div>{{item.pro_Joiner}}人已参加</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: 'jiajian',

		data: function() {
			return {
				top5Arr: []
			}
		},
		//挂载的函数
		mounted: function() {
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res) => {
				console.log(res);
				this.top5Arr = res.data.data.CourseTop5;
			})
		}

	}
</script>
<style scoped="scoped" lang="scss">
	* {
		padding: 0;
		margin: 0;
	}

	ul,
	li {
		list-style: none;
	}

	.top5Con {
		width: 90%;
		height: 400px;
		background: #004b9e;
		border-radius: 10px;
		margin: auto;
		margin-top: 20px;
	}

	.top5Con h2 {
		color: #fff;
		padding: 20px;
	}

	.top5list {
		background: #fff;
		margin: 10px;
		height: 300px;
		border-radius: 10px;
	}

	.top5list li a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 60px;
		padding: 6px;
		border-bottom: 1px solid #ddd;
	}

	.top5list li a .top5_img {
		width: 30%;
	}

	.top5list li a .top5_img img {
		width: 80%;
		height: 50px;
	}

	.top5list li a .top5_text {
		width: 70%;
	}

	/*轮播图样式*/
	.swiper-container {
		width: 100%;
		height: 200px;
	}

	.swiper-container img {
		width: 100%;
		height: 200px;
	}

	.show {
		display: none;
	}

	.swiper-container:hover .show {
		display: block;
	}
</style>
