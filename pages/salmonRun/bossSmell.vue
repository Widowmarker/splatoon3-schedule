<template>
	<view class="bossSmell">
		<view class="container splatoon">
			<view class="row">
				<text>队伍气味值</text>
				<text>触发概率</text>
			</view>
			<view class="row" v-for="(item,index) in list" :key="index">
				<text>{{item.teamSmell}}</text>
				<text>{{item.value}}</text>
			</view>
		</view>
		<view class="ps">
			PS：每个玩家的气味值最高为5点，4个玩家加起来总共20点，是否触发BOSS战依据团队总共的气味值来决定，如下表。
			<br />
			例如：开始该局打工时，4位玩家的气味值都为4点，总共16点，那么就是有60%的机率遇上BOSS
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		onShareAppMessage
	} from '@dcloudio/uni-app'

	const list = [
		{ teamSmell: 20, value: '100%' },
		{ teamSmell: 19, value: '89.0625%' },
		{ teamSmell: 18, value: '78.75%' },
		{ teamSmell: 17, value: '69.0625%' },
		{ teamSmell: 16, value: '60%' },
		{ teamSmell: 15, value: '51.5625%' },
		{ teamSmell: 14, value: '43.75%' },
		{ teamSmell: 13, value: '36.5625%' },
		{ teamSmell: 12, value: '30%' },
		{ teamSmell: 11, value: '24.0625%' },
		{ teamSmell: 10, value: '18.75%' },
		{ teamSmell: 9, value: '14.0625%' },
		{ teamSmell: 8, value: '10%' },
		{ teamSmell: 7, value: '6.5625%' },
		{ teamSmell: 6, value: '3.75%' },
		{ teamSmell: 5, value: '1.5625%' },
		{ teamSmell: 4, value: '0%' },
		{ teamSmell: 3, value: '0%' },
		{ teamSmell: 2, value: '0%' },
		{ teamSmell: 1, value: '0%' },
		{ teamSmell: 0, value: '0%' },
	]

	onShareAppMessage(() => {
		return {
			title: 'Splatoon3日程',
			path: '/pages/salmonRun/bossSmell'
		}
	})
</script>

<style lang="scss" scoped>
	.bossSmell {
		padding: 30rpx;

		.container {
			padding: 0 20rpx;
			background-color: #eaecef;
			border-radius: 20rpx;
		}

		.row {
			display: flex;
			justify-content: space-between;
			border-bottom: 1rpx solid #ccc;

			&:nth-child(2n) {
				background-color: #dee0e3;
			}

			text {
				flex: 1;
			}
		}

		.ps {
			padding: 10rpx;
			margin-top: 30rpx;
			border-radius: 20rpx;
			background-color: #eaecef;
		}
	}
</style>