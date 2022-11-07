<template>
	<image class="modelIcon" :src="img" mode=""></image>
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
			case 'LOFT': // Tower Control 推塔
				return yagura;
				// Turf War
			default:
				return;
		}
	})
</script>

<style lang="scss">
	.modelIcon {
		width: 50rpx;
		height: 50rpx;
		vertical-align: middle;
	}
</style>
