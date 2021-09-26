<template>
	<nav class="flex justify-between dark:bg-gray-800 bg-gray-100 px-5 py-2 shadow-md transition-colors">
		<div class="icon-group">
			<NuxtLink to="/">
				<NavItem title="Dashboard">
					<path
						d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
					/>
				</NavItem>
			</NuxtLink>
			<NuxtLink to="/">
				<NavItem title="Sobre">
					<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
				</NavItem>
			</NuxtLink>
		</div>
		<div class="icon-group justify-end">
			<ThemeToggleButton />
			<button @click="logout">
				<NavItem>
					<path
						fill-rule="evenodd"
						d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
						clip-rule="evenodd"
					/>
				</NavItem>
			</button>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { authentication } from '~/store';

export default Vue.extend({
	methods: {
		async logout() {
			await authentication.destroy();

			this.$router.push('/login');
		}
	}
});
</script>
