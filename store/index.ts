import { defineStore } from 'pinia'
import { mapCloudList, mapIdList, weaponCloudList0, weaponIdList0, weaponCloudList1, weaponIdList1, festCloud, festIdList } from './imgInfo'
import GearData from './types.ts'
export const mainStore = defineStore('main', {
	state: () => {
		return {
			regularBattleSchedules: [] as any, // 涂地日程
			anarchyBattleSchedules: [] as any, // 真格日程
			xBattleSchedules: [] as any, // 真格日程
			salmonRunSchedules: [], // 打工日程
			lang: {}, // 语言
			fest: false, // 祭奠
			festList: null, // 祭奠列表
			currentFest: {} as any, // 当前祭奠信息
			gear: {} as GearData, // 商城
			mapImgList: {}, // 地图地址
			weaponImgList: {}, // 武器地址
			festImgList: {}, // 祭奠图片地址
			bannerImage: '', // 大型跑横幅
			bigRunSchedules: null // 大型跑
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
					const { data: { regularSchedules, bankaraSchedules, coopGroupingSchedule, currentFest, festSchedules, xSchedules } } = JSON.parse(res.result)
					this.regularBattleSchedules = regularSchedules.nodes
					this.anarchyBattleSchedules = bankaraSchedules.nodes
					this.xBattleSchedules = xSchedules.nodes
					this.salmonRunSchedules = coopGroupingSchedule.regularSchedules.nodes
					// 用来查看图片id
					// const obj = {}
					// this.regularBattleSchedules.forEach(item => {
					// 	item.regularMatchSetting.vsStages.forEach(ite => {
					// 		if (!obj[ite.id]) {
					// 			obj[ite.id] = ite.image.url
					// 		}
					// 	})
					// })

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

					// 大型跑
					if (coopGroupingSchedule.bigRunSchedules.nodes?.length > 0) {
						this.bigRunSchedules = coopGroupingSchedule.bigRunSchedules.nodes[0]
						this.bigRunSchedules.source = true // 大型跑地图id不一样，让它直接加载原图
						this.bannerImage = coopGroupingSchedule.bannerImage.url
					}

					resolve(true)
				}).catch((err) => {
					console.log(err);
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
					const { stages, rules, gear, brands, powers, festivals /*weapons,*/ } = JSON.parse(res.result)
					const all = { ...stages, ...rules, ...gear, ...brands, ...powers, ...festivals }
					for (let key in all) {
						this.lang[key] = all[key].name ?? all[key]
					}
					resolve(true)

					// 用来查看图片id
					// let weaponArr = {}
					// for (let k in weapons) {
					// 	if (weaponArr[weapons[k].name]) {
					// 		weaponArr[weapons[k].name].id.push(k)
					// 	} else {
					// 		weaponArr[weapons[k].name] = {
					// 			id: [k]
					// 		}
					// 	}
					// }
					// console.log(weaponArr, 'weaponArr');
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
		},
		// 获取地图列表
		getMapImgList() {
			wx.cloud.init()
			wx.cloud.getTempFileURL({
				fileList: mapCloudList
			}).then(res => {
				mapIdList.forEach((id, index) => {
					this.mapImgList[id] = res.fileList[index].tempFileURL
				})
			})
		},
		// 获取武器列表（数组有长度限制，所以分开两次请求）
		getWeaponImgList() {
			wx.cloud.getTempFileURL({
				fileList: weaponCloudList0
			}).then(res => {
				weaponIdList0.forEach((idArr, index) => {
					idArr.forEach(id => {
						this.weaponImgList[id] = res.fileList[index].tempFileURL
					})
				})
			})

			wx.cloud.getTempFileURL({
				fileList: weaponCloudList1
			}).then(res => {
				weaponIdList1.forEach((idArr, index) => {
					idArr.forEach(id => {
						this.weaponImgList[id] = res.fileList[index].tempFileURL
					})
				})
			})
		},
		// 获取祭奠图片
		getFestImgList() {
			wx.cloud.getTempFileURL({
				fileList: festCloud
			}).then(res => {
				this.festImgList
				festIdList.forEach((id, index) => {
					this.festImgList[id] = res.fileList[index].tempFileURL
				})
			})
		},
		// 获取祭奠信息
		getFest() {
			return new Promise((resolve, reject) => {
				wx.cloud.callFunction({
					name: 'myCloudFn',
					data: {
						type: 'festivals'
					}
				}).then((res: any) => {
					const { EU: { data: { festRecords: { nodes } } } } = JSON.parse(res.result)
					this.festList = nodes

					type Item = {
						title: string,
						__splatoon3ink_id: string,
						teams: Team[]
					}

					interface Team {
						teamName: string
						[key: string]: any
					}

					this.festList.forEach((item: Item) => {
						const CN = this.lang[item.__splatoon3ink_id]
						item.title = CN.title
						item.teams.forEach((team, i: number) => {
							team.teamName = CN.teams[i].teamName
							team.background = `rgba(${team.color.r * 255}, ${team.color.g * 255}, ${team.color.b * 255}, ${team.color.a})`
						})
					})

					resolve(true)
				}).catch(() => {
					reject(false)
				})
			})
		}
	}
})