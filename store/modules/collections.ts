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
	selected = {} as Collection;

	get $collections() {
		return this.collections;
	}

	get $selected() {
		return this.selected;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_COLLECTIONS(data: Collection[]) {
		this.collections = data;
	}

	@Mutation
	public SET_SELECTED(data: Collection) {
		this.selected = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(collections: Collection[]) {
		this.context.commit('SET_COLLECTIONS', collections);
	}

	@Action
	public async create(data: Collection) {
		await $axios.$post('/collection', data);
		await this.fetch();
	}

	@Action
	public async apiUpdate(data: Collection) {
		await $axios.$put(`/collection/${data.id}`, data);
		await this.fetch();

		this.select(data.id as number);
	}

	@Action
	public async delete(data: Collection) {
		await $axios.$delete(`/collection/${data.id}`);
		await this.fetch();
	}

	@Action
	public select(id: number) {
		const collection = this.collections.find((obj) => obj.id === id);

		this.context.commit('SET_SELECTED', collection);
	}

	@Action
	public async fetch() {
		let collections = await $axios.$get('/collection');

		if (collections === undefined) collections = [];

		this.context.commit('SET_COLLECTIONS', collections);
	}
}
