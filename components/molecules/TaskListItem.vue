<template>
	<li class="flex gap-2 items-center rounded-2xl dark:bg-gray-800 bg-gray-100 p-0 h-12 transition-colors">
		<div class="flex justify-center w-12">
			<SmallButton
				v-if="task.check"
				color="green-400"
				path="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				@click="toggleTask"
			/>
			<SmallButton v-if="!task.check" color="green-400" class="bg-transparent border-2 border-green-400" path="" @click="toggleTask" />
		</div>
		<input
			v-model="task.content"
			:class="task.check ? 'line-through ' : ''"
			class="rounded-lg w-full h-full focus:outline-none bg-transparent pt-3 pb-3 dark:text-white text-gray-700 transition-colors font-light"
			placeholder=""
		/>
		<div class="flex justify-center w-12">
			<SmallButton
				color="red-400"
				class="bg-red-400"
				path="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				@click="deleteTask"
			/>
		</div>
	</li>
</template>

<script lang="ts">
import Vue from 'vue';
import { tasks } from '~/store';
import Task from '~/types/Task';

export default Vue.extend({
	props: {
		item: {
			type: Object as () => Task,
			required: true
		}
	},
	data() {
		return {
			task: {} as Task
		};
	},
	watch: {
		task: {
			async handler() {
				if (this.task.content.length > 0) {
					this.updateTask();
				} else {
					await this.deleteTask();
				}
			},
			deep: true
		}
	},
	created() {
		this.task = Object.assign({}, this.item);
	},
	methods: {
		toggleTask() {
			this.task.check = this.task.check === 0 ? 1 : 0;
		},
		async deleteTask() {
			await tasks.delete(this.task);
			this.$emit('update');
		},
		async updateTask() {
			await tasks.apiUpdate(this.task);
			this.$emit('update');
		}
	}
});
</script>
