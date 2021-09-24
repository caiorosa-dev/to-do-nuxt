/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Authentication from '~/store/modules/authentication';
import Tasks from '~/store/modules/tasks';
import User from '~/store/modules/user';

let authentication: Authentication;
let tasks: Tasks;
let users: User;

function initializeStores(store: Store<any>): void {
	authentication = getModule(Authentication, store);

	tasks = getModule(Tasks, store);
	users = getModule(User, store);
}

export { initializeStores, authentication, tasks, users };
