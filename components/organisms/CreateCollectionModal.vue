<template>
	<ModalContainer class="transition-all" :class="[{ hidden: !show }]">
		<h1>Criar tlg</h1>
	</ModalContainer>
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
