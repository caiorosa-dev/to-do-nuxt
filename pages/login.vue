<template>
	<LoginTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	middleware: 'guest'
});
</script>
