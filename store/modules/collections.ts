import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Collection from '~/types/Collection';
import { $axios } from '~/utils/nuxt-instance';

@Module({ name: 'modules/collections', stateFactory: true, namespaced: true })
export default class Collections extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	collections = [] as Collection[];

	get $collections() {
		return this.collections;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_COLLECTIONS(data: Collection[]) {
		this.collections = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(collections: Collection[]) {
		this.context.commit('SET_COLLECTIONS', collections);
	}

	@Action
	public async fetch() {
		const collections = await $axios.$get('/collection');

		this.context.commit('SET_COLLECTIONS', collections);
	}
}
