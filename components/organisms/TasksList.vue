<template>
	<section class="grid gap-10">
		<div v-show="toDoAmount > 0" class="todo-tasks">
			<TitleText :text="`A fazer - ${toDoAmount}`" />
			<transition-group name="fade" mode="out-in" class="grid grid-cols-1 gap-3 mt-3">
				<TaskListItem v-for="task in toDoTasks" :key="task.id" :item="task" @update="updateTasks" />
			</transition-group>
		</div>

		<div v-show="finishedAmount > 0" class="finished-tasks mb-3">
			<TitleText :text="`Finalizado - ${finishedAmount}`" />

			<transition-group name="fade" mode="out-in" class="grid grid-cols-1 gap-3 mt-3">
				<TaskListItem v-for="task in finishedTasks" :key="task.id" :item="task" @update="updateTasks" />
			</transition-group>
		</div>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import Task from '~/types/Task';

export default Vue.extend({
	props: {
		tasksList: {
			type: Array as () => Task[],
			required: true
		}
	},
	computed: {
		toDoTasks(): Task[] {
			return this.tasksList.filter((task) => task.check === 0);
		},
		finishedTasks(): Task[] {
			return this.tasksList.filter((task) => task.check === 1);
		},
		toDoAmount(): number {
			return this.toDoTasks.length;
		},
		finishedAmount(): number {
			return this.finishedTasks.length;
		}
	},
	methods: {
		updateTasks() {
			this.$emit('update');
		}
	}
});
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>
