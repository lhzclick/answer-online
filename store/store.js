import Vue from 'vue'
import Vuex from 'vuex'
import Config from '../config'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: {
			authCode: '',
			nickName: '',
			avatarUrl: ''
		},
		imgSrc:Config.imgSrc
	},
	mutations: {
		changeUserInfo(state, { ...user
		}) {
			state.userInfo.authCode = user.authCode
			state.userInfo.avatarUrl = user.avatarUrl
			state.userInfo.nickName = user.nickName
		},
		login(state) {
			if (state.userInfo.authCode && state.userInfo.avatarUrl && state.userInfo.nickName) {

			} else {
				uni.login({
					scopes: 'auth_user',
					success: (res) => {
						if (res.authCode) {
							state.userInfo.authCode = res.authCode
							//  此处调用接口换取UID


							uni.getUserInfo({
								scopes: 'auth_user',
								success: (res1) => {
									state.userInfo.avatarUrl = res1.avatar
									state.userInfo.nickName = res1.nickName
								},
							})
						}
					}
				});
			}

		}
	},
	actions: {},
	getters: {}
})
