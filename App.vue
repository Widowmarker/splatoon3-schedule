<script>
	import {
		mainStore
	} from './store'
	import {
		onShareAppMessage,
	} from '@dcloudio/uni-app'
	export default {
		onLaunch: function() {
			console.log('App Launch')

			uni.showLoading({
				title: '日程加载中...',
				mask: true
			})

			const store = mainStore()
			// 获取日程
			store.getSchedules().then(() => {
				uni.hideLoading()
			}).catch(() => {
				uni.hideLoading()
				uni.showToast({
					title: '日程加载失败',
					icon: 'error'
				})
			})
			// 获取语言
			uni.getStorage({
				key: 'language',
				fail() {},
				complete(res) {
					store.getLanguage(res.data ?? 'zh-CN')
				}
			})
			store.getMapImgList()
			store.getWeaponImgList()
			store.getFestImgList()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url('./assets/css/font.css');

	page {
		background-color: #2a2e34;
		font-weight: 700;
	}
</style>
