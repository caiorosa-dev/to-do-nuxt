<template>
	<transition name="fade">
		<ModalContainer v-if="showModal" class="transition-all">
			<div class="dark:bg-gray-800 bg-gray-100 p-4 rounded-2xl w-1/3 min-w-min grid grid-flow-row gap-4 justify-center">
				<header class="flex justify-between items-center mb-6">
					<TitleText text="Editar Coleção" />
					<SmallButton
						path="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						color="gray-500"
						@click="emitClick"
					/>
				</header>

				<section class="grid grid-flow-row gap-1 justify-center">
					<label class="dark:text-gray-200 text-gray-600">Nome</label>
					<input v-model="form.name" type="text" class="w-96 styled-input" />
				</section>

				<section>
					<label class="dark:text-gray-200 text-gray-600 w-full">Cor</label>
					<div class="grid grid-cols-5 items-center justify-items-center gap-2">
						<ColorInput
							v-for="color in colors"
							:key="color.id"
							:color="color.display"
							:checked="checkedInput(color.id)"
							:value="color.id"
							@check="updateColor"
						/>
					</div>
				</section>

				<footer class="w-full grid justify-end gap-2 items-center grid-flow-col grid-cols-2 mt-6">
					<div class="grid justify-end gap-2 items-center grid-flow-col grid-cols-2">
						<button class="bg-red-500 hover:bg-red-400 p-2 text-white font-semibold rounded-lg transition-all" @click="deleteItem">Deletar</button>
					</div>
					<div class="grid justify-end gap-2 items-center grid-flow-col grid-cols-2">
						<button
							class="
								dark:bg-gray-600 dark:hover:bg-gray-500
								bg-gray-200
								hover:bg-gray-300
								p-2
								dark:text-white
								text-gray-600
								font-semibold
								rounded-lg
								transition-all
							"
							@click="updateCollection"
						>
							Salvar
						</button>
						<button
							class="dark:hover:bg-gray-600 hover:bg-gray-200 p-2 dark:text-gray-200 text-gray-600 font-semibold rounded-lg transition-all"
							@click="emitClick"
						>
							Sair
						</button>
					</div>
				</footer>
			</div>
		</ModalContainer>
	</transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { collections, colors, loading } from '~/store';
import Collection from '~/types/Collection';

export default Vue.extend({
	props: {
		show: {
			default: false,
			type: Boolean
		}
	},
	data() {
		return {
			form: {} as Collection,
			showModal: false
		};
	},
	computed: {
		colors() {
			return colors.$colors;
		}
	},
	watch: {
		show() {
			this.showModal = this.show;
		}
	},
	created() {
		this.showModal = this.show;

		this.form = Object.assign({}, collections.$selected);
	},
	methods: {
		emitClick() {
			this.$emit('click');
		},
		checkedInput(id: number) {
			return this.form.color_id === id;
		},
		updateColor(e: number) {
			this.form.color_id = e;
		},
		async deleteItem() {
			await collections.delete(this.form);

			this.$router.push('/');
		},
		async updateCollection() {
			this.emitClick();
			try {
				loading.update(true);

				await collections.apiUpdate(this.form);

				loading.update(false);
			} catch (error) {
				loading.updateError({ occurred: true, message: error });
			}
		}
	}
});
</script>
