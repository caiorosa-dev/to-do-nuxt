<template>
	<button
		class="
			flex
			justify-center
			items-center
			w-full
			border-4 border-dashed
			dark:border-gray-800
			border-gray-200
			rounded-3xl
			text-5xl
			font-semibold
			text-center
			dark:text-gray-700
			text-gray-300
			hover:bg-gray-100 hover:text-gray-500 hover:border-opacity-0 hover:-translate-y-2
			dark:hover:bg-gray-800 dark:hover:border-opacity-0 dark:hover:text-gray-200
			transition-all
		"
		@click="emitClick"
	>
		+
	</button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});
</script>
