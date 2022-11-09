<template>
	<view>
		更多
		<picker mode="selector" :range="range" @change="change" range-key="key">
			<view>语言选择</view>
		</picker>
		<button @click="cloudFn">日程名</button>
		<view class="" v-for="item in list" :key="item" style="color:#fff">
			{{item}}
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue";
	const range = [{
			value: '中文',
			key: 'zh'
		},
		{
			value: '英文',
			key: 'en'
		}
	]
	const change = (value: any) => {
		// console.log(value);
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

</style>
