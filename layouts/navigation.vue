<template>
	<div class="navigation">
		<div class="navbar">
			
		</div>
		<main class="bg-gray-900">
			<Nuxt />
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.navigation {
	display: grid;
	grid-template-rows: auto 1fr;
	width: 100vw;
	height: 100vh;

	.navbar {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
}
</style>
