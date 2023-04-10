<template>
	<view class="salmonRun splatoon">
		<!-- 大型跑/团队竞赛 -->
		<view class="bigRun container" v-if="bigRunSchedules || teamSchedules">
			<image :src="bannerImage" mode="widthFix"></image>
			<view class="text">{{ bigRunSchedules ? '大型跑！' : '团队竞赛！' }}</view>
			<ScheduleInfo :scheduleInfo="bigRunSchedules ?? teamSchedules"></ScheduleInfo>
		</view>

		<!-- 正常打工日程 -->
		<view class="time-bar" :style="{height: (bigRunSchedules || teamSchedules) ? '65%' : '100%'}">
			<view class="state open">Open!</view>
			<view class="state next">Next!</view>
		</view>
		<view class="container">
			<view class="bossSmell" @click="toBossSmell">BOSS怒气表</view>
			<ScheduleInfo v-for="(item,index) in salmonRunSchedules" :key="item?.startTime" :scheduleInfo="item"
				:index="index"></ScheduleInfo>
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
		onPullDownRefresh,
		onShareAppMessage
	} from '@dcloudio/uni-app'
	import ScheduleInfo from './scheduleInfo.vue'

	export default defineComponent({
		components: {
			ScheduleInfo
		},
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
				lang,
				mapImgList,
				bigRunSchedules,
				teamSchedules,
				bannerImage
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

			const toBossSmell = () => {
				uni.navigateTo({
					url: './bossSmell'
				})
			}

			return {
				handleTime,
				salmonRunSchedules,
				lang,
				errorHandle,
				mapImgList,
				bigRunSchedules,
				teamSchedules,
				bannerImage,
				toBossSmell
			}
		}

	})
</script>

<style lang="scss" scoped>
	.salmonRun {
		position: relative;
		padding-bottom: 60rpx;
		min-height: 100vh;

		.bigRun {

			.text {
				text-align: center;
				font-size: 36rpx;
				color: #edfe64;
				line-height: 40rpx;
			}

			image {
				width: 100%;
			}

			&.container {
				padding: 0;
				padding-bottom: 30rpx;
				background-image: linear-gradient(45deg, #4b4b4b 25%, #575757 0, #575757 50%, #4b4b4b 0, #4b4b4b 75%, #575757 0);
				background-size: 100rpx 100rpx;

				:deep(.block) {
					padding: 0 30rpx;
					box-sizing: border-box;
				}
			}
		}

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
			position: relative;
			padding: 0 30rpx 0 50rpx;
			color: #ffffff;

			.bossSmell {
				position: absolute;
				right: 0;
				top: 40rpx;
				padding: 2rpx 20rpx 2rpx 30rpx;
				background-color: #000000;
				border-radius: 50rpx 0 0 50rpx;
			}

			.block {
				width: 100%;
				padding-top: 50rpx;

				// &:first-child {
				// 	padding-top: 120rpx;
				// 	padding-bottom: 65rpx;
				// }

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