import { defineStore } from 'pinia'
export const mainStore = defineStore('main', {
	state: () => {
		return {
			regularBattleSchedules: [] as any, // 涂地日程
			anarchyBattleSchedules: [] as any, // 真格日程
			salmonRunSchedules: [], // 打工日程
			lang: {}
		}
	},
	getters: {},
	actions: {
		// 获取所有日程
		getSchedules() {
			return new Promise((resolve, reject) => {
				wx.cloud.init()
				wx.cloud.callFunction({
					name: 'myCloudFn',
					data: {
						type: 'schedules'
					}
				}).then((res: any) => {
					const { data: { regularSchedules, bankaraSchedules, coopGroupingSchedule } } = JSON.parse(res.result)
					this.regularBattleSchedules = regularSchedules.nodes
					this.anarchyBattleSchedules = bankaraSchedules.nodes
					this.salmonRunSchedules = coopGroupingSchedule.regularSchedules.nodes
					resolve(true)
				}).catch(() => {
					reject(false)
				})
			})
		},
		// 获取语言
		getLanguage(language: string = 'zh-CN') {
			return new Promise((resolve, reject) => {
				wx.cloud.init()
				wx.cloud.callFunction({
					name: 'myCloudFn',
					data: {
						language
					}
				}).then((res: any) => {
					const { stages, rules } = JSON.parse(res.result)
					const all = { ...stages, ...rules }
					for (let key in all) {
						this.lang[key] = all[key].name
					}
					resolve(true)
				}).catch(() => {
					reject(false)
				})
			})
		}
	}
})