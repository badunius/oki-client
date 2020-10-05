import Vue from 'vue';
import VueRouter from 'vue-router'

// import Home from '@/modules/Home/route'

// import NotFound from '@/app/404.vue'

Vue.use(VueRouter)

const routes = [
	/* ...Home,
	{
		path: '*',
		component: NotFound
	} */
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
