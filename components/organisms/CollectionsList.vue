<template>
	<section class="collections-list grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 justify-items-center gap-8">
		<CollectionCard v-for="obj in allCollections" :key="obj.id" :value="obj" :taskslist="getTasks(obj.id)" />
		<SkelletonCard v-for="index in amount" :key="index" />

		<CreateCollectionButton v-if="!isLoading" @click="openModal" />
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { collections, loading, tasks } from '~/store';
import Collection from '~/types/Collection';
import Task from '~/types/Task';

export default Vue.extend({
	computed: {
		allCollections(): Collection[] {
			if (this.isLoading) return [];
			return collections.$collections;
		},
		isLoading() {
			return loading.$loading;
		},
		amount() {
			if (!this.isLoading) return 0;
			return 6;
		}
	},
	methods: {
		openModal() {
			this.$emit('open-modal');
		},
		getTasks(collectionid: number): Task[] {
			return tasks.$tasks.filter((task) => task.collection_id === collectionid);
		}
	}
});
</script>

<style lang="scss" scoped>
.collections-list {
	grid-auto-rows: 11rem;
}
</style>
