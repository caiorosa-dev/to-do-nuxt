<template>
	<button class="w-9 h-9 rounded-xl flex justify-center items-center transition-all hover:opacity-75 dark:bg-gray-800 bg-gray-200" @click="emitClick">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 dark:text-white text-gray-600" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" :d="path" clip-rule="evenodd" />
		</svg>
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		path: {
			type: String,
			required: true
		}
	},
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});
</script>
