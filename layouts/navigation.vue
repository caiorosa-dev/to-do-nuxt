<template>
	<div class="navigation relative">
		<Header />
		<main class="dark:bg-gray-900 transition-colors main-content">
			<div class="container">
				<Nuxt />
			</div>
		</main>
		<ErrorModal />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.nuxt-progress {
	background-color: #818cf8;
	height: 3px;
}

.navigation {
	display: grid;
	grid-template-rows: auto 1fr;
	width: 100vw;
	height: 100vh;
}

.main-content {
	overflow-x: hidden;
}
</style>
