<template>
	<section
		class="
			absolute
			top-0
			left-0
			w-full
			h-full
			flex
			justify-center
			items-center
			bg-opacity-10 bg-black
			backdrop-filter backdrop-blur-sm
			transition-all
		"
	>
		<slot />
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped></style>
