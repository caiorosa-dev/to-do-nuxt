import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'modules/tasks', stateFactory: true, namespaced: true })
export default class Tasks extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	tasks = 0;

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
}
