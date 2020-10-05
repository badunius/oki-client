import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const defaultState = () => ({})

const state = defaultState()

const actions = {
	async init({ commit, dispatch }) {
		return true
	}
}

const mutations = {
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules: {
		// auth,
	},
	strict: debug,
	plugins: debug ? [] : []
})