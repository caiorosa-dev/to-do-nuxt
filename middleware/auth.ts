import { Middleware } from '@nuxt/types';

const auth: Middleware = ({ store, redirect }) => {
	if (!store.state.modules.authentication.token) {
		return redirect('/login');
	}
};

export default auth;
