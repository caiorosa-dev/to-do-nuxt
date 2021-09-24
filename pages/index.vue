<template>
	<div class="container">
		<PageTitle>Hello World</PageTitle>
	</div>
</template>

<script lang="ts" scoped>
import Vue from 'vue';

export default Vue.extend({
	layout: 'navigation',
	middleware: 'auth'
});
</script>

<style>
.container {
	margin: 0 auto;
	max-width: 85%;
	height: 100%;

	display: grid;
	justify-content: center;
	align-items: center;
}
</style>
