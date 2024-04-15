<template>
	<view class="eventBattle">
		<view class="block" v-for="(item,index) in eventSchedules" :key="index">
			<view class="title">{{lang[item.leagueMatchSetting.leagueMatchEvent.id]?.name}}</view>
			<view class="desc">{{lang[item.leagueMatchSetting.leagueMatchEvent.id].desc}}</view>
			<view class="stageAndTime">
				<view class="today-pickup-brand" v-if="item.eventHold">
					<view class="today-pickup-box">
						<view class="arrow-left"></view>
						<view class="arrow-right"></view>
						<view class="text-box">
							<view class="text">举行中</view>
						</view>
					</view>
				</view>
				<view class="">
					<modelIcon :modelType="item.leagueMatchSetting.vsRule.rule"></modelIcon>
					{{lang[item.leagueMatchSetting.vsRule.id]}}
				</view>
				<coopStage :leftUrl="item.leagueMatchSetting.vsStages[0].image.url"
					:leftName="item.leagueMatchSetting.vsStages[0].id"
					:rightUrl="item.leagueMatchSetting.vsStages[1].image.url"
					:rightName="item.leagueMatchSetting.vsStages[1].id"></coopStage>
				<view class="timePeriods">
					<view class="timePeriod splatoon2" v-for="(time,idx) in item.timePeriods" :key="idx">
						{{handleTimeDate(time.startTime)}} - {{handleTime(time.endTime)}}
					</view>
				</view>
			</view>
			<view class="regulation" v-html="lang[item.leagueMatchSetting.leagueMatchEvent.id].regulation"></view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		storeToRefs
	} from 'pinia';
	import {
		mainStore
	} from "../../store"
	import coopStage from '../../components/coopStage.vue'
	import modelIcon from "../../components/modelIcon.vue"
	import { handleTime, handleTimeDate } from '../../utils/common'
	const store = mainStore()
	const { eventSchedules, lang } = storeToRefs(store)
</script>

<style lang="scss" scoped>
	.eventBattle {
		padding: 20rpx;

		.block {
			padding: 20rpx;
			margin-bottom: 60rpx;
			color: #fff;
			background-color: #dd427d;
			border-radius: 20rpx;

			.title {
				font-size: 40rpx;
			}

			.desc {
				font-size: 32rpx;
			}

			.stageAndTime {
				position: relative;
				padding: 10rpx;
				margin-top: 10rpx;
				border-radius: 20rpx;
				background-color: rgb(24 24 27 / .7);

				// 今日精选
				.today-pickup-brand {
					position: absolute;
					top: 10rpx;
					right: 10rpx;
					transform: rotate(6deg);
					width: 120rpx;
					height: 40rpx;
					background-color: #5b3df5;
					padding: 8rpx 9rpx;
					z-index: 1;
					text-align: center;

					.today-pickup-box {
						position: relative;

						.arrow-left {
							position: absolute;
							left: 0;
							top: 0;
							width: 16rpx;
							height: 16rpx;
							background-color: #fff;
							mask-image: url('../../static/arrow-left.svg');
						}

						.arrow-right {
							position: absolute;
							right: 0;
							bottom: 0;
							width: 16rpx;
							height: 16rpx;
							background-color: #fff;
							mask-image: url('../../static/arrow-right.svg');
						}

						.text-box {
							padding: 0 8rpx;
							font-size: 24rpx;
							border: 1rpx solid #fff;
							line-height: 36rpx;
							clip-path: polygon(-16rpx 16rpx, 16rpx 16rpx, 16rpx -16rpx, 100% -16rpx, 100% calc(100% - 16rpx), calc(100% - 16rpx) calc(100% - 16rpx), calc(100% - 16rpx) calc(100% + 16rpx), 0 calc(100% + 16rpx));
						}
					}
				}
			}

			.timePeriods {
				margin-top: 30rpx;
			}

			.regulation {
				margin-top: 30rpx;
				padding: 15rpx;
				border-radius: 20rpx;
				background-color: rgb(24 24 27 / .5);
			}

			:deep(.modelIcon) {
				margin: 10rpx 0;
			}

			:deep(.coopStage) {
				.stage-box {
					// width: 50%;
				}
			}
		}
	}
</style>