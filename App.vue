<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function() {
			this.login()
			// console.log('App Launch')
			
		},
		onShow: function() {
			// console.log('App Show')
			
		},
		onHide: function() {
			// console.log('App Hide')
		},
		methods: {
			...mapMutations(['changeUserInfo','login'])
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
