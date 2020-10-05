<template lang="pug">
	div.app 
		div.box
			p 12312312
			p 12312312
			p 12312312
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
	name: 'app',

	components: {
	},

	data: () => ({
	}),
	
	async mounted() {
		this.$nextTick(this.init)
	},

	computed: {
		...mapGetters('auth', ['getExpiry'])
	},

	methods: {
		...mapActions(['init']),
	}

})
</script>