<template>
	<h4 class="text-gray-100 bg-gray-100 rounded-xl dark:text-gray-800 dark:bg-gray-800 text-xl transition-colors w-48">{{ text }}</h4>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		text: {
			required: true,
			type: String
		}
	}
});
</script>
