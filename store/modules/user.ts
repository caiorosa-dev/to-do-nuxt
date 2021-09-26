import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { RegisterPayload } from '~/types/Payload';
import { $axios } from '~/utils/nuxt-instance';
import { authentication, loading } from '~/store';

@Module({ name: 'modules/user', stateFactory: true, namespaced: true })
export default class User extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	user = {} as User;

	get $user() {
		return this.user;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/

	@Mutation
	private SET_USER(data: User) {
		this.user = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/

	@Action
	public update(data: User) {
		this.context.commit('SET_USER', data);
	}

	@Action
	public async create({ name, email, password }: RegisterPayload) {
		try {
			const data = await $axios.$post('/user', { name, email, password });

			this.update(data);
			authentication.create({ email, password });
		} catch (error: any) {
			loading.updateError({
				occurred: true,
				message: error
			});
		}
	}
}
