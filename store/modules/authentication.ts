import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { LoginPayload } from '~/types/Payload';
import { $axios, $cookies } from '~/utils/nuxt-instance';

@Module({ name: 'modules/authentication', stateFactory: true, namespaced: true })
export default class Authentication extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	token = '';

	get $token() {
		return this.token;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/

	@Mutation
	private SET_TOKEN(data: string) {
		this.token = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/

	@Action
	public update(token: string) {
		this.context.commit('SET_TOKEN', token);
	}

	@Action
	public async create({ email, password }: LoginPayload) {
		const { type, token } = await $axios.$post('/auth', { email, password });
		const accessToken = `${type} ${token}`;

		$cookies.set('token', accessToken, {
			maxAge: 60 * 60 * 24 * 30 // 30 days
		});

		this.context.commit('SET_TOKEN', accessToken);
	}

	@Action
	public async destroy() {
		await $axios.$delete('/auth', {
			headers: {
				Authorization: this.token
			}
		});

		$cookies.remove('token');
		this.context.commit('SET_TOKEN', '');
	}

	@Action
	public updateToken() {
		const token = $cookies.get('token') || undefined;

		this.context.commit('SET_TOKEN', token);
	}
}
