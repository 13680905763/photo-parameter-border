<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular indicator-dots="true" autoplay="true" interval=2000 duration=500>
			<swiper-item>
				<view class="swiper-item ">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item ">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item ">C</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script >
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
		width: 690rpx;
		width: 100vw;
	}

	.swiper {}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>