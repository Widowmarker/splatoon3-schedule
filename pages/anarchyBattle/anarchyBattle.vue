<template>
	<view class="bankaraSchedules splatoon">
		<view class="time-bar"></view>
		<view class="container" v-if="!fest">
			<view class="block" v-for="item in list" :key="item?.startTime">
				<template v-if="item">
					<!-- 时间 -->
					<view class="time state">{{handleTime(item.startTime)}}</view>
					<view class="challenge-and-open" v-for="(anarchy,idx) in item.bankaraMatch" :key="idx">
						<!-- 真格模式 -->
						<view class="model">
							<modelIcon :modelType="anarchy.rule.toLocaleUpperCase()"></modelIcon>
							{{regularLanguage.rules[anarchy.rule]}}
							<text class="splatoon2">{{typeObj[anarchy.bankaraMode]}}</text>
						</view>
						<!-- 地图 -->
						<coopStage :leftUrl="anarchy.stages[0]" :leftName="anarchy.stages[0]"
							:rightUrl="anarchy.stages[1]" :rightName="anarchy.stages[1]">
						</coopStage>
					</view>
				</template>
			</view>
			<view class="more" v-if="!isMore && list.length" @click="isMore = true">查看更多</view>
		</view>
		<!-- <view class="fest-box splatoon2" v-else>
			<view>祭典比赛举行中！</view>
			<view class="fest-title">{{currentFest.title}}</view>
			<view class="title">三色夺宝攻击</view>
			<image :src="currentFest.tricolorStage.image.url" mode=""></image>
			<view>{{lang[currentFest.tricolorStage.id]}}</view>
		</view> -->
		<view v-if="!fest" class="xBtn" @click="toXBattle">
			<image src="../../static/x.svg" mode=""></image>X比赛
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
		onShareAppMessage
	} from '@dcloudio/uni-app'
	import coopStage from "../../components/coopStage.vue"
	import modelIcon from "../../components/modelIcon.vue"


	const store = mainStore()
	const {
		anarchyBattleSchedules,
		lang,
		fest,
		currentFest,
		regularLanguage
	} = storeToRefs(store)

	const typeObj = {
		'CHALLENGE': '挑战',
		'OPEN': '开放'
	}

	const isMore = ref(false)
	const list = computed(() => {
		return isMore.value ? anarchyBattleSchedules.value : anarchyBattleSchedules.value.slice(0, 2)
	})

	// 跳转到X比赛
	const toXBattle = () => {
		uni.navigateTo({
			url: './xBattle'
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
			path: '/pages/anarchyBattle/anarchyBattle'
		}
	})
</script>

<style lang="scss" scoped>
	.bankaraSchedules {
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

			.block {
				position: relative;
				height: 550rpx;
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
							border-radius: 8rpx;
						}
					}
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

		.fest-box {
			position: absolute;
			top: 100rpx;
			left: 50%;
			transform: translateX(-50%);
			width: 90%;
			padding: 0 20rpx;
			border-radius: 20rpx;
			background-color: #1a1b20;
			color: #fff;
			text-align: center;
			box-sizing: border-box;

			.fest-title {
				border-bottom: 2rpx dashed #fff;
			}

			image {
				width: 600rpx;
				height: 300rpx;
				object-fit: cover;
			}
		}

		.xBtn {
			position: fixed;
			top: 20rpx;
			right: 0rpx;
			width: 160rpx;
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