<template>
	<div class="flex items-center gap-1 dark:text-gray-400 dark:hover:text-gray-200 text-gray-500 hover:text-gray-600 transition-colors">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20">
			<slot />
		</svg>
		<h3 class="font-semibold">{{ title }}</h3>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		// eslint-disable-next-line vue/require-default-prop
		title: {
			required: false,
			type: String
		}
	}
});
</script>
