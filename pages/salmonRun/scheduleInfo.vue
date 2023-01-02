<template>
	<view class="block" :class="index === 0 && 'first'">
		<!-- 时间 -->
		<view class="time-range">
			<image src="../../static/salmon-run-selected.png" mode=""></image>
			<text class="splatoon2">{{handleTime(scheduleInfo?.startTime)}} -
				{{handleTime(scheduleInfo?.endTime)}}</text>
		</view>
		<view class="info">
			<!-- 地图 -->
			<view class="map-box">
				<image v-if="scheduleInfo.source" :src="scheduleInfo.setting.coopStage.image.url" mode="aspectFill"
					class="map">
				</image>
				<image v-else :src="mapImgList[scheduleInfo.setting.coopStage.id]"
					@error="errorHandle($event,scheduleInfo)" mode="" class="map"></image>
				<text class="splatoon2">{{lang[scheduleInfo.setting.coopStage.id]}}</text>
			</view>
			<!-- 武器 -->
			<view class="weapons-box">
				<text>提供武器</text>
				<view class="weapons">
					<image :src="weapon.image.url" mode="" v-for="weapon in scheduleInfo.setting.weapons"
						:key="scheduleInfo.__splatoon3ink_id"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		defineProps
	} from 'vue'
	import {
		handleTime
	} from '../../utils/common'
	import {
		mainStore
	} from "../../store"
	import {
		storeToRefs
	} from 'pinia';
	defineProps({
		scheduleInfo: {
			type: Object,
			default: () => ({})
		},
		index: {
			type: Number,
			default:1
		}
	})
	const store = mainStore()
	const {
		lang,
		mapImgList,
	} = storeToRefs(store)

	const errorHandle = (e: any, item: any) => {
		if (e.type === 'error') item.source = true
	}
</script>

<style lang="scss" scoped>
	.block {
		width: 100%;
		padding-top: 50rpx;

		// &:first-child {
		// 	padding-top: 120rpx;
		// 	padding-bottom: 65rpx;
		// }
		&.first {
			padding-top: 120rpx;
			padding-bottom: 65rpx;
		}

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
</style>
