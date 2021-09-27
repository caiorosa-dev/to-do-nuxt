<template>
	<NuxtLink
		class="w-full dark:bg-gray-800 bg-gray-100 p-7 rounded-3xl transition-all group hover:ring-2 hover:cursor-pointer hover:-translate-y-3"
		:class="`hover:ring-${colorClass} ring-${colorClass}`"
		:to="`/collection/${collection.id}`"
		@click="emitClick"
	>
		<div class="grid justify-start gap-6 grid-rows-2 grid-cols-1 items-end">
			<div class="header">
				<CollectionIcon :color-class="`bg-${colorClass}`" />
			</div>
			<div class="body">
				<TitleText :text="collection.name" />
				<div class="flex justify-between self-start items-center">
					<SmallText>{{ tasksCompleted }}/{{ totalTasks }} checks</SmallText>
					<CollectionLoading :current="currentCompleted" :color="colorClass" />
				</div>
			</div>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue';
import { colors } from '~/store';
import Collection from '~/types/Collection';
import Task from '~/types/Task';

export default Vue.extend({
	props: {
		value: {
			required: true,
			type: Object
		},
		taskslist: {
			required: true,
			type: Array
		}
	},
	data() {
		return {
			collection: {} as Collection,
			tasks: {} as Task[]
		};
	},
	computed: {
		colorClass(): string {
			const value = colors.$colors.find((color) => color.id === this.collection.color_id);

			if (value !== undefined) return `${value.display}`;

			return 'gray-600';
		},
		tasksCompleted(): number {
			return this.tasks.filter((task) => task.check === 1).length;
		},
		totalTasks(): number {
			return this.tasks.length;
		},
		currentCompleted(): number {
			const amount: number = (100 * Number(this.tasksCompleted)) / Number(this.totalTasks);

			return amount;
		}
	},
	created() {
		this.collection = this.value;
		this.tasks = this.taskslist as any;
	},
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});
</script>
