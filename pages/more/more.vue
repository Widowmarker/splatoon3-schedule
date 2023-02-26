<template>
	<view class="more">
		<view class="avatar">
			<image class="little-buddy" src="../../static/little-buddy.png" mode=""></image>
		</view>
		<view class="language row">
			<text class="">语言选择</text>
			<picker mode="selector" :range="range" @change="change" range-key="value" :value="index">
				<view>{{range[index].value}}</view>
			</picker>
		</view>
		<view class="row" @click="toFest">祭奠</view>
		<view class="row" @click="toAbout">关于</view>
		<!-- <view class="row" @click="toSupport">支持作者</view> -->
	</view>
</template>

<script setup lang="ts">
	import {
		onMounted,
		ref
	} from "vue";
	import {
		mainStore
	} from "../../store";
	const store = mainStore()
	const index = ref(0)
	const range = [{
			value: '🇨🇳 中文(简体)',
			key: 'zh-CN'
		},
		{
			value: '🇨🇳 中文(台湾)',
			key: 'zh-TW'
		},
		{
			value: '🇩🇪 Deutsch)',
			key: 'de-DE'
		},
		{
			value: '🇺🇸 English (US)',
			key: 'en-US'
		},
		{
			value: '🇬🇧 English (GB)',
			key: 'en-GB'
		},
		{
			value: '🇪🇸 Español (ES)',
			key: 'es-ES'
		},
		{
			value: '🇲🇽 Español (MX)',
			key: 'es-MX'
		},
		{
			value: '🇫🇷 Français (FR)',
			key: 'fr-FR'
		},
		{
			value: '🇨🇦 Français (CA)',
			key: 'fr-CA'
		},
		{
			value: '🇮🇹 Italiano',
			key: 'it-IT'
		},
		{
			value: '🇯🇵 日本語',
			key: 'ja-JP'
		},
		{
			value: '🇰🇷 한국어',
			key: 'ko-KR'
		},
		{
			value: '🇳🇱 Nederlands',
			key: 'nl-NL'
		},
		{
			value: '🇷🇺 Русский',
			key: 'ru-RU'
		}
	]

	// 选择语言
	const change = (e: any) => {
		index.value = e.detail.value
		const str = range[index.value].key
		uni.showLoading({
			title: '切换语言中...',
			mask: true
		})
		store.getLanguage(str).then((res) => {
			if (res) {
				uni.hideLoading()
				uni.setStorage({
					key: 'language',
					data: str
				})
			}
		}).catch(() => {
			uni.showToast({
				title: '语言切换失败',
				icon: "error"
			})
		})
	}
	
	// 跳转到祭奠页
	const toFest = () => {
		uni.navigateTo({
			url:'./fest'
		})
	}

	// 跳转到关于页
	const toAbout = () => {
		uni.navigateTo({
			url: './about'
		})
	}

	// 跳转到支持页
	const toSupport = () => {
		uni.navigateTo({
			url: './support'
		})
	}

	onMounted(() => {
		uni.getStorage({
			key: 'language',
			fail() {},
			complete(res) {
				if (res.data) index.value = range.findIndex(item => item.key === res.data)
			}
		})
	})
</script>

<style lang="scss" scoped>
	.more {
		padding: 0 40rpx;

		.avatar {
			text-align: center;
			padding: 48rpx;

			.little-buddy {
				width: 131rpx;
				height: 175rpx;
			}
		}

		.row {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 20rpx;
			margin-bottom: 40rpx;
			border-radius: 20rpx;
			background-image: linear-gradient(-45deg, #eefe65 50%, #5b3df5 50%);
			box-sizing: border-box;

			&:nth-of-type(2n) {
				background-image: linear-gradient(-135deg, #eefe65 50%, #5b3df5 50%);
			}
		}

		.language {
			display: flex;
			justify-content: space-between;


			text {
				flex: 1;
			}

			picker {
				flex: 1;
				text-align: right;
			}
		}
	}
</style>
