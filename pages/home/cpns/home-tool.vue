<template>
	<view class="tool-wrapper">
		<view class="btn-wrapper">
			<button class="btn" style="background-color: #007aff" @click="handleSingleBtn">选图加框</button>
			<view class="other-btns">
				<tool-btn-item v-for="(item, index) in toolBtns" :key="item.label" :label="item.label"
					:btnClick='toggle' :iconType="item.iconType">
				</tool-btn-item>
			</view>
		</view>
		<view>
			<tool-popup ref="popup"></tool-popup>
		</view>
	</view>
</template>

<script>
	import EXIF from 'exif-js'
	import toolPopup from './tool-popup.vue'
	import toolBtnItem from './tool-btn-item.vue'
	export default {
		props: ['data'],
		components: {
			toolPopup,
			toolBtnItem
		},
		data() {
			return {
				toolBtns: [{
					label: '参数设置',
					iconType: 'gear'
				}, {
					label: '多图导入',
					iconType: 'image'
				}, {
					label: '使用说明',
					iconType: 'info'
				}, {
					label: '联系作者',
					iconType: 'personadd'
				}],
			}
		},
		methods: {
			toggle(type) {
				console.log(type)
				this.$refs.popup.toggle(type)
			},
			handleSingleBtn() {
				console.log(EXIF);
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log('图片加载成功');
						EXIF.getData(res.tempFilePaths[0], function() {
							var make = EXIF.getTag(this, "Make");
							var model = EXIF.getTag(this, "Model");
							console.log(this);
						
						});

					}
				});
			}
		},
		options: {
			virtualHost: true
		}
	}
</script>

<style>
	.tool-wrapper {
		margin-top: -4px;
		position: relative;
		flex: 2;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.btn-wrapper {
		padding: 40px;
	}

	.btn {
		height: 120px;
		line-height: 120px;
		color: white;
		font-size: 30px;
	}

	.other-btns {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 20px;
	}
</style>