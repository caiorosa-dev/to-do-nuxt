import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ name: 'modules/authentication', stateFactory: true, namespaced: true })
export default class Authentication extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	token = '';

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
}
