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
			mainStore().getSchedules()
			mainStore().getCN()
		},
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			debugger
			return {
				title: '自定义分享标题',
				path: '/pages/regularBattle/regularBattle'
			}
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
