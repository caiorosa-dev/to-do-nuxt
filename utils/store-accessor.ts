/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Authentication from '~/store/modules/authentication';
import Tasks from '~/store/modules/tasks';
import Theme from '~/store/modules/theme';
import User from '~/store/modules/user';

let authentication: Authentication;
let tasks: Tasks;
let users: User;
let theme: Theme;

function initializeStores(store: Store<any>): void {
	authentication = getModule(Authentication, store);

	tasks = getModule(Tasks, store);
	users = getModule(User, store);
	theme = getModule(Theme, store);
}

export { initializeStores, authentication, tasks, users, theme };
