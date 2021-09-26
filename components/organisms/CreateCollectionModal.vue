<template>
	<transition name="fade">
		<ModalContainer v-if="showModal" class="transition-all">
			<div class="dark:bg-gray-800 bg-gray-100 p-4 rounded-2xl w-1/2">
				<header class="flex justify-between items-center">
					<TitleText text="Nova Coleção" />
					<SmallButton
						path="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						color="gray-500"
						@click="emitClick"
					/>
				</header>
			</div>
		</ModalContainer>
	</transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		show: {
			default: false,
			type: Boolean
		}
	},
	data() {
		return {
			form: {
				color: 1,
				name: ''
			},
			showModal: false
		};
	},
	watch: {
		show() {
			this.showModal = this.show;
		}
	},
	created() {
		this.showModal = this.show;
	},
	methods: {
		emitClick() {
			this.$emit('click');
		}
	}
});
</script>
