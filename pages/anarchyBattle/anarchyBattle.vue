<template>
	<view id="bankaraSchedules" class="splatoon">
		<view class="time-bar"></view>
		<view class="container">
			<view class="block" v-for="item in list" :key="item?.startTime">
				<!-- 时间 -->
				<view class="time state">{{handleTime(item.startTime)}}</view>
				<view class="challenge-and-open" v-for="(anarchy,idx) in item?.bankaraMatchSettings" :key="idx">
					<!-- 真格模式 -->
					<view class="model">
						<modelIcon :modelType="anarchy.vsRule.rule"></modelIcon>
						{{zhCN[anarchy.vsRule.id]}}
						<text class="splatoon2">{{typeObj[anarchy.mode]}}</text>
					</view>
					<!-- 地图 -->
					<coopStage :leftUrl="anarchy.vsStages[0].image.url" :leftName="anarchy.vsStages[0].id"
						:rightUrl="anarchy.vsStages[1].image.url" :rightName="anarchy.vsStages[1].id">
					</coopStage>
				</view>
			</view>
			<view class="more" v-if="!isMore" @click="isMore = true">查看更多</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		computed,
		ref
	} from "vue";
	import {
		storeToRefs
	} from 'pinia';
	import {
		mainStore
	} from '../../store';
	import {
		handleTime
	} from "../../utils/common"
	import {
		onPullDownRefresh,
	} from '@dcloudio/uni-app'
	import coopStage from "../../components/coopStage.vue"
	import modelIcon from "../../components/modelIcon.vue"


	const store = mainStore()
	const {
		anarchyBattleSchedules,
		zhCN
	} = storeToRefs(store)

	const typeObj = {
		'CHALLENGE': '挑战',
		'OPEN': '开放'
	}

	const isMore = ref(false)
	const list = computed(() => {
		return isMore.value ? anarchyBattleSchedules.value : anarchyBattleSchedules.value.slice(0, 2)
	})

	// 下拉刷新
	onPullDownRefresh(() => {
		store.getSchedules().then(() => {
			uni.stopPullDownRefresh()
		})
	})
</script>

<style lang="scss" scoped>
	#bankaraSchedules {
		position: relative;
		padding-bottom: 50rpx;
		min-height: 100vh;

		.time-bar {
			position: absolute;
			width: 20rpx;
			height: 100%;
			background-color: #8a4438;
		}

		.container {
			padding: 0 30rpx 0 50rpx;
			overflow: hidden;

			.block {
				position: relative;
				height: 550rpx;
				margin-top: 50rpx;

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
