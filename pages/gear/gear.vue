<template>
	<view class="gear splatoon2" v-if="gear.pickupBrand">
		<!-- 精选品牌 -->
		<view class="pickup-brand">
			<view class="banner">
				<image :src="gear.pickupBrand.image.url" mode="aspectFill"></image>
			</view>
			<view class="today-pickup-container">
				<view class="today-pickup-brand">
					<view class="today-pickup-box">
						<view class="arrow-left"></view>
						<view class="arrow-right"></view>
						<view class="text-box">
							<view class="text">今日精选</view>
						</view>
					</view>
				</view>
				<view class="pickup-brand-box">
					<image src="https://splatoon3.ink/assets/gesotown-daily-drop-bg.aad4f190.png" mode=""></image>
					<text>{{lang[gear.pickupBrand.brand.id]}}</text>
				</view>
			</view>
			<!-- 结束时间 -->
			<view class="sale-end-time" v-if="gear.pickupBrand">
				到<text>{{saleEndTime}}</text>为止
			</view>
			<view class="brand-gears">
				<brand-gears-item :gearsList="gear.pickupBrand.brandGears" :pickupBrand="true"></brand-gears-item>
			</view>
			<view class="usualGearPower-box">
				<text>容易附加于 {{lang[gear.pickupBrand.brand.id]}} 的装备能力</text>
				<view class="info">
					<image :src="gear.pickupBrand.brand.usualGearPower.image.url" mode=""></image>
					<text>{{lang[gear.pickupBrand.brand.usualGearPower.__splatoon3ink_id]}}</text>
				</view>
			</view>
		</view>
		<!-- 目前贩卖的装备 -->
		<view class="limitedGears">
			<view class="title">目前贩卖的装备</view>
			<brand-gears-item :gearsList="gear.limitedGears"></brand-gears-item>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		storeToRefs
	} from 'pinia';
	import {
		computed,
	} from "vue";
	import {
		mainStore,
	} from '../../store'
	import {
		handleTime,
	} from '../../utils/common'
	import brandGearsItem from './brandGearsItem.vue'
	import {
		onPullDownRefresh,
		onShareAppMessage,
		onShow
	} from '@dcloudio/uni-app'

	const store = mainStore()
	// store.getGear().then(() => {
	// 	uni.hideLoading()
	// })
	const {
		gear,
		lang
	} = storeToRefs(store)

	// 结束时间
	const saleEndTime = computed(() => handleTime(gear.value?.pickupBrand?.saleEndTime))

	// 下拉刷新
	onPullDownRefresh(() => {
		store.getGear().then(() => {
			uni.stopPullDownRefresh()
		})
	})

	onShareAppMessage(() => {
		return {
			title: 'Splatoon3日程',
			path: '/pages/gear/gear'
		}
	})

	onShow(() => {
		if (!gear.value.pickupBrand) {
			// uni.showLoading({
			// 	title: '商城加载中...',
			// 	mask: true
			// })
		}
	})
</script>

<style lang="scss">
	.gear {
		padding-bottom: 30rpx;
		overflow: hidden;

		.pickup-brand {
			width: 100%;
			border-bottom: 2rpx dashed #56595e;

			.banner {
				width: 100%;

				image {
					width: 100%;
					height: 400rpx;
				}
			}

			.today-pickup-container {
				position: relative;
				height: 30rpx;
				width: 100%;
				transform: translateY(-80rpx) rotateZ(-3deg);

				// 今日精选
				.today-pickup-brand {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 120rpx;
					height: 40rpx;
					background-color: #91f4d0;
					padding: 8rpx 9rpx;
					z-index: 1;

					.today-pickup-box {
						position: relative;

						.arrow-left {
							position: absolute;
							left: 0;
							top: 0;
							width: 16rpx;
							height: 16rpx;
							background-color: #000;
							mask-image: url('../../static/arrow-left.svg');
						}

						.arrow-right {
							position: absolute;
							right: 0;
							bottom: 0;
							width: 16rpx;
							height: 16rpx;
							background-color: #000;
							mask-image: url('../../static/arrow-right.svg');
						}

						.text-box {
							padding: 0 8rpx;
							font-size: 24rpx;
							border: 1rpx solid #000;
							line-height: 36rpx;
							clip-path: polygon(-16rpx 16rpx, 16rpx 16rpx, 16rpx -16rpx, 100% -16rpx, 100% calc(100% - 16rpx), calc(100% - 16rpx) calc(100% - 16rpx), calc(100% - 16rpx) calc(100% + 16rpx), 0 calc(100% + 16rpx));
						}
					}
				}

				.pickup-brand-box {
					position: absolute;
					top: 40rpx;
					left: 50%;
					transform: translateX(-50%);
					width: 384rpx;

					image {
						position: absolute;
						top: 0;
						left: 0;
						width: 384rpx;
						height: 66rpx;
					}

					text {
						position: absolute;
						padding-left: 20rpx;
						color: #fff;
					}
				}

			}

			.sale-end-time {
				color: #e05238;
				font-size: 30rpx;
				text-align: center;

				text {
					font-size: 40rpx;
				}
			}

			.brand-gears {
				padding: 20rpx;

			}

			.usualGearPower-box {
				width: 80%;
				height: 180rpx;
				background-color: #1b1c1b;
				border-radius: 30rpx;
				margin: 20rpx auto;
				padding: 10rpx;
				color: #fff;
				text-align: center;
				box-sizing: border-box;

				.info {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80%;
					height: 80rpx;
					background-color: #323232;
					margin: 0 auto;
					margin-top: 20rpx;
					border-radius: 20rpx;

					image {
						width: 66rpx;
						height: 66rpx;
						background-color: #000;
						border-radius: 50%;
						margin-right: 10rpx;
						vertical-align: middle;
					}
				}
			}
		}

		.limitedGears {
			padding: 20rpx;

			.title {
				color: #e6fc6b;
				font-size: 34rpx;
				text-align: center;
				margin-bottom: 20rpx;
			}
		}
	}
</style>
