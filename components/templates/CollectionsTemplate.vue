<template>
	<div class="collections-template grid pt-8">
		<PageTitle class="justify-self-start">Coleções</PageTitle>

		<CollectionsList class="mt-16" @open-modal="toggleModal" />

		<CreateCollectionModal :show="showModal" @click="toggleModal" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data() {
		return {
			showModal: false
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		}
	}
});
</script>

<style lang="scss" scoped>
.collections-template {
	grid-template-rows: auto 1fr;
}
</style>
