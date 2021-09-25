/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Authentication from '~/store/modules/authentication';
import Collections from '~/store/modules/collections';
import Colors from '~/store/modules/colors';
import Tasks from '~/store/modules/tasks';
import Theme from '~/store/modules/theme';
import User from '~/store/modules/user';

let authentication: Authentication;
let tasks: Tasks;
let users: User;
let theme: Theme;
let colors: Colors;
let collections: Collections;

function initializeStores(store: Store<any>): void {
	authentication = getModule(Authentication, store);

	tasks = getModule(Tasks, store);
	users = getModule(User, store);
	theme = getModule(Theme, store);
	colors = getModule(Colors, store);
	collections = getModule(Collections, store);
}

export { initializeStores, authentication, tasks, users, theme, colors, collections };
