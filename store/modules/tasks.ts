import { Module, VuexModule } from 'vuex-module-decorators';
import Task from '~/types/Task';

@Module({ name: 'modules/tasks', stateFactory: true, namespaced: true })
export default class Tasks extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	tasks = [] as Task[];
	single = {} as Task;

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS (API REQUESTS)
	*/
}
