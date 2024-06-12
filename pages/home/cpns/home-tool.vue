<template>
	<view class="tool-wrapper">
		<view class="btn-wrapper">
			<button class="btn" style="background-color: #007aff">选图加框</button>
			<view class="other-btns">
				<view class="other-btn">
					<uni-icons type="info" size="30"></uni-icons>
					<text>参数设置</text>
				</view>
				<view class="other-btn">
					<uni-icons type="info" size="30"></uni-icons>
					<text>多图导入</text>
				</view>
				<view class="other-btn">
					<uni-icons type="info" size="30"></uni-icons>
					<text>使用说明</text>
				</view>
				<view class="other-btn">
					<uni-icons type="info" size="30"></uni-icons>
					<text>联系作者</text>
				</view>
			</view>
		</view>
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
	.tool-wrapper {
		flex: 2;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		margin-top: -4px;
		background-color: antiquewhite;
	}

	.btn-wrapper {
		padding: 40px;
	}

	.btn {
		height: 100px;
		line-height: 100px;
		color: white;
	}

	.other-btns {
		display: flex;
		justify-content: space-around
	}

	.other-btn {
		display: flex;
		flex-direction: column;
		padding: 20px 0;
		font-size: 14px;
	}
</style>