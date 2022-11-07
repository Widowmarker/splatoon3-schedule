<template>
	<view id="salmonRun">
		<view class="content splatoon">
			<view class="">NOW!</view>
			<view class="block">
				<!-- 时间 -->
				<view class="top-bar">
					<image src="../../assets/icon/salmon-run-selected.png" mode=""></image>
					<text class="splatoon2">11/4 2:00 AM - 11/5 2:00 PM</text>
				</view>
				<view class="bottom-bar">
					<!-- 地图 -->
					<image :src="list[0]?.setting.coopStage.image.url" mode=""></image>
					<!-- 武器 -->
					<view class="content-details">
						<text>提供的武器</text>
						<view class="weapon">
							<image v-for="item in list[0]?.setting.weapons" :key="item.__splatoon3ink_id"
								:src="item.image?.url" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<view class="next-time">
				Next Time
			</view>
			<view class="block" v-for="item in list.slice(1)">
				<!-- 时间 -->
				<view class="top-bar">
					<image src="../../assets/icon/salmon-run-selected.png" mode=""></image>
					<text class="splatoon2">{{handleTime(item.startTime)}} - {{handleTime(item.endTime)}}</text>
				</view>
				<view class="bottom-bar">
					<!-- 地图 -->
					<image :src="item.setting.coopStage.image.url" mode=""></image>
					<!-- 武器 -->
					<view class="content-details">
						<text>提供的武器</text>
						<view class="weapon">
							<image v-for="weapon in item.setting.weapons" :key="weapon.__splatoon3ink_id"
								:src="weapon.image.url" mode=""></image>
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
		handleTime
	} from '../../utils/common'

	export default defineComponent({
		setup() {
			const list = ref([])

			const getFn = () => {
				uni.request({
					url: 'https://splatoon3.ink/data/schedules.json',
					method: 'GET',
					success: (res) => {
						console.log(res);
						list.value = res.data.data.coopGroupingSchedule.regularSchedules.nodes
						console.log(list.value);
					}
				})
			}

			getFn()

			return {
				list,
				handleTime
			}
		}

	})
</script>

<style lang="scss">
	#salmonRun {
		display: flex;
		justify-content: center;
		padding: 20rpx;
		background-color: #000000;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			// width: 600rpx;
			width: 100%;
			// height: 1000rpx;
			background-color: #db5b2b;
			border-radius: 20rpx;
			// font-family: var(--font-family-s2);
			font-weight: bold;
			// color: #64da67;
			padding: 20rpx;
			// background-image: url('../../assets/imgs/salmonBg.png'), linear-gradient(180deg, rgba(2, 0, 36, .1) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, .2) 100%);
			// background-image: url('https://splatoon3.ink/assets/monsters-transparent-bg.53495e41.png'), linear-gradient(180deg, rgba(2, 0, 36, .1) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, .2) 100%);
			background-size: 600rpx;
			background-position: top center;


			.block {
				width: 98%;
				background-color: rgba(0, 0, 0, .5);
				border-radius: 20rpx;

				.top-bar {
					color: #ffffff;
					border-bottom: 1px dashed #ffffff;
					margin: 10rpx 15rpx;

					image {
						width: 60rpx;
						height: 60rpx;
						vertical-align: middle;
						margin-right: 20rpx;
					}
				}

				.bottom-bar {
					display: flex;
					padding: 10rpx 15rpx 20rpx;

					image {
						width: 45%;
						height: 160rpx;
						border-radius: 20rpx;
						object-fit: cover;
					}

					.content-details {
						flex: 1;
						text-align: center;

						text {
							color: #ffffff;
						}

						.weapon {
							margin-top: 15rpx;

							image {
								width: 70rpx;
								height: 70rpx;
								border-radius: 0;
							}
						}
					}
				}

			}

			.next-time {
				&~.block {
					margin: 15rpx 0;
				}
			}
		}
	}
</style>
