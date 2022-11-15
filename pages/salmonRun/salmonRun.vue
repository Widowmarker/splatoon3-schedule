<template>
	<view class="salmonRun splatoon">
		<view class="time-bar">
			<view class="state open">Open!</view>
			<view class="state next">Next!</view>
		</view>
		<view class="container">
			<view class="block" v-for="item in salmonRunSchedules" :key="item?.startTime">
				<!-- 时间 -->
				<view class="time-range">
					<image src="../../static/salmon-run-selected.png" mode=""></image>
					<text class="splatoon2">{{handleTime(item?.startTime)}} - {{handleTime(item?.endTime)}}</text>
				</view>
				<view class="info">
					<!-- 地图 -->
					<view class="map-box">
						<image v-if="item.source" :src="item.setting.coopStage.image.url" mode="" class="map"></image>
						<image v-else :src="mapUrl[item.setting.coopStage.id]" @error="errorHandle($event,item)" mode=""
							class="map"></image>
						<text class="splatoon2">{{lang[item.setting.coopStage.id]}}</text>
					</view>
					<!-- 武器 -->
					<view class="weapons-box">
						<text>提供武器</text>
						<view class="weapons">
							<image :src="weapon.image.url" mode="" v-for="weapon in item.setting.weapons"
								:key="item.__splatoon3ink_id"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		defineComponent,
		ref
	} from "vue";
	import {
		storeToRefs
	} from 'pinia'
	import {
		mainStore
	} from "../../store"
	import {
		handleTime
	} from '../../utils/common'
	import {
		mapUrl
	} from '../../utils/imgUrls'
	import {
		onPullDownRefresh,
		onShareAppMessage
	} from '@dcloudio/uni-app'

	export default defineComponent({
		setup() {
			onShareAppMessage(() => {
				return {
					title: 'Splatoon3日程',
					path: '/pages/salmonRun/salmonRun'
				}
			})

			const store = mainStore()

			const {
				salmonRunSchedules,
				lang
			} = storeToRefs(store)


			// 下拉刷新
			onPullDownRefresh(() => {
				store.getSchedules().then(() => {
					uni.stopPullDownRefresh()
				})
			})

			const errorHandle = (e, item) => {
				if (e.type === 'error') item.source = true
			}

			return {
				handleTime,
				salmonRunSchedules,
				lang,
				mapUrl,
				errorHandle
			}
		}

	})
</script>

<style lang="scss" scoped>
	.salmonRun {
		position: relative;
		padding-bottom: 60rpx;
		min-height: 100vh;

		.time-bar {
			position: absolute;
			width: 20rpx;
			height: 100%;
			background-color: #81913d;

			.state {
				position: absolute;
				left: 30rpx;
				padding: 0 20rpx;
				border-radius: 100rpx;
				background-color: #edfe65;
				line-height: 40rpx;

				&:before {
					position: absolute;
					left: -30rpx;
					top: 50%;
					transform: translateY(-50%);
					content: '';
					width: 30rpx;
					height: 10rpx;
					background-color: #edfe65;
				}
			}

			.open {
				top: 50rpx;
			}

			.next {
				top: 390rpx;
			}
		}

		.container {
			padding: 0 30rpx 0 50rpx;
			color: #ffffff;

			.block {
				width: 100%;
				padding-top: 50rpx;

				&:first-child {
					padding-top: 120rpx;
					padding-bottom: 65rpx;
				}

				.time-range {
					image {
						width: 66rpx;
						height: 66rpx;
						margin-right: 15rpx;
						vertical-align: middle;
					}
				}

				.info {
					display: flex;
					border-radius: 20rpx;
					background-color: #3b4049;

					.map-box {
						position: relative;
						flex: 1;
						height: 160rpx;

						.map {
							width: 100%;
							height: 100%;
							object-fit: cover;
							border-radius: 20rpx 0 0 20rpx;
						}

						text {
							position: absolute;
							bottom: -20rpx;
							left: 50%;
							transform: translateX(-50%);
							background-color: #000000;
							line-height: 45rpx;
							padding: 0 10rpx;
							white-space: nowrap;
							font-size: 24rpx;
						}
					}

					.weapons-box {
						flex: 1;
						text-align: center;

						.weapons {
							display: flex;
							justify-content: space-between;
							padding: 15rpx;
							margin: 0 15rpx;
							border-radius: 50rpx;
							background-color: #000000;

							image {
								width: 60rpx;
								height: 60rpx;
							}
						}
					}
				}
			}
		}
	}
</style>
