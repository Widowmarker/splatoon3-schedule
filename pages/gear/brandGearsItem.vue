<template>
	<view class="brand-gears-item" v-for="item in gearsList" :key="item.id">
		<image :src="item.gear.image.url" mode=""></image>
		<view class="brand-gears-item-info">
			<view class="end-time">
				还剩{{surplusTime(item.saleEndTime)}}小时 <text v-if="pickupBrand">精选</text>
			</view>
			<view class="gear-name">
				<image :src="item.gear.brand.image.url" mode=""></image>
				<text>{{lang[item.gear.__splatoon3ink_id]}}</text>
			</view>
			<view class="gear-power">
				<image :src="item.gear.primaryGearPower.image.url" mode="" class="primaryGearPower"></image>
				<image v-for="(power,index) in item.gear.additionalGearPowers" :key="index"
					src="../../static/unknown.png" mode="" class="additionalGearPowers"></image>
			</view>
		</view>
		<!-- 价格 -->
		<view class="price splatoon">
			<image src="../../static/coin.svg" mode=""></image>
			{{item.price}}
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		storeToRefs
	} from "pinia";
	import {
		mainStore
	} from "../../store";
	import {
		surplusTime
	} from "../../utils/common";
	defineProps({
		gearsList: {
			type: Array,
			default: () => []
		},
		pickupBrand: {
			type: Boolean,
			default: false
		}
	})

	const store = mainStore()
	store.getGear()
	const {
		gear,
		lang
	} = storeToRefs(store)
</script>

<style lang="scss">
	.brand-gears-item {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: 200rpx;
		margin-bottom: 10rpx;
		padding-left: 20rpx;
		background-color: #3c4148;
		border-radius: 20rpx;
		box-sizing: border-box;

		image {
			width: 160rpx;
			height: 160rpx;
			margin-right: 20rpx;
		}

		.brand-gears-item-info {
			height: 100%;
			padding: 10rpx 0;
			box-sizing: border-box;

			.end-time {
				color: #fbea6b;
				font-weight: 400;

				text {
					display: inline-block;
					padding: 2rpx 4rpx;
					color: #000;
					background-color: #fbea6b;
					line-height: 32rpx;
					font-size: 24rpx;
					font-weight: 700;
				}
			}

			.gear-name {
				color: #fff;
				font-size: 32rpx;

				image {
					width: 48rpx;
					height: 48rpx;
					background-color: #fff;
					border-radius: 10rpx;
					vertical-align: middle;
					margin-right: 10rpx;
				}
			}

			.gear-power {
				margin-top: 10rpx;

				image {
					background-color: #000;
					border-radius: 50%;
					margin-right: 8rpx;
				}

				.primaryGearPower {
					width: 48rpx;
					height: 48rpx;
				}

				.additionalGearPowers {
					width: 38rpx;
					height: 38rpx;
				}
			}
		}

		.price {
			position: absolute;
			right: 0;
			width: 180rpx;
			bottom: 20rpx;
			padding: 0 10rpx;
			background-color: #1b1a1a;
			color: #fff;
			line-height: 48rpx;

			image {
				width: 40rpx;
				height: 40rpx;
				margin-right: 0;
				vertical-align: sub;
			}
		}
	}
</style>
