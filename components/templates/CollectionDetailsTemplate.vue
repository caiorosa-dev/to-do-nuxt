<template>
	<main class="pt-8 grid items-center gap-16">
		<CollectionHeader @open-modal="toggleModal" />

		<TaskForm class="mt-6" @update="updateTasks" />

		<TasksList :tasks-list="tasks" @update="updateTasks" />

		<EditCollectionModal :show="showModal" @click="toggleModal" />
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { tasks } from '~/store';
import Task from '~/types/Task';

export default Vue.extend({
	data() {
		return {
			showModal: false,
			tasks: [] as Task[]
		};
	},
	created() {
		this.updateTasks();
	},
	methods: {
		updateTasks() {
			this.tasks = tasks.$selected;
		},
		toggleModal() {
			this.showModal = !this.showModal;
		}
	}
});
</script>

<style lang="scss" scoped>
.flex-grow-2 {
	flex-grow: 2;
}
</style>
