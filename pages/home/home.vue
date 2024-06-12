<template>
	<view class="home">
		<home-banner></home-banner>
		<home-tool></home-tool>
	</view>
</template>

<script setup>
	import homeBanner from './cpns/home-banner.vue';
	import homeTool from './cpns/home-tool.vue';
</script>

<style>
	.home {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: aqua;
	}
</style>