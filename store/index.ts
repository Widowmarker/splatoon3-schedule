import { defineStore } from 'pinia'
export const mainStore = defineStore('main', {
	state: () => {
		return {
			regularBattleSchedules: [] as any, // 涂地日程
			anarchyBattleSchedules: [] as any, // 真格日程
			salmonRunSchedules: [], // 打工日程
			zhCN: {}
		}
	},
	getters: {},
	actions: {
		// 获取所有日程
		getSchedules() {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'https://splatoon3.ink/data/schedules.json',
					// url: 'http://localhost/json',
					method: 'GET',
					success: (res: any) => {
						console.log(res.data)
						const { data: { regularSchedules, bankaraSchedules, coopGroupingSchedule } } = res.data
						this.regularBattleSchedules = regularSchedules.nodes
						this.anarchyBattleSchedules = bankaraSchedules.nodes
						this.salmonRunSchedules = coopGroupingSchedule.regularSchedules.nodes
						console.log(bankaraSchedules.nodes, '真格');
						resolve(true)
					},
					fail: () => {
						reject(false)
					}
				})
			})
		},
		// 获取中文
		getCN() {
			uni.request({
				url: 'https://splatoon3.ink/data/locale/zh-CN.json',
				// url: 'http://localhost/zh',
				method: 'GET',
				success: (res: any) => {
					const { stages, rules } = res.data
					const all = { ...stages, ...rules }
					for (let key in all) {
						this.zhCN[key] = all[key].name
					}
				}
			})
		},
		getLanguage(language: string) {
			uni.request({
				url: `https://splatoon3.ink/data/locale/${language}.json`,
				method: 'GET',
				success: (res: any) => {
					const { stages, rules } = res.data
					const all = { ...stages, ...rules }
					for (let key in all) {
						this.zhCN[key] = all[key].name
					}
				}
			})

		}
	}
})