import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

interface ErrorObject {
	occurred: boolean;
	message: string;
}

type Error = ErrorObject | undefined;

@Module({ name: 'modules/loading', stateFactory: true, namespaced: true })
export default class Loading extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	loading = false;
	error = undefined as Error;

	get $loading() {
		return this.loading;
	}

	get $error() {
		return this.error;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_LOADING(data: boolean) {
		this.loading = data;
	}

	@Mutation
	public SET_ERROR(data: Error) {
		this.error = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(loading: boolean) {
		this.context.commit('SET_LOADING', loading);
	}

	@Action
	public updateError(error: Error) {
		this.context.commit('SET_ERROR', error);
	}
}
