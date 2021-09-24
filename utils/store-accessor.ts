import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Tasks from '~/store/modules/tasks';

// eslint-disable-next-line import/no-mutable-exports
let tasksStore: Tasks;

function initializeStores(store: Store<any>): void {
	tasksStore = getModule(Tasks, store);
}

export { initializeStores, tasksStore };
