<template>
	<div
		class="w-full h-10 border-4 rounded-lg cursor-pointer transition-all hover:opacity-70"
		:class="`${checkedClass} border-${color}`"
		@click="update"
	></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		checked: {
			required: true,
			type: Boolean
		},
		color: {
			required: true,
			type: String
		},
		value: {
			required: true,
			type: Number
		}
	},
	computed: {
		checkedClass(): string {
			return this.checked ? `bg-${this.color}` : '';
		}
	},
	methods: {
		update() {
			this.$emit('check', this.value);
		}
	}
});
</script>

<style scoped></style>
