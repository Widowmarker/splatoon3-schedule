<template>
	<view class="xBattle splatoon">
		<view class="time-bar"></view>
		<view class="container">
			<view class="block" v-for="item in xBattleSchedules" :key="item?.startTime">
				<template v-if="item">
					<view class="time state">{{handleTime(item.startTime)}}</view>
					<view class="model">
						<modelIcon :modelType="item.rule.toLocaleUpperCase()"></modelIcon>
						{{regularLanguage.rules[item.rule]}}
					</view>
					<coopStage :leftUrl="item.stages[0]"
						:leftName="item.stages[0]"
						:rightUrl="item.stages[1]"
						:rightName="item.stages[1]"></coopStage>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import coopStage from '../../components/coopStage.vue'
	import modelIcon from "../../components/modelIcon.vue"
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
		onPullDownRefresh,
		onShareAppMessage
	} from '@dcloudio/uni-app'

	const store = mainStore()
	const {
		xBattleSchedules,
		lang,
		regularLanguage
	} = storeToRefs(store)

	// 下拉刷新
	onPullDownRefresh(() => {
		store.getSchedules().then(() => {
			uni.stopPullDownRefresh()
		})
	})

	onShareAppMessage(() => {
		return {
			title: 'Splatoon3日程',
			path: '/pages/anarchyBattle/xBattle'
		}
	})
</script>

<style lang="scss" scoped>
	.xBattle {
		position: relative;
		padding-bottom: 100rpx;
		min-height: 100vh;

		.time-bar {
			position: absolute;
			width: 20rpx;
			height: 100%;
			background-color: #5dc796;
		}

		.container {
			padding: 0 30rpx 0 50rpx;

			.block {
				position: relative;
				height: 250rpx;
				margin-top: 50rpx;

				&:first-child {
					margin-top: 0;
					padding-top: 32rpx;
				}

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

				.model {
					padding-top: 50rpx;
					margin-bottom: 5rpx;
					color: #fff;
				}
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
	}
</style>
