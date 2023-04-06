<template>
	<view class="about">
		<view class="container">
			<view class="splatoon title">ABOUT</view>
			<view class="content">
				<view>小程序中日程、打工、商店和祭典等数据均来自：https://splatoon3.ink/</view>
				<view>小程序源码地址：https://github.com/Widowmarker/splatoon3-schedule</view>
				<view>意见反馈邮箱：aa704472894@gmail.com</view>
				<view class="blessing">一起成为999的打工仔吧！！！</view>
			</view>
			<view class="hr"></view>
			<view class="author">
				小程序作者：Karen/Widowmaker
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

			.content {
				view {
					margin-bottom: 20rpx;
				}

				.blessing {
					padding-top: 10rpx;
					text-align: right;
				}
			}

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
