<template>
	<view class="block" :class="index === 0 && 'first'">
		<!-- 时间 -->
		<view class="time-range">
			<!-- <image src="../../static/salmon-run-selected.png" mode=""></image> -->
			<modelIcon :modelType="modelType"></modelIcon>
			<text class="splatoon2">{{handleTimeDate(scheduleInfo?.startTime)}} -
				{{handleTime(scheduleInfo?.endTime)}}</text>
			<!-- <image :src="kingImgList[scheduleInfo.__splatoon3ink_king_salmonid_guess] " mode="" class="king"></image> -->
		</view>
		<view class="info" :class="{hasRare:hasRare}">
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
				<!-- <text>提供武器</text> -->
				<image :src="kingImgList[scheduleInfo.__splatoon3ink_king_salmonid_guess] " mode="" class="king">
				</image>
				<view class="weapons">
					<view class="" v-for="weapon in scheduleInfo.setting.weapons" :key="scheduleInfo.__splatoon3ink_id">
						<image v-if="!weaponImgList[simplifyName(weapon.name)] || weapon.source" :src="weapon.image.url"
							mode=""></image>
						<image v-else :src="weaponImgList[simplifyName(weapon.name, weapon.image.url)]" mode=""
							@error="errorHandle($event,weapon)"></image>
					</view>
				</view>
			</view>
			<!-- 熊武器 -->
			<view class="rare-weapons-box" v-if="hasRare">
				<view class="weapon" v-for="item in filterRareArr" :key="item.id" :class="{active: item.active}">
					<image :src="weaponImgList[item.id + '']" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		computed,
		defineProps
	} from 'vue'
	import {
		handleTime,
		handleTimeDate,
		simplifyName
	} from '../../utils/common'
	import {
		mainStore
	} from "../../store"
	import {
		storeToRefs
	} from 'pinia';
	import modelIcon from "../../components/modelIcon.vue"
	const props = defineProps({
		scheduleInfo: {
			type: Object,
			default: () => ({})
		},
		index: {
			type: Number,
			default: 1
		},
		modelType: {
			type: String,
			default: 'COOP'
		}
	})
	const store = mainStore()
	const {
		lang,
		mapImgList,
		weaponImgList,
		kingImgList,
		rareArr
	} = storeToRefs(store)

	// 发生错误时用原图地址
	const errorHandle = (e : any, item : any) => {
		if (e.type === 'error') item.source = true
	}

	const allRare = [20900, 26900, 22900, 23900, 27900, 28900, 25900]
	const filterRareArr = computed(() => {
		return allRare.map(item => {
			return {
				id: item,
				active: rareArr.value.includes(item)
			}
		})
	})
	// 是否有问号武器且是否已知熊武器
	const hasRare = computed(() => props.scheduleInfo.setting.weapons.some(v => v.name === 'Random') && rareArr.value.length)
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
			position: relative;
			display: flex;
			border-radius: 20rpx;
			background-color: #3b4049;
			height: 160rpx;

			&.hasRare {
				height: 280rpx;
			}

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
					line-height: 36rpx;
					padding: 0 4rpx;
					white-space: nowrap;
					font-size: 24rpx;
				}
			}

			.weapons-box {
				flex: 1;
				// text-align: center;

				.king {
					width: 45rpx;
					height: 45rpx;
					padding-left: 15rpx;
					margin: 0 15rpx;
					margin-bottom: -12rpx;
				}

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

		.rare-weapons-box {
			position: absolute;
			top: 190rpx;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			justify-content: space-between;
			width: calc(100% - 30rpx);
			background-color: #000;
			border-radius: 50rpx;

			.weapon {
				padding: 10rpx;
				border-radius: 50rpx;
				height: 60rpx;
				opacity: .6;

				image {
					width: 60rpx;
					height: 60rpx;
				}

				&.active {
					opacity: 1;
					background-color: #d85a2a;
				}
			}
		}
	}
</style>