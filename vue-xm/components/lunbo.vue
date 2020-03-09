<template>
	<el-carousel :interval="2000" indicator-position="none">
		<el-carousel-item v-for="(item,index) in imgarr" :key="index">
			<img  v-if="item.adlist_img" :src="item.adlist_img" alt="item.adtitle">
			<img  v-else :src="item.url" alt="item.name" style="height: 14.5rem;">
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	export default {
		name: "loopimg",
		props:['imgarr']
	}
</script>

<style lang="scss">
	.el-carousel__item {
		img{
			width: 100%;
		}
	}

	
</style>
