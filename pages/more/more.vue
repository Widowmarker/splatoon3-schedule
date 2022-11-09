<template>
	<view id="more">
		更多
		<picker mode="selector" :range="range" @change="change" range-key="key">
			<view>语言选择</view>
		</picker>
		<button @click="cloudFn">日程名</button>
		<view class="" v-for="item in list" :key="item" style="color:#fff">
			{{item}}
		</view>
		<view class="language">
			<text class="">语言选择</text>
			<picker mode="selector" :range="range" @change="change" range-key="value" value="">
				<view>{{range[index].value}}</view>
			</picker>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue";
import { mainStore } from "../../store";
	const store = mainStore()
	const index = ref(0)
	const range = [{
			value: '中文（简体）',
			key: 'zh-CN'
		},
		{
			value: 'English（US）',
			key: 'en-US'
		}
	]
	// 选择语言
	const change = (e: any) => {
		index.value = e.detail.value
		const str = range[index.value].key
		store.getLanguage(str)
	}

	const list = ref([])
	const cloudFn = () => {
		wx.cloud.init()
		wx.cloud.callFunction({
			name: 'myCloudFn'
		}).then((res: any) => {
			// console.log(JSON.parse(res.result), '云函数response');
			list.value = Object.keys(JSON.parse(res.result).data)
		})
	}
</script>

<style lang="scss">
	#more {
		padding: 20rpx;

		.language {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 20rpx;
			background-color: #57be7b;
			box-sizing: border-box;

			text {
				width: 20%;
			}

			picker {
				flex: 1;
				text-align: right;
			}
		}
	}
</style>
