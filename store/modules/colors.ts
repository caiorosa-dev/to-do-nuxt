import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Color from '~/types/Color';
import { $axios } from '~/utils/nuxt-instance';

@Module({ name: 'modules/colors', stateFactory: true, namespaced: true })
export default class Colors extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	colors = [] as Color[];

	get $colors(): Color[] {
		return this.colors;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_COLORS(data: Color[]) {
		this.colors = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(colors: Color[]) {
		this.context.commit('SET_COLORS', colors);
	}

	@Action
	public async fetch() {
		const colors = await $axios.$get('/color');

		this.context.commit('SET_COLORS', colors);
	}
}
