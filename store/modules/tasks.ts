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
	selected = [] as Task[];

	get $tasks() {
		return this.tasks;
	}

	get $selected() {
		return this.selected;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_TASKS(data: Task[]) {
		this.tasks = data;
	}

	@Mutation
	public SET_SELECTED(data: Task[]) {
		this.selected = data;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(tasks: Task[]) {
		this.context.commit('SET_TASKS', tasks);
	}

	@Action
	public selectTasksByCollection(collectionId: number) {
		const selected = this.tasks.filter((task) => task.collection_id === collectionId);

		this.context.commit('SET_SELECTED', selected);
	}

	@Action
	public async create(data: Task) {
		await $axios.$post('/task', data);
		await this.fetch();
		this.selectTasksByCollection(data.collection_id as number);
	}

	@Action
	public async apiUpdate(data: Task) {
		await $axios.$put(`/task/${data.id}`, data);
		await this.fetch();
		this.selectTasksByCollection(data.collection_id as number);
	}

	@Action
	public async delete(data: Task) {
		await $axios.$delete(`/task/${data.id}`);
		await this.fetch();
		this.selectTasksByCollection(data.collection_id as number);
	}

	@Action
	public async fetch() {
		let tasks = await $axios.$get('/task');

		if (tasks === undefined) tasks = [];

		this.context.commit('SET_TASKS', tasks);
	}
}
