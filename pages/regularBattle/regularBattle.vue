<template>
	<view class="regularBattle splatoon">
		<view class="time-bar"></view>
		<view class="container">
			<view class="block" v-for="item in list" :key="item?.startTime">
				<template v-if="item">
					<view class="time state">{{handleTime(item.startTime)}}</view>
					<coopStage :leftUrl="item.stages[0]"
						:leftName="item.stages[0]"
						:rightUrl="item.stages[1]"
						:rightName="item.stages[1]"></coopStage>
				</template>
				<template v-else>
					<!-- 祭典日程 -->
					<view class="time state">{{handleTime(item.startTime)}}</view>
					<view class="challenge-and-open" v-for="(anarchy,idx) in item.regularMatchSetting" :key="idx">
						<view class="model">
							祭典比赛
							<text class="splatoon2">{{typeObj[anarchy.festMode]}}</text>
						</view>
						<!-- 地图 -->
						<coopStage :leftUrl="anarchy.vsStages[0].image.url" :leftName="anarchy.vsStages[0].id"
							:rightUrl="anarchy.vsStages[1].image.url" :rightName="anarchy.vsStages[1].id">
						</coopStage>
					</view>
				</template>
			</view>
			<view class="more" v-if="!isMore && list.length" @click="isMore = true">查看更多</view>
		</view>
		<view v-if="!fest" class="eventBtn" @click="toEventBattle">
			<image src="../../static/event.svg" mode=""></image>活动比赛
		</view>
	</view>
</template>

<script setup lang="ts">
	import coopStage from '../../components/coopStage.vue'
	import {
		storeToRefs
	} from 'pinia';
	import {
		mainStore
	} from "../../store"
	import {
		handleTime
	} from "../../utils/common"
	import {
		computed,
		ref
	} from 'vue';
	import {
		onPullDownRefresh,
		onShareAppMessage
	} from '@dcloudio/uni-app'

	const store = mainStore()
	const {
		regularBattleSchedules,
		fest
	} = storeToRefs(store)

	const isMore = ref(false)
	const list = computed(() => {
		return isMore.value ? regularBattleSchedules.value : regularBattleSchedules.value.slice(0, 4)
	})

	const typeObj = {
		'CHALLENGE': '挑战',
		'REGULAR': '开放'
	}

	const toEventBattle = () => {
		uni.navigateTo({
			url: './eventBattle'
		})
	}

	// 下拉刷新
	onPullDownRefresh(() => {
		store.getSchedules().then(() => {
			uni.stopPullDownRefresh()
		})
	})

	onShareAppMessage(() => {
		return {
			title: 'Splatoon3日程',
			path: '/pages/regularBattle/regularBattle'
		}
	})
</script>

<style lang="scss" scoped>
	.regularBattle {
		position: relative;
		padding-bottom: 50rpx;
		min-height: 100vh;

		.time-bar {
			position: absolute;
			width: 20rpx;
			height: 100%;
			background-color: #81913d;
		}

		.container {
			padding: 0 30rpx 0 50rpx;
			overflow: hidden;

			.block {
				position: relative;
				height: 250rpx;
				margin-top: 32rpx;

				.state {
					position: absolute;
					left: -20rpx;
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

				:deep(.coopStage) {
					position: absolute;
					top: 70rpx;
				}


				&.fest {
					:deep(.coopStage) {
						position: static;
						top: 0rpx;
					}
				}

				.challenge-and-open {
					padding-top: 50rpx;
					color: #fff;

					.model {
						margin-bottom: 5rpx;

						text {
							display: inline-block;
							background-color: #5a3cf4;
							padding: 0 10rpx;
							line-height: 40rpx;
						}
					}
				}
			}

			.fest {
				height: 550rpx;
			}

			.empty {
				height: 0;
				margin-top: 0;
			}

			.more {
				width: 200rpx;
				margin: 50rpx auto;
				background-color: rgba(0, 0, 0, .5);
				border-radius: 50rpx;
				text-align: center;
				color: #fff;
			}
		}

		.eventBtn {
			position: fixed;
			top: 20rpx;
			right: 0rpx;
			width: 200rpx;
			border-radius: 30rpx 0 0 30rpx;
			background-color: #1a1b20;
			color: #fff;
			text-align: center;

			image {
				width: 50rpx;
				height: 50rpx;
				vertical-align: -12rpx;
				margin-right: 5rpx;
			}
		}
	}
</style>