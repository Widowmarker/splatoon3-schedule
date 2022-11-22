import { rejects } from 'assert'
import { resolve } from 'dns'
import { defineStore } from 'pinia'
import GearData from './types.ts'
export const mainStore = defineStore('main', {
	state: () => {
		return {
			regularBattleSchedules: [] as any, // 涂地日程
			anarchyBattleSchedules: [] as any, // 真格日程
			salmonRunSchedules: [], // 打工日程
			lang: {}, // 语音
			fest: false, // 祭奠
			currentFest: {} as any, // 当前祭奠信息
			gear: {} as GearData // 商城
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
					const { data: { regularSchedules, bankaraSchedules, coopGroupingSchedule, currentFest, festSchedules } } = JSON.parse(res.result)
					this.regularBattleSchedules = regularSchedules.nodes
					this.anarchyBattleSchedules = bankaraSchedules.nodes
					this.salmonRunSchedules = coopGroupingSchedule.regularSchedules.nodes
					const obj = {}
					this.regularBattleSchedules.forEach(item => {
						item.regularMatchSetting.vsStages.forEach(ite => {
							if (!obj[ite.id]) {
								obj[ite.id] = ite.image.url
							}
						})
					})

					// 祭奠
					if (currentFest) {
						const startTime = new Date(currentFest.startTime).getTime()
						const endTime = new Date(currentFest.endTime).getTime()
						const now = new Date().getTime()

						if (startTime <= now && endTime >= now) {
							this.fest = true
							this.currentFest = currentFest
						}

						if (festSchedules.nodes.filter((v: any) => v.festMatchSetting).length > 0) {
							const arr1 = regularSchedules.nodes.filter((item: any) => item.regularMatchSetting)
							const arr2 = festSchedules.nodes.filter((item: any) => {
								if (item.festMatchSetting) {
									item.regularMatchSetting = item.festMatchSetting
									return item
								}
							})
							this.regularBattleSchedules = arr1.concat(arr2)
						}
					}

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
					const { stages, rules, gear, brands, powers } = JSON.parse(res.result)
					const all = { ...stages, ...rules, ...gear, ...brands, ...powers }
					for (let key in all) {
						this.lang[key] = all[key].name
					}
					resolve(true)
				}).catch(() => {
					reject(false)
				})
			})
		},
		// 获取商城
		getGear() {
			return new Promise((resolve, reject) => {
				wx.cloud.init()
				wx.cloud.callFunction({
					name: 'myCloudFn',
					data: {
						type: 'gear'
					}
				}).then((res: any) => {
					this.gear = JSON.parse(res.result).data.gesotown
					resolve(true)
				}).catch(() => {
					reject(false)
				})
			})
		}
	}
})