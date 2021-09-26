<template>
	<transition name="fade">
		<ModalContainer v-if="show" class="transition-all">
			<div class="dark:bg-gray-800 bg-gray-100 p-4 rounded-2xl w-2/6">
				<header class="flex justify-center">
					<PageTitle>Um erro aconteceu!</PageTitle>
				</header>
				<section>
					<TitleText class="text-center mt-10" text="Por favor tente recarregar a página, e caso continue, reporte no meu github!" />
				</section>
			</div>
		</ModalContainer>
	</transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { loading } from '~/store';

export default Vue.extend({
	computed: {
		show(): boolean {
			return loading.$error !== undefined;
		}
	}
});
</script>
