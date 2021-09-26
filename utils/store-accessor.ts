/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Authentication from '~/store/modules/authentication';
import Collections from '~/store/modules/collections';
import Colors from '~/store/modules/colors';
import Loading from '~/store/modules/loading';
import Tasks from '~/store/modules/tasks';
import Theme from '~/store/modules/theme';
import User from '~/store/modules/user';

let authentication: Authentication;
let theme: Theme;
let loading: Loading;

/**
 * Database
 */

let tasks: Tasks;
let users: User;
let colors: Colors;
let collections: Collections;

function initializeStores(store: Store<any>): void {
	authentication = getModule(Authentication, store);
	theme = getModule(Theme, store);
	loading = getModule(Loading, store);

	colors = getModule(Colors, store);
	collections = getModule(Collections, store);
	tasks = getModule(Tasks, store);
	users = getModule(User, store);
}

export { initializeStores, authentication, loading, theme, tasks, users, colors, collections };
