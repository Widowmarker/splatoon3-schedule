<template>
	<view class="block" :class="index === 0 && 'first'">
		<!-- 时间 -->
		<view class="time-range">
			<image src="../../static/salmon-run-selected.png" mode=""></image>
			<text class="splatoon2">{{handleTime(scheduleInfo?.startTime)}} -
				{{handleTime(scheduleInfo?.endTime)}}</text>
			<image :src="kingImgList[scheduleInfo.__splatoon3ink_king_salmonid_guess]" mode="" class="king"></image>
		</view>
		<view class="info">
			<!-- 地图 -->
			<view class="map-box">
				<image v-if="!mapImgList[scheduleInfo.setting.coopStage.id] || scheduleInfo.source"
					:src="scheduleInfo.setting.coopStage.image.url" mode="aspectFill" class="map">
				</image>
				<image v-else :src="mapImgList[scheduleInfo.setting.coopStage.id]"
					@error="errorHandle($event,scheduleInfo)" mode="" class="map"></image>
				<text class="splatoon2">{{lang[scheduleInfo.setting.coopStage.id]}}</text>
			</view>
			<!-- 武器 -->
			<view class="weapons-box">
				<text>提供武器</text>
				<view class="weapons">
					<view class="" v-for="weapon in scheduleInfo.setting.weapons" :key="scheduleInfo.__splatoon3ink_id">
						<image v-if="!weaponImgList[simplifyName(weapon.name)] || weapon.source" :src="weapon.image.url"
							mode=""></image>
						<image v-else :src="weaponImgList[simplifyName(weapon.name)]" mode=""
							@error="errorHandle($event,weapon)"></image>
					</view>
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
		handleTime,
		simplifyName
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
			default: 1
		}
	})
	const store = mainStore()
	const {
		lang,
		mapImgList,
		weaponImgList,
		kingImgList
	} = storeToRefs(store)

	// 发生错误时用原图地址
	const errorHandle = (e : any, item : any) => {
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

				&.king {
					width: 45rpx;
					height: 45rpx;
					margin-left: 15rpx;
				}
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

					&>view {
						height: 60rpx;
					}

					image {
						width: 60rpx;
						height: 60rpx;
					}
				}
			}
		}
	}
</style>