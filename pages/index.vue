<template>
	<div class="container">
		<CollectionsTemplate />
	</div>
</template>

<script lang="ts" scoped>
import Vue from 'vue';
import { collections, colors } from '~/store';

export default Vue.extend({
	layout: 'navigation',
	middleware: 'auth',
	async fetch() {
		await colors.fetch();
		await collections.fetch();
	}
});
</script>

<style>
.container {
	margin: 0 auto;
	max-width: 70%;
	height: 100%;

	@media screen and (min-width: 1600px) {
		max-width: 47.5%;
	}
}
</style>
