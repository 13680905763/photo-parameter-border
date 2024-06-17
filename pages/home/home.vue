<template>
	<view class="home">
		<home-banner></home-banner>
		<home-tool></home-tool>
		<!-- <popup></popup> -->
	</view>
</template>

<script setup>
	import homeBanner from './cpns/home-banner.vue';
	import homeTool from './cpns/home-tool.vue';
	// import popup from '@/components/popup/popup.vue';
</script>

<style>
	.home {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f6f6f6;
	}
</style>