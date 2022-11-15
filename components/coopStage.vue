<template>
	<!-- 场地组件 -->
	<view class="coopStage">
		<view class="stage-box image-left">
			<image v-if="leftSource" :src="leftUrl" mode=""></image>
			<image v-else :src="mapUrl[leftName]" @error="leftError" mode=""></image>
			<text class="splatoon2">{{lang[leftName]}}</text>
		</view>
		<view class="stage-box image-right">
			<image v-if="rightSource" :src="rightUrl" mode=""></image>
			<image v-else :src="mapUrl[rightName]" @error="rightError" mode=""></image>
			<text class="splatoon2">{{lang[rightName]}}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		storeToRefs
	} from "pinia";
	import {
		defineProps,
		ref
	} from "vue"
	import {
		mainStore
	} from "../store";
	import {
		mapUrl
	} from '../utils/imgUrls'
	const props = defineProps({
		// 图片地址
		leftUrl: {
			type: String,
		},
		// 名称id
		leftName: {
			type: String,
		},
		rightUrl: {
			type: String,
		},
		rightName: {
			type: String,
		}
	})
	const store = mainStore()
	const {
		lang
	} = storeToRefs(store)

	// 是否使用原地址
	const leftSource = ref(false)
	const rightSource = ref(false)

	const leftError = (e) => {
		if (e.type === 'error') leftSource.value = true
	}

	const rightError = (e) => {
		if (e.type === 'error') rightSource.value = true
	}
</script>

<style lang="scss">
	.coopStage {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 160rpx;

		.stage-box {
			position: relative;
			width: 49.5%;

			image {
				width: 100%;
				height: 100%;
				object-fit: cover;
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
				color: #fff;
				font-size: 24rpx;
			}
		}

		.image-left {
			image {
				border-radius: 20rpx 0 0 20rpx;
			}
		}

		.image-right {
			image {
				border-radius: 0 20rpx 20rpx 0;
			}
		}
	}
</style>
