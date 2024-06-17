<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval=2000 duration=500>
			<swiper-item>
				<image src="https://wx2.sinaimg.cn/orj360/a034f6a9gy1hqo9uuczgzj21620u0q6v.jpg" />
			</swiper-item><swiper-item>
				<image src="https://wx4.sinaimg.cn/orj360/a034f6a9gy1hqo9uyprxrj21770u0tdq.jpg" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: ['data'],
		data() {
			return {}
		},
		options: {
			virtualHost: true
		}
	}
</script>

<style>
	.uni-margin-wrap {
		flex: 3;
		/* width: 690rpx; */
		/* width: 100vw; */

	}

	.swiper {
		height: 100%;

	}

	.swiper-item {
		/* width: 100%; */
		/* display: block; */

	}

	image {
		width: 100%;
		height: 100%;
	}
</style>