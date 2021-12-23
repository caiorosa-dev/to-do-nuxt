<template>
	<section>
		<form class="group flex items-center rounded-2xl styled-form p-0 h-12 gap-4" @submit.prevent="sendForm">
			<input
				v-model="form.content"
				class="rounded-lg w-full h-full focus:outline-none bg-transparent focus-within:border-purple-500 p-3"
				placeholder="Tente: Estudar programação"
			/>
			<div class="flex justify-center w-12">
				<SmallButton color="green-400" path="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" type="submit" />
			</div>
		</form>
		<SmallText v-show="error" class="notification font-semibold text-red-400 transition-all mt-2">Preencha com algo.</SmallText>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { collections, tasks } from '~/store';

export default Vue.extend({
	data() {
		return {
			error: false,
			form: {
				content: '',
				collection_id: 0,
				check: 0
			}
		};
	},
	mounted() {
		this.form.collection_id = collections.$selected.id as number;
	},
	methods: {
		async sendForm() {
			if (this.form.content.length > 0 && this.form.collection_id > 0) {
				await tasks.create(this.form);
				this.$emit('update');
			} else {
				this.error = true;
				setTimeout(() => {
					this.error = false;
				}, 3000);
			}
		}
	}
});
</script>
