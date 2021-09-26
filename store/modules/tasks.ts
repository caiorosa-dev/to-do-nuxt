import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Task from '~/types/Task';
import { $axios } from '~/utils/nuxt-instance';

@Module({ name: 'modules/tasks', stateFactory: true, namespaced: true })
export default class Tasks extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	tasks = [] as Task[];

	get $tasks() {
		return this.tasks;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_TASKS(data: Task[]) {
		this.tasks = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(tasks: Task[]) {
		this.context.commit('SET_TASKS', tasks);
	}

	@Action
	public async fetch() {
		let tasks = await $axios.$get('/task');

		if (tasks === undefined) tasks = [];

		this.context.commit('SET_TASKS', tasks);
	}
}
