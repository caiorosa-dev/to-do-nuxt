<template>
	<button class="w-7 h-7 rounded-lg flex justify-center items-center" :class="`bg-${color}`" @click="emitClick">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" :d="path" clip-rule="evenodd" />
		</svg>
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		path: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	},
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});
</script>

<style lang="scss" scoped></style>
