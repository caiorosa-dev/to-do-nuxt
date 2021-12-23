<template>
	<header class="flex justify-between">
		<div class="grid gap-4 grid-flow-col items-center">
			<MediumButton
				color="gray-800"
				path="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
				@click="back"
			/>
			<PageTitle>{{ collectionName }}</PageTitle>
		</div>
		<button><PageTitle>...</PageTitle></button>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';
import { collections } from '~/store';

export default Vue.extend({
	data() {
		return {
			collectionName: ''
		};
	},
	mounted() {
		this.collectionName = collections.$selected.name;
	},
	methods: {
		back() {
			this.$router.push('/');
		}
	}
});
</script>
