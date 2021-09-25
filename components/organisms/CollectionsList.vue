<template>
	<section class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8">
		<CollectionCard v-for="obj in allCollections" :key="obj.id" :value="obj" />

		<CreateCollectionButton @click="openModal" />
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { collections } from '~/store';

export default Vue.extend({
	computed: {
		allCollections() {
			return collections.$collections;
		}
	},
	methods: {
		openModal() {
			this.$emit('open-modal');
		}
	}
});
</script>
