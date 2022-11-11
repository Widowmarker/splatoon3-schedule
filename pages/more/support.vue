<template>
	<view id="about">
		<view class="container">
			💗感谢您的支持💗
			<view class="hr"></view>
			<view class="img-box" @click="previewImage">
				<image :src="QRCodeImg" mode="" :show-menu-by-longpress="true">
				</image>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const QRCodeImg = ref('')
	const getImg = () => {
		wx.cloud.init()
		wx.cloud.getTempFileURL({
			fileList: [{
				fileID: 'cloud://splatoon3-schedule-5dtcrb884d9ac.7370-splatoon3-schedule-5dtcrb884d9ac-1314894234/IMG_8965.jpg'
			}]
		}).then(res => {
			QRCodeImg.value = res.fileList[0].tempFileURL
		})
	}
	getImg()

	const previewImage = () => {
		uni.previewImage({
			urls: [QRCodeImg.value],
			longPressActions:{
				
			}
		})
	}
</script>

<style lang="scss">
	#about {
		padding: 40rpx;
		text-align: center;

		.container {
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #fff;
			background-image: linear-gradient(45deg, #eefe65, #9d44fd 50%, #8727ff);

			.hr {
				margin: 10rpx 0;
				border-bottom: 2rpx dashed #000;
			}

			.img-box {
				text-align: center;

				image {
					width: 300rpx;
					height: 300rpx;
				}
			}
		}
	}
</style>
