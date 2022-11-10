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
			const store = mainStore()
			store.getSchedules()
			store.getLanguage()
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
