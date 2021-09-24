import { Middleware } from '@nuxt/types';

const guest: Middleware = ({ store, redirect }) => {
	if (store.state.modules.authentication.token) {
		return redirect('/');
	}
};

export default guest;
