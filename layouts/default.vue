<template>
	<div class="root-container relative dark:bg-gray-900 transition-colors">
		<Nuxt />
	</div>
</template>

<style lang="scss" scoped>
.nuxt-progress {
	background-color: #818cf8;
	height: 3px;
}

.root-container {
	height: 100vh;
	width: 100vw;
	margin: 0;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
}
</style>
