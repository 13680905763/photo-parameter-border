<template>
	<view class="other-btn">
		<uni-icons :type="iconType" size="30" @click="btnClick(iconType)"></uni-icons>
		<text>{{label}}</text>
	</view>

</template>

<script>
	export default {
		props: ['label', 'iconType', 'btnClick'],
		options: {
			virtualHost: true
		}
	}
</script>

<style>
	.other-btn {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		width: 48%;
		margin: 1%;
		padding: 20px 0;
		border: 1px solid black;
		border-radius: 3%;
		text-align: center;
		background-color: #fff;
		color: black;
	}
</style>