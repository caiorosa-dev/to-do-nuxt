<template>
	<div class="w-full dark:bg-gray-800 bg-gray-100 p-7 rounded-3xl transition-all group hover:ring-2 hover:cursor-pointer" :class="`hover:ring-${colorClass} ring-${colorClass}`">
		<div class="grid justify-start gap-6 grid-rows-2 grid-cols-1 items-end">
			<div class="header">
				<CollectionIcon :color-class="`bg-${colorClass}`" />
			</div>
			<div class="body">
				<TitleText :text="collection.name" />
				<div class="flex justify-between self-start">
					<SmallText>2/6 checks</SmallText>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { colors } from '~/store';
import Collection from '~/types/Collection';

export default Vue.extend({
	props: {
		value: {
			required: true,
			type: Object
		}
	},
	data() {
		return {
			collection: {} as Collection
		};
	},
	computed: {
		colorClass(): string {
			const value = colors.$colors.find((color) => color.id === this.collection.color_id);

			if (value !== undefined) return `${value.display}`;

			return 'gray-600';
		}
	},
	created() {
		this.collection = this.value;
	}
});
</script>
