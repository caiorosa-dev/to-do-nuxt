<template>
	<CollectionsTemplate />
</template>

<script lang="ts" scoped>
import Vue from 'vue';
import { collections, colors, loading, tasks } from '~/store';

export default Vue.extend({
	layout: 'navigation',
	middleware: 'auth',
	async created() {
		loading.update(true);

		try {
			await colors.fetch();
			await collections.fetch();
			await tasks.fetch();

			loading.update(false);
		} catch (error) {
			loading.updateError({ occurred: true, message: error });
		}
	}
});
</script>

<style></style>
