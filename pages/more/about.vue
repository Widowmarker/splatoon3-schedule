<template>
	<view class="about">
		<view class="container">
			<view class="splatoon title">ABOUT</view>
			<view class="content">
				<view>小程序中日程、打工、商店和祭典等数据均来自：https://splatoon3.ink/</view>
			</view>
			<view class="hr"></view>
			<view class="author">
				小程序作者：Karen/Widowmarker
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.about {
		padding: 40rpx;

		.container {
			padding: 20rpx;
			border-radius: 20rpx;
			background-color: #fff;
			background-image: linear-gradient(45deg, #eefe65, #9d44fd 50%, #8727ff);

			.title {
				font-size: 48rpx;
				// display: inline-block;
				// color: #9d44fd;
				// -webkit-text-fill-color: transparent;
				// text-fill-color: transparent;
				// -webkit-background-clip: text;
				// background-clip: text;
				// padding-bottom: 5px;
				// margin-bottom: -5px;
				// background-image: linear-gradient(45deg, #eefe65, #9d44fd 50%, #8727ff);
			}

			.content {}

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
