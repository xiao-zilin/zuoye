<template>
	<div class="course_message">
		<loopimg :imgarr="course_img"></loopimg>
		<h2>{{course_message.pro_name}}</h2>
	</div>
</template>

<script>
	import axios from 'axios';
	import loopimg from '../components/lunbo.vue';
	export default {
		name: "course_info",
		data: function() {
			return {
				course_img: [],
				course_message: ""
			}
		},

		mounted: function() {
			console.log(this.$route.query.id)
			let myquery = new URLSearchParams(); //创建新的查询传参对象
			//接口定义了一些实用的方法来处理 URL 的查询字符串
			myquery.append('pro_id', this.$route.query.id);
			myquery.append('fid', '');
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html", myquery).then((res) => {
				console.log(res)
				this.course_message = res.data.data;
				this.course_img = res.data.data.pro_imglist;
			})
		},
		components: {
			loopimg
		}
	}
</script>

<style lang="scss" scoped="scoped">
	 .course_message {

		.el-carousel__item {
			height: 232px;
			img {
				width: 100%;
				height: 232px
			}
		}

		h2 {
			font-weight: 300;
			margin-top: -50px;
			margin-left: 1.25rem;
		}
	}
</style>
