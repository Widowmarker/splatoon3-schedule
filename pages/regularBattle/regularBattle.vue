<template>
	<view class="regularBattle splatoon">
		<view class="time-bar"></view>
		<view class="container">
			<view class="block" v-for="item in list" :key="item?.startTime"
				:class="!item.regularMatchSetting && 'empty'">
				<template v-if="item.regularMatchSetting">
					<view class="time state">{{handleTime(item.startTime)}}</view>
					<coopStage :leftUrl="item.regularMatchSetting.vsStages[0].image.url"
						:leftName="item.regularMatchSetting.vsStages[0].id"
						:rightUrl="item.regularMatchSetting.vsStages[1].image.url"
						:rightName="item.regularMatchSetting.vsStages[1].id"></coopStage>
				</template>
			</view>
			<view class="more" v-if="!isMore && list.length" @click="isMore = true">查看更多</view>
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
	} = storeToRefs(store)

	const isMore = ref(false)
	const list = computed(() => {
		return isMore.value ? regularBattleSchedules.value : regularBattleSchedules.value.slice(0, 4)
	})

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
