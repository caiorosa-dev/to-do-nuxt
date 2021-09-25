<template>
	<h4 class="dark:text-gray-200 text-gray-600 text-base font-semibold transition-colors">{{ text }}</h4>
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
