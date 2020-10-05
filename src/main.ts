import Vue from 'vue'

// App essentials
import router from '@/router'
import store from '@/store'

// App itself
import App from '@/app/App.vue'

// Nice things
import './style/index.scss'
// import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false



const app = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
	components: { App },
})

export default app

console.log(process.env)
console.log(
	'APP v%s %s %s',
	process.env.VUE_APP_VERSION,
	process.env.VUE_APP_BRANCH,
	process.env.VUE_APP_DATE,
)
