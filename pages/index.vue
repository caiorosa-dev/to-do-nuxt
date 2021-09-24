<template>
	<div class="container">
		<div>
			<Logo />
			<h1 class="title">to-do</h1>
			<div class="links">
				<a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green"> Documentation </a>
				<a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey"> GitHub </a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	max-width: 85%;
}
</style>
