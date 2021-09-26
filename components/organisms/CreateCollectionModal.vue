<template>
	<transition name="fade">
		<ModalContainer v-if="show" class="transition-all">
			<div class="dark:bg-gray-800 bg-gray-100 p-4 rounded-2xl"></div>
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
	}
});
</script>
