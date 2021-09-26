<template>
	<div class="navigation relative">
		<Header />
		<main class="dark:bg-gray-900 transition-colors">
			<Nuxt />
		</main>
		<ErrorModal />
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
}
</style>
