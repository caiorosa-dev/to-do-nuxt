<template>
	<CollectionDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { loading, tasks, collections } from '~/store';

export default Vue.extend({
	layout: 'navigation',
	middleware: 'auth',
	fetch() {
		loading.update(true);

		if (collections.$collections.length === 0) this.$router.push('/');

		try {
			const paramId = Number(this.$route.params.id);

			collections.select(paramId);
			tasks.selectTasksByCollection(paramId);

			loading.update(false);
		} catch (error) {
			loading.updateError({ occurred: true, message: error });
		}
	}
});
</script>
