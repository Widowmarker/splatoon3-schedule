<template>
	<view class="fest splatoon2">
		<view class="block" v-for="item in festList" :key="item.__splatoon3ink_id">
			<!-- 标题 -->
			<view class="title">{{lang[item.__splatoon3ink_id].title}}</view>
			<!-- 胜利队伍 -->
			<view class="win-team">
				<view v-for="team in item.teams" :key="team.id">{{team.result?.isWinner ? 'WIN!' : ''}}</view>
			</view>
			<!-- 祭典封面 -->
			<image v-if="!festImgList[item.id] || item.source" :src="item.image.url" mode=""></image>
			<image v-else :src="festImgList[item.id]" mode="" @error="errorHandle($event,item)"></image>
			<!-- 队伍名称 -->
			<view class="teamNames">
				<view class="flex-1" v-for="(team,i) in item.teams" :key='team.id'>
					<view class="teamName-outbox"
						:style="{background: `rgba(${team.color.r * 255}, ${team.color.g * 255}, ${team.color.b * 255}, ${team.color.a})`}">
						<view class="teamName">
							<view class="arrow-left"></view>
							<view class="arrow-right"></view>
							<view class="text-box">{{lang[item.__splatoon3ink_id].teams[i].teamName}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 祭奠时间 -->
			<view class="time-range">
				{{handleTime(item.startTime)}}
				-
				{{handleTime(item.endTime)}}
			</view>
			<!-- 结果 -->
			<view class="result" v-if="item.teams[0].result">
				<view class="mode">
					<view>法螺获得率</view>
					<view>得票率</view>
					<view>开放</view>
					<view>挑战</view>
					<view v-if="item.teams[0].result.tricolorContributionRatio">三色夺宝比赛</view>
				</view>
				<view class="result-all">
					<view class="result-item" v-for="team in item.teams" :key='team.id'>
						<!-- 队伍图标 -->
						<view class="team-icon"
							:style="{background: `rgba(${team.color.r * 255}, ${team.color.g * 255}, ${team.color.b * 255}, ${team.color.a})`}">
							<image v-if="!festImgList[team.id] || item.source" :src="team.image.url" mode=""></image>
							<image v-else :src="festImgList[team.id]" mode="" @error="errorHandle($event,item)"></image>
						</view>
						<!-- 法螺获得率 -->
						<view :class="{Top:team.result.isHoragaiRatioTop}">
							{{(team.result.horagaiRatio * 100).toFixed(2)}}%
						</view>
						<!-- 得票率 -->
						<view :class="{Top:team.result.isVoteRatioTop}">{{(team.result.voteRatio * 100).toFixed(2)}}%
						</view>
						<!-- 开放 -->
						<view :class="{Top:team.result.isRegularContributionRatioTop}">
							{{(team.result.regularContributionRatio * 100).toFixed(2)}}%
						</view>
						<!-- 挑战 -->
						<view :class="{Top:team.result.isChallengeContributionRatioTop}">
							{{(team.result.challengeContributionRatio * 100).toFixed(2)}}%
						</view>
						<!-- 三色夺宝比赛 -->
						<view :class="{Top:team.result.isTricolorContributionRatioTop}"
							v-if="team.result.tricolorContributionRatio">
							{{(team.result.tricolorContributionRatio * 100).toFixed(2)}}%
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		storeToRefs
	} from 'pinia';
	import {
		mainStore
	} from '../../store';
	import {
		handleTime
	} from '../../utils/common'
	import {
		onShow
	} from '@dcloudio/uni-app'

	const store = mainStore()
	const {
		lang,
		festList,
		festImgList
	} = storeToRefs(store)
	if (!festList.value) store.getFest().then(() => uni.hideLoading())

	// 发生错误时用原图地址
	const errorHandle = (e : any, item : any) => {
		if (e.type === 'error') item.source = true
	}

	onShow(() => {
		if (!festList.value) {
			uni.showLoading({
				title: '祭奠信息加载中...',
				mask: true
			})
		}
	})
</script>

<style lang="scss" scoped>
	.fest {
		padding: 20rpx 0;

		.block {
			position: relative;
			width: 700rpx;
			margin: 20rpx auto 50rpx;
			padding: 10px 0;
			background-color: #54545b;
			border-radius: 20rpx;
			text-align: center;

			.title {
				display: inline-block;
				text-align: center;
				color: #fff;
				margin-bottom: 30rpx;
				padding: 10rpx 20rpx 10rpx 35rpx;
				text-shadow: 1rpx 1rpx 0 #000;
				background-color: rgba(0, 0, 0, .2);
				border-radius: 40rpx;
			}

			.win-team {
				position: absolute;
				transform: translateY(-36rpx);
				display: flex;
				width: 100%;

				&>view {
					flex: 1;
					font-size: 36rpx;
					color: #fff;
					text-shadow: 2rpx 2rpx 0 #000;
				}
			}

			image {
				width: 700rpx;
				height: 280rpx;
			}

			.teamNames {
				display: flex;
				text-shadow: 1rpx 1rpx 0 #000;
				color: #fff;
				margin-top: -30rpx;

				.flex-1 {
					flex: 1;
				}

				.teamName-outbox {
					position: relative;
					padding: 8rpx 9rpx;
					margin: 0 auto;
					transform: rotateZ(-3deg);
					width: fit-content;
				}

				.teamName {
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
						padding: 0 15rpx;
						font-size: 24rpx;
						border: 1rpx solid #fff;
						line-height: 36rpx;
						clip-path: polygon(-16rpx 16rpx, 16rpx 16rpx, 16rpx -16rpx, 100% -16rpx, 100% calc(100% - 16rpx), calc(100% - 16rpx) calc(100% - 16rpx), calc(100% - 16rpx) calc(100% + 16rpx), 0 calc(100% + 16rpx));
					}
				}

			}

			.time-range {
				margin-top: 18rpx;
				margin-bottom: 10rpx;
				text-shadow: 1rpx 1rpx 0 #000;
				color: rgb(234 255 61 / 1);
			}

			.result {
				display: flex;
				padding-top: 60rpx;
				margin: 0 10rpx;
				text-shadow: 1rpx 1rpx 0 #000;
				color: #fff;
				background-color: rgba(0, 0, 0, .2);
				border-radius: 20rpx;

				.mode {
					width: 200rpx;

					&>view {
						margin-bottom: 10rpx;
					}
				}

				.result-all {
					flex: 1;
					display: flex;
					justify-content: space-around;

					.result-item {
						position: relative;

						.team-icon {
							display: grid;
							place-items: center;
							position: absolute;
							width: 100%;
							height: 40rpx;
							border-radius: 8rpx;
							transform: translateY(-50rpx);

							image {
								width: 35rpx;
								height: 35rpx;
							}
						}


						&>view {
							margin-bottom: 10rpx;
						}
					}

					.Top {
						color: rgb(234 255 61 / 1);
					}
				}
			}
		}
	}
</style>