<template>
	<div>
		<loopimg :imgarr="looparr"></loopimg>
		<div class="sport">
			<ul>
				<li v-for="(item,index) in sportarr" :key="index" @click="toDetail(item.CategoryName)">
					<img :src="require('../assets/icon/'+(index+1)+'.png')" />
					<p>{{item.CategoryName}}</p>
				</li>
			</ul>
		</div>
		<div class="course">
			<h2>为你精选</h2>
			<ul>
				<li v-for="(item,index) in coursearr" :key="index" @click="toDetail(item.pro_id)">
					<img :src="item.pro_img[0].url" :alt="item.pro_name">
					<div>{{item.pro_name}}</div>
					<div>{{item.pro_Joiner}}人已参加 </div>
				</li>
			</ul>
		</div>
		<div class="top5Con">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="top5list">
				<li v-for="(item,index) in top5Arr" :key="index" @click="toDetail(item.pro_id)">
					<div class="top5_img"><img :src="item.pro_img[0].url" /></div>
					<div class="top5_text">
						<div>{{item.pro_name}}</div>
						<div>{{item.pro_Joiner}}人已参加</div>
					</div>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import axios from "axios";
	import loopimg from '../components/lunbo.vue';
	export default {
		name: 'jiajian',

		data: function() {
			return {
				looparr: [],
				sportarr: [],
				coursearr: [],
				top5Arr: []
			}
		},
		//挂载的函数
		mounted: function() {
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res) => {
				console.log(res);
				this.looparr = res.data.data.top_ad.list;
				this.sportarr = res.data.data.iconList;
				this.coursearr = res.data.data.CourseforYou;
				this.top5Arr = res.data.data.CourseTop5;
			})
		},
		methods: {
			toDetail(id) {
				this.$router.push({
					path: `item`,
					query: {
						id
					}
				})
			},

			change: function() {
				console.log("子组件的函数被触发了");
				this.$emit("what", false); //$emit 主动触发
			}

		},

		components: {
			loopimg
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

	.sport {
		width: 95%;
		margin: -80px auto 20px;

		ul {
			display: flex;
			flex-flow: row wrap;

			li {
				width: 20%;
				height: 5rem;
			}
		}
	}

	.course {
		width: 95%;
		margin: 20px auto;
		text-align: left;

		ul {
			display: flex;
			flex-flow: wrap row;
			justify-content: space-around;

			li {
				width: 45%;
				height: 45%;
				margin: 10px 0;

				img {
					width: 100%;
					height: 6.25rem;
					border-radius: 5px;
				}
			}
		}
	}

	.top5Con {
		width: 90%;
		height: 25rem;
		background: #004b9e;
		border-radius: 10px;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 100px;
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

	.top5list li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 60px;
		padding: 6px;
		border-bottom: 1px solid #ddd;
	}

	.top5list li .top5_img {
		width: 30%;
	}

	.top5list li .top5_img img {
		width: 80%;
		height: 50px;
	}

	.top5list li .top5_text {
		width: 70%;
	}
</style>
