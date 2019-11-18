import Vue from 'vue'
import App from './App'
import store from './store/store'
import http from './http/http'

Vue.config.productionTip = false

Vue.prototype.$http = http;

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
