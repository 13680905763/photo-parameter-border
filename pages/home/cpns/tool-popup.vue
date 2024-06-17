<template>
	<view class="">
		<uni-popup ref="popup" background-color="#fff">
			<view style="height: 60vh;width: 70vw;">
				<image src="@/static/images/author.jpg" mode="scaleToFill" style="width: 100%;height: 100%;"
					v-if="$data.popType=='personadd'">
				</image>
				<view v-else-if="$data.popType=='info'">
					<view style="text-align: center;">使用说明</view>
					<view class="instruction-item">
						<text>如何使用？</text>
						<view>需要完成参数设置</view>
					</view>
				</view>
				<view v-else-if="$data.popType=='gear'">
					<uni-forms ref="baseForm" :modelValue="baseFormData" style="padding: 10px;">
						<uni-forms-item label="相机品牌">
							<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
						</uni-forms-item>
						<uni-forms-item label="相机型号">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<uni-forms-item label="光圈">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<uni-forms-item label="快门">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<uni-forms-item label="ISO">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<uni-forms-item label="拍摄时间">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>

						<uni-forms-item label="镜头焦距(mm)">
							<uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" />
						</uni-forms-item>
						<view class="button-group" style="display: flex;">
							<button type="primary" size="mini" style="flex: 1;margin: 0 10px;">保存</button>
							<button type="red" size="mini" style="flex: 1;margin: 0 10px;">重置</button>
						</view>
					</uni-forms>

				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		props: ['data'],

		data() {
			return {
				popType: 'author',
				baseFormData: {}
			}
		},
		methods: {
			toggle(type) {
				this.$data.popType = type
				this.$refs.popup.open()
			},
		},
		options: {
			virtualHost: true
		}
	}
</script>

<style>
</style>