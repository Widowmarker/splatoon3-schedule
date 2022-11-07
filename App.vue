<script>
	import {
		mainStore
	} from './store'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			mainStore().getSchedules()
			mainStore().getCN()
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
