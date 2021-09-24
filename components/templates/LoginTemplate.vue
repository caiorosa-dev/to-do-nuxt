<template>
	<section class="content">
		<PageTitle>Login</PageTitle>

		<form class="grid gap-5 justify-center items-center" @submit.prevent="login">
			<SmallText v-show="error" class="error font-semibold text-center text-red-500 transition-all">Credenciais inválidas.</SmallText>
			<SmallText v-show="success" class="error font-semibold text-center text-purple-500 transition-all">Sucesso! Redirecionando...</SmallText>
			<input v-model="form.email" class="styled-input" type="email" placeholder="Email" />
			<input v-model="form.password" class="styled-input" type="password" placeholder="Senha" />
			<button class="w-96 p-4 rounded-lg hover:opacity-80 border-b-4 border-black border-opacity-50 transition-all font-semibold text-white bg-gradient-to-tl from-blue-500 to-purple-500" type="submit">Entrar</button>
			<SmallText class="font-semibold text-center">Ainda não possui uma conta? <NuxtLink to="/register" class="text-gray-400 hover:text-gray-200 transition-all">Registre-se.</NuxtLink> </SmallText>
		</form>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { authentication } from '~/store';

export default Vue.extend({
	data() {
		return {
			error: false,
			success: false,
			form: {
				email: '',
				password: ''
			}
		};
	},
	methods: {
		async login() {
			try {
				await authentication.create(this.form);

				this.success = true;
				setTimeout(() => {
					this.$router.push('/');
				}, 1500);
			} catch {
				this.error = true;
				setTimeout(() => {
					this.error = false;
				}, 3000);
			}
		}
	}
});
</script>

<style lang="scss">
.content {
	display: grid;
	height: 95vh;
	width: 100vw;
	align-items: center;
	grid-template-rows: 1fr 4fr;
}

.error {
	opacity: 1;
	animation: anima 0.5s ease-in-out;
}

@keyframes anima {
	0% {
		transform: translateY(-20px);
		opacity: 0;
	}
}
</style>
