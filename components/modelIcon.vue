<template>
	<image class="modelIcon" :src="img" mode="" :class="[modelType]"></image>
</template>

<script setup>
	import {
		defineProps
	} from "vue"
	import {
		computed
	} from "vue"
	import area from "../static/area.svg"
	import asari from "../static/asari.svg"
	import hoko from "../static/hoko.svg"
	import yagura from "../static/yagura.svg"
	import coop from "../static/salmon-run-selected.png"
	import coopBigrun from "../static/coopBigrun.svg"
	import coopEggstra from "../static/coopEggstra.svg"
	import regular from "../static/regular.svg"

	const props = defineProps({
		modelType: {
			type: String,
			required: true
		}
	})

	const img = computed(() => {
		switch (props.modelType) {
			case 'AREA': // Splat Zones 区域
				return area;
			case 'CLAM': // Clam Blitz 蛤蜊
				return asari;
			case 'GOAL': // Rainmaker 抢鱼
				return hoko;
			case 'LIFT': // Tower Control 推塔 LOFT
				return yagura;
			case 'COOP': // 打工
				return coop;
			case 'COOPBIGRUN': // 大型跑
				return coopBigrun;
			case 'COOPEGGSTRA': // 团队竞赛
				return coopEggstra;
			case 'TURF_WAR': // Turf War
				return regular;
			default:
				return regular;
		}
	})
</script>

<style lang="scss">
	.modelIcon {
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
	}

	.COOP {
		width: 66rpx;
		height: 66rpx;
		margin-right: 15rpx;
	}

	.COOPBIGRUN,
	.COOPEGGSTRA {
		margin-right: 15rpx;
		padding: 5rpx 0;
	}
</style>